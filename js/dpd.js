(function(){

window.project = window.project || {};
window.DPD = project.DPD = {};

let miss = () => ({"0": 1});

DPD.fromMove = function fromMove (accuracy, rolls, critChance, critrolls, multihit) {
	if (Array.isArray(rolls)) 
		rolls = DPD.fromValues(...rolls);
	if (Array.isArray(critrolls))
		critrolls = DPD.fromValues(...critrolls);
	
	let damage;
	
	if (critChance === true || critChance >= 1)
		damage = critrolls;
	else if (critChance > 0)
		damage = DPD.linearCombine(1 - critChance, rolls, critChance, critrolls);
	else
		damage = rolls;
	
	if (multihit === true) {
		damage = DPD.linearCombine(
			1/3, DPD.chain(damage, damage),
			1/3, DPD.chain(damage, damage, damage),
			1/6, DPD.chain(damage, damage, damage, damage),
			1/6, DPD.chain(damage, damage, damage, damage, damage)
		);
	} else if (typeof multihit === "number") {
		damage = DPD.chain(...new Array(multihit).fill(damage));
	}
	
	if (accuracy < 1)
		damage = DPD.linearCombine(accuracy, damage, 1 - accuracy, miss());
	
	return damage;
};

DPD.chain = function chain (A, B, ...rest) {
	// chain-combine multiple damage probability distributions
	if (!A) return miss();
	if (!B) return A;
	let R = {};
	for (let a in A) {
		for (let b in B) {
			let v = Number(a) + Number(b);
			R[v] = (R[v] || 0) + A[a] * B[b];
		}
	}
	if (rest.length)
		return DPD.chain(R, ...rest);
	return R;
};

DPD.damagePokemon = function damagePokemon (pokemon, A, ...rest) {
	let maxHP = pokemon.maxHP;
	if (!pokemon.hpDist) {
		pokemon.hpDist = {};
		pokemon.hpDist[maxHP] = 1;
	}
	let hpDist = pokemon.hpDist;
	if (!A) return hpDist;
	let R = {};
	if (hpDist[0])
		R[0] = hpDist[0];
	for (let hp in hpDist) {
		if (hp === "0")
			continue;
		for (let a in A) {
			let v = Number(hp) - Number(a);
			if (v < 0) v = 0;
			if (v > pokemon.maxHP) v = pokemon.maxHP;
			R[v] = (R[v] || 0) + hpDist[hp] * A[a];
		}
	}
	pokemon.hpDist = R;
	if (rest.length)
		return DPD.damagePokemon(pokemon, ...rest);
	return R;
};

DPD.linearCombine = function linearCombine (...args) {
	// linear-combine damage probability distributions
	// arguments should be arrays
	if (!args.length)
		return miss();
	let R = {};
	while (args.length) {
		let A = args.pop();
		let a = args.pop();
		if (!a) continue;
		for (let v in A)
			R[v] = (R[v] || 0) + a * A[v];
	}
	return R;
};

DPD.fromValues = function fromValues (...values) {
	// convert array to prob distribution
	if (!values.length) return miss();
	let R = {};
	for (let v of values)
		R[v] = (R[v] || 0) + 1;
	for (let v in R)
		R[v] /= values.length;
	return R;
};

DPD.probability = function probability (dist, condition) {
	// find the probability of a given condition inside a distribution
	let p = 0, q = 0;
	for (let v in dist) {
		if (condition(v))
			p += dist[v];
		else q += dist[v];
	}
	if (q < 0.5)
		return 1 - q;  // the smaller of the two numbers should be more accurate
	return p;
};

})();