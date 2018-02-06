(function(){

window.project = window.project || {};
window.ui = project.ui = project.ui || {};
ui.data = {};
let tools = ui.tools = ui.tools || {};

window.onload = ui.init = function init () {
	// register all html nodes that have an id
	htmlNodes.register(...document.querySelectorAll("[id]"));
	
	htmlNodes.columns.eventstack.innerHTML = ui.data.eventstack;
	htmlNodes.columns.data.innerHTML = ui.data.eventData;
	htmlNodes.register(...htmlNodes.columns.eventstack.querySelectorAll("[id]"));
	htmlNodes.register(...htmlNodes.columns.data.querySelectorAll("[id]"));
	
	// resize textareas as you type
	[...document.querySelectorAll("textarea")].forEach( ta => {
		ta.value = ta.value.trim();
		ta.addEventListener('input', e => { tools.textareaFitContent(ta); });
		tools.textareaFitContent(ta);
	});
	htmlNodes.buttons.calc.addEventListener('click', ui.calc);
};

ui.calc = function calc () {
	let effectData = ui.parseEffectData();
	let instructions = htmlNodes.textareas.eventstack.value.split(/\r?\n/g);
	let table = [];
	let turn = "?";
	for (let label of instructions) {
		let effect = effectData[label];
		if (!effect) {
			table.push(["", `--- ${label} ---`, ""]);
			turn = label;
			continue;
		}
		
		let recipient = effect.Target || effect.Source;
		let isRecovery = effect.Rolls.some(roll => roll < 0);
		let oldHPDist = recipient.hpDist;
		
		DPD.damagePokemon(recipient, effect.damage);
		
		let plotSettings = [
			isRecovery ? [oldHPDist, recipient.hpDist] : [recipient.hpDist, oldHPDist],
			[{    // first graph
				label:           "hp",
				backgroundColor: "lightgreen",
				borderColor:     "transparent"
			}, {  // second graph
				label:           `${isRecovery ? "recovery" : "damage"} from ${effect.Move || effect.Effect}`,
				backgroundColor: isRecovery ? "green" : "lightgrey",
				borderColor:     "transparent"
			}],
			recipient.maxHP
		];
		let graph = tools.graph(...plotSettings);
		
		let tableRow = [
			tools.webimage(effect.Source.Name),
			effect.Move || effect.Effect,
			effect.Target && tools.webimage(effect.Target.Name) || ""
		];
		tableRow.push(`<canvas id="graph${tools.graphs.length}"></canvas`);
		
		tools.graphs.push(graph);
		tools.graphs.push(tools.graph(
			[recipient.hpDist],
			[ {label: "hp", backgroundColor:  "lightgreen", borderColor:      "lightgreen"} ]
		));
		
		if (!isRecovery) {
			tableRow.push(
				tools.webimage("355") + "<br>" +
				DPD.probability(
					recipient.hpDist,
					hp => hp === "0"
				).toLocaleString("en", {style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1})
			);
		}
		table.push(tableRow);
	}
	htmlNodes.divs.results.innerHTML = tools.makeHtmlTable(table);
	tools.drawGraphs();
};

ui.parseEffectData = function parseEffectData () {
	let data = [];
	[...htmlNodes.columns.data.getElementsByTagName("textarea")].forEach( ta => {
		let entry = {};
		for (let line of ta.value.split(/\r?\n/g)) {
			let [, key, value] = line.match(/(.*?): *(.*)/) || [];
			if (["Name", "Move", "Effect"].includes(key))
				entry[key] = value;
			else if (["Source", "Target"].includes(key))
				entry[key] = data[value];
			else entry[key] = JSON.parse(value);
		}
		if (entry.Move || entry.Effect) {
			entry.damage = DPD.fromMove(
				entry.Accuracy || 1,
				entry.Rolls,
				entry["Crit Chance"],
				entry["Crit Rolls"],
				entry.Multihit
			);
		}
		data.push(entry);
	});
	return data;
};

ui.data.eventstack =
`<h3>Event Stack</h3>
<textarea id="textarea_eventstack" spellcheck="false">
Turn 1
5
2
4
Turn 2
3
2
4
Turn 3
3
2
4
Turn 4
3
2
4
Turn 5
3
2
4
Turn 6
3
2
4
Turn 7
3
2
4
Turn 8
3
2
4
</textarea>`;

ui.data.eventData =
`<h3>Data</h3>
<textarea spellcheck="false">
Name:        Skarmory
maxHP:       334
hpDist:      {"334": 1}
</textarea>
<textarea spellcheck="false">
Name:        Clefable
</textarea>
<textarea spellcheck="false">
Move:        Fire Blast
Source:      1
Target:      0
Accuracy:    0.85
Crit Chance: 0.0625
Rolls:       [202,204,206,208,210,214,216,218,220,222,226,228,230,232,234,238]
Crit Rolls:  [302,306,308,312,316,320,322,326,330,334,338,340,344,348,352,356]
</textarea>
<textarea spellcheck="false">
Move:        Roost
Source:      0
Rolls:       [-167]
</textarea>
<textarea spellcheck="false">
Effect:      Leftovers
Source:      0
Rolls:       [-20]
</textarea>
<textarea spellcheck="false">
Effect:      Stealth Rock
Source:      0
Rolls:       [41]
</textarea>`;

})();