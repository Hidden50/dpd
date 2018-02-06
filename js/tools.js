(function(){

window.project = window.project || {};
window.ui = project.ui = project.ui || {};
window.htmlNodes = ui.htmlNodes = {};
let tools = ui.tools = ui.tools || {};
tools.graphs = [];

tools.aliases = {"voltorb":"100","electrode":"101","exeggcute":"102","exeggutor":"103","cubone":"104","marowak":"105","hitmonlee":"106","hitmonchan":"107","lickitung":"108","koffing":"109","weezing":"110","rhyhorn":"111","rhydon":"112","chansey":"113","tangela":"114","kangaskhan":"115","horsea":"116","seadra":"117","goldeen":"118","seaking":"119","staryu":"120","starmie":"121","mrmime":"122","scyther":"123","jynx":"124","electabuzz":"125","magmar":"126","pinsir":"127","tauros":"128","magikarp":"129","gyarados":"130","lapras":"131","ditto":"132","eevee":"133","vaporeon":"134","jolteon":"135","flareon":"136","porygon":"137","omanyte":"138","omastar":"139","kabuto":"140","kabutops":"141","aerodactyl":"142","snorlax":"143","articuno":"144","zapdos":"145","moltres":"146","dratini":"147","dragonair":"148","dragonite":"149","mewtwo":"150","mew":"151","chikorita":"152","bayleef":"153","meganium":"154","cyndaquil":"155","quilava":"156","typhlosion":"157","totodile":"158","croconaw":"159","feraligatr":"160","sentret":"161","furret":"162","hoothoot":"163","noctowl":"164","ledyba":"165","ledian":"166","spinarak":"167","ariados":"168","crobat":"169","chinchou":"170","lanturn":"171","pichu":"172","cleffa":"173","igglybuff":"174","togepi":"175","togetic":"176","natu":"177","xatu":"178","mareep":"179","flaaffy":"180","ampharos":"181","bellossom":"182","marill":"183","azumarill":"184","sudowoodo":"185","politoed":"186","hoppip":"187","skiploom":"188","jumpluff":"189","aipom":"190","sunkern":"191","sunflora":"192","yanma":"193","wooper":"194","quagsire":"195","espeon":"196","umbreon":"197","murkrow":"198","slowking":"199","misdreavus":"200","unown":"201","wobbuffet":"202","girafarig":"203","pineco":"204","forretress":"205","dunsparce":"206","gligar":"207","steelix":"208","snubbull":"209","granbull":"210","qwilfish":"211","scizor":"212","shuckle":"213","heracross":"214","sneasel":"215","teddiursa":"216","ursaring":"217","slugma":"218","magcargo":"219","swinub":"220","piloswine":"221","corsola":"222","remoraid":"223","octillery":"224","delibird":"225","mantine":"226","skarmory":"227","houndour":"228","houndoom":"229","kingdra":"230","phanpy":"231","donphan":"232","porygon2":"233","stantler":"234","smeargle":"235","tyrogue":"236","hitmontop":"237","smoochum":"238","elekid":"239","magby":"240","miltank":"241","blissey":"242","raikou":"243","entei":"244","suicune":"245","larvitar":"246","pupitar":"247","tyranitar":"248","lugia":"249","hooh":"250","celebi":"251","treecko":"252","grovyle":"253","sceptile":"254","torchic":"255","combusken":"256","blaziken":"257","mudkip":"258","marshtomp":"259","swampert":"260","poochyena":"261","mightyena":"262","zigzagoon":"263","linoone":"264","wurmple":"265","silcoon":"266","beautifly":"267","cascoon":"268","dustox":"269","lotad":"270","lombre":"271","ludicolo":"272","seedot":"273","nuzleaf":"274","shiftry":"275","taillow":"276","swellow":"277","wingull":"278","pelipper":"279","ralts":"280","kirlia":"281","gardevoir":"282","surskit":"283","masquerain":"284","shroomish":"285","breloom":"286","slakoth":"287","vigoroth":"288","slaking":"289","nincada":"290","ninjask":"291","shedinja":"292","whismur":"293","loudred":"294","exploud":"295","makuhita":"296","hariyama":"297","azurill":"298","nosepass":"299","skitty":"300","delcatty":"301","sableye":"302","mawile":"303","aron":"304","lairon":"305","aggron":"306","meditite":"307","medicham":"308","electrike":"309","manectric":"310","plusle":"311","minun":"312","volbeat":"313","illumise":"314","roselia":"315","gulpin":"316","swalot":"317","carvanha":"318","sharpedo":"319","wailmer":"320","wailord":"321","numel":"322","camerupt":"323","torkoal":"324","spoink":"325","grumpig":"326","spinda":"327","trapinch":"328","vibrava":"329","flygon":"330","cacnea":"331","cacturne":"332","swablu":"333","altaria":"334","zangoose":"335","seviper":"336","lunatone":"337","solrock":"338","barboach":"339","whiscash":"340","corphish":"341","crawdaunt":"342","baltoy":"343","claydol":"344","lileep":"345","cradily":"346","anorith":"347","armaldo":"348","feebas":"349","milotic":"350","castform":"351","kecleon":"352","shuppet":"353","banette":"354","duskull":"355","dusclops":"356","tropius":"357","chimecho":"358","absol":"359","wynaut":"360","snorunt":"361","glalie":"362","spheal":"363","sealeo":"364","walrein":"365","clamperl":"366","huntail":"367","gorebyss":"368","relicanth":"369","luvdisc":"370","bagon":"371","shelgon":"372","salamence":"373","beldum":"374","metang":"375","metagross":"376","regirock":"377","regice":"378","registeel":"379","latias":"380","latios":"381","kyogre":"382","groudon":"383","rayquaza":"384","jirachi":"385","deoxys":"386","turtwig":"387","grotle":"388","torterra":"389","chimchar":"390","monferno":"391","infernape":"392","piplup":"393","prinplup":"394","empoleon":"395","starly":"396","staravia":"397","staraptor":"398","bidoof":"399","bibarel":"400","kricketot":"401","kricketune":"402","shinx":"403","luxio":"404","luxray":"405","budew":"406","roserade":"407","cranidos":"408","rampardos":"409","shieldon":"410","bastiodon":"411","burmy":"412","wormadam":"413","mothim":"414","combee":"415","vespiquen":"416","pachirisu":"417","buizel":"418","floatzel":"419","cherubi":"420","cherrim":"421","shellos":"422","gastrodon":"423","ambipom":"424","drifloon":"425","drifblim":"426","buneary":"427","lopunny":"428","mismagius":"429","honchkrow":"430","glameow":"431","purugly":"432","chingling":"433","stunky":"434","skuntank":"435","bronzor":"436","bronzong":"437","bonsly":"438","mimejr":"439","happiny":"440","chatot":"441","spiritomb":"442","gible":"443","gabite":"444","garchomp":"445","munchlax":"446","riolu":"447","lucario":"448","hippopotas":"449","hippowdon":"450","skorupi":"451","drapion":"452","croagunk":"453","toxicroak":"454","carnivine":"455","finneon":"456","lumineon":"457","mantyke":"458","snover":"459","abomasnow":"460","weavile":"461","magnezone":"462","lickilicky":"463","rhyperior":"464","tangrowth":"465","electivire":"466","magmortar":"467","togekiss":"468","yanmega":"469","leafeon":"470","glaceon":"471","gliscor":"472","mamoswine":"473","porygonz":"474","gallade":"475","probopass":"476","dusknoir":"477","froslass":"478","rotom":"479","uxie":"480","mesprit":"481","azelf":"482","dialga":"483","palkia":"484","heatran":"485","regigigas":"486","giratina":"487","cresselia":"488","phione":"489","manaphy":"490","darkrai":"491","shaymin":"492","arceus":"493","victini":"494","snivy":"495","servine":"496","serperior":"497","tepig":"498","pignite":"499","emboar":"500","oshawott":"501","dewott":"502","samurott":"503","patrat":"504","watchog":"505","lillipup":"506","herdier":"507","stoutland":"508","purrloin":"509","liepard":"510","pansage":"511","simisage":"512","pansear":"513","simisear":"514","panpour":"515","simipour":"516","munna":"517","musharna":"518","pidove":"519","tranquill":"520","unfezant":"521","blitzle":"522","zebstrika":"523","roggenrola":"524","boldore":"525","gigalith":"526","woobat":"527","swoobat":"528","drilbur":"529","excadrill":"530","audino":"531","timburr":"532","gurdurr":"533","conkeldurr":"534","tympole":"535","palpitoad":"536","seismitoad":"537","throh":"538","sawk":"539","sewaddle":"540","swadloon":"541","leavanny":"542","venipede":"543","whirlipede":"544","scolipede":"545","cottonee":"546","whimsicott":"547","petilil":"548","lilligant":"549","basculin":"550","sandile":"551","krokorok":"552","krookodile":"553","darumaka":"554","darmanitan":"555","maractus":"556","dwebble":"557","crustle":"558","scraggy":"559","scrafty":"560","sigilyph":"561","yamask":"562","cofagrigus":"563","tirtouga":"564","carracosta":"565","archen":"566","archeops":"567","trubbish":"568","garbodor":"569","zorua":"570","zoroark":"571","minccino":"572","cinccino":"573","gothita":"574","gothorita":"575","gothitelle":"576","solosis":"577","duosion":"578","reuniclus":"579","ducklett":"580","swanna":"581","vanillite":"582","vanillish":"583","vanilluxe":"584","deerling":"585","sawsbuck":"586","emolga":"587","karrablast":"588","escavalier":"589","foongus":"590","amoonguss":"591","frillish":"592","jellicent":"593","alomomola":"594","joltik":"595","galvantula":"596","ferroseed":"597","ferrothorn":"598","klink":"599","klang":"600","klinklang":"601","tynamo":"602","eelektrik":"603","eelektross":"604","elgyem":"605","beheeyem":"606","litwick":"607","lampent":"608","chandelure":"609","axew":"610","fraxure":"611","haxorus":"612","cubchoo":"613","beartic":"614","cryogonal":"615","shelmet":"616","accelgor":"617","stunfisk":"618","mienfoo":"619","mienshao":"620","druddigon":"621","golett":"622","golurk":"623","pawniard":"624","bisharp":"625","bouffalant":"626","rufflet":"627","braviary":"628","vullaby":"629","mandibuzz":"630","heatmor":"631","durant":"632","deino":"633","zweilous":"634","hydreigon":"635","larvesta":"636","volcarona":"637","cobalion":"638","terrakion":"639","virizion":"640","tornadus":"641","thundurus":"642","reshiram":"643","zekrom":"644","landorus":"645","kyurem":"646","keldeo":"647","meloetta":"648","genesect":"649","chespin":"650","quilladin":"651","chesnaught":"652","fennekin":"653","braixen":"654","delphox":"655","froakie":"656","frogadier":"657","greninja":"658","bunnelby":"659","diggersby":"660","fletchling":"661","fletchinder":"662","talonflame":"663","scatterbug":"664","spewpa":"665","vivillon":"666","litleo":"667","pyroar":"668","flabb":"669","floette":"670","florges":"671","skiddo":"672","gogoat":"673","pancham":"674","pangoro":"675","furfrou":"676","espurr":"677","meowstic":"678","honedge":"679","doublade":"680","aegislash":"681","spritzee":"682","aromatisse":"683","swirlix":"684","slurpuff":"685","inkay":"686","malamar":"687","binacle":"688","barbaracle":"689","skrelp":"690","dragalge":"691","clauncher":"692","clawitzer":"693","helioptile":"694","heliolisk":"695","tyrunt":"696","tyrantrum":"697","amaura":"698","aurorus":"699","sylveon":"700","hawlucha":"701","dedenne":"702","carbink":"703","goomy":"704","sliggoo":"705","goodra":"706","klefki":"707","phantump":"708","trevenant":"709","pumpkaboo":"710","gourgeist":"711","bergmite":"712","avalugg":"713","noibat":"714","noivern":"715","xerneas":"716","yveltal":"717","zygarde":"718","diancie":"719","hoopa":"720","volcanion":"721","rowlet":"722","dartrix":"723","decidueye":"724","litten":"725","torracat":"726","incineroar":"727","popplio":"728","brionne":"729","primarina":"730","pikipek":"731","trumbeak":"732","toucannon":"733","yungoos":"734","gumshoos":"735","grubbin":"736","charjabug":"737","vikavolt":"738","crabrawler":"739","crabominable":"740","oricorio":"741","cutiefly":"742","ribombee":"743","rockruff":"744","lycanroc":"745","wishiwashi":"746","mareanie":"747","toxapex":"748","mudbray":"749","mudsdale":"750","dewpider":"751","araquanid":"752","fomantis":"753","lurantis":"754","morelull":"755","shiinotic":"756","salandit":"757","salazzle":"758","stufful":"759","bewear":"760","bounsweet":"761","steenee":"762","tsareena":"763","comfey":"764","oranguru":"765","passimian":"766","wimpod":"767","golisopod":"768","sandygast":"769","palossand":"770","pyukumuku":"771","typenull":"772","silvally":"773","minior":"774","komala":"775","turtonator":"776","togedemaru":"777","mimikyu":"778","bruxish":"779","drampa":"780","dhelmise":"781","jangmoo":"782","hakamoo":"783","kommoo":"784","tapukoko":"785","tapulele":"786","tapubulu":"787","tapufini":"788","cosmog":"789","cosmoem":"790","solgaleo":"791","lunala":"792","nihilego":"793","buzzwole":"794","pheromosa":"795","xurkitree":"796","celesteela":"797","kartana":"798","guzzlord":"799","necrozma":"800","magearna":"801","marshadow":"802","bulbasaur":"001","ivysaur":"002","venusaur":"003","venusaurmega":"003-m","charmander":"004","charmeleon":"005","charizard":"006","charizardmegax":"006-mx","charizardmegay":"006-my","squirtle":"007","wartortle":"008","blastoise":"009","blastoisemega":"009-m","caterpie":"010","metapod":"011","butterfree":"012","weedle":"013","kakuna":"014","beedrill":"015","beedrillmega":"015-m","pidgey":"016","pidgeotto":"017","pidgeot":"018","pidgeotmega":"018-m","rattata":"019","rattataalola":"019-a","raticate":"020","raticatealola":"020-a","spearow":"021","fearow":"022","ekans":"023","arbok":"024","pikachu":"025","raichu":"026","raichualola":"026-a","sandshrew":"027","sandshrewalola":"027-a","sandslash":"028","sandslashalola":"028-a","nidoran":"032","nidorina":"030","nidoqueen":"031","nidorino":"033","nidoking":"034","clefairy":"035","clefable":"036","vulpix":"037","vulpixalola":"037-a","ninetales":"038","ninetalesalola":"038-a","jigglypuff":"039","wigglytuff":"040","zubat":"041","golbat":"042","oddish":"043","gloom":"044","vileplume":"045","paras":"046","parasect":"047","venonat":"048","venomoth":"049","diglett":"050","diglettalola":"050-a","dugtrio":"051","dugtrioalola":"051-a","meowth":"052","meowthalola":"052-a","persian":"053","persianalola":"053-a","psyduck":"054","golduck":"055","mankey":"056","primeape":"057","growlithe":"058","arcanine":"059","poliwag":"060","poliwhirl":"061","poliwrath":"062","abra":"063","kadabra":"064","alakazam":"065","alakazammega":"065-m","machop":"066","machoke":"067","machamp":"068","bellsprout":"069","weepinbell":"070","victreebel":"071","tentacool":"072","tentacruel":"073","geodude":"074","geodudealola":"074-a","graveler":"075","graveleralola":"075-a","golem":"076","golemalola":"076-a","ponyta":"077","rapidash":"078","slowpoke":"079","slowbro":"080","slowbromega":"080-m","magnemite":"081","magneton":"082","farfetchd":"083","doduo":"084","dodrio":"085","seel":"086","dewgong":"087","grimer":"088","grimeralola":"088-a","muk":"089","mukalola":"089-a","shellder":"090","cloyster":"091","gastly":"092","haunter":"093","gengar":"094","gengarmega":"094-m","onix":"095","drowzee":"096","hypno":"097","krabby":"098","kingler":"099","exeggutoralola":"103-a","marowakalola":"105-a","kangaskhanmega":"115-m","pinsirmega":"127-m","gyaradosmega":"130-m","aerodactylmega":"142-m","mewtwomegax":"150-mx","mewtwomegay":"150-my","ampharosmega":"181-m","steelixmega":"208-m","scizormega":"212-m","heracrossmega":"214-m","houndoommega":"229-m","tyranitarmega":"248-m","sceptilemega":"254-m","blazikenmega":"257-m","swampertmega":"260-m","gardevoirmega":"282-m","sableyemega":"302-m","mawilemega":"303-m","aggronmega":"306-m","medichammega":"308-m","manectricmega":"310-m","sharpedomega":"319-m","cameruptmega":"323-m","altariamega":"334-m","banettemega":"354-m","absolmega":"359-m","glaliemega":"362-m","salamencemega":"373-m","metagrossmega":"376-m","latiasmega":"380-m","latiosmega":"381-m","kyogreprimal":"382-p","groudonprimal":"383-p","rayquazamega":"384-m","deoxysattack":"386a","deoxysdefense":"386d","deoxysspeed":"386s","lopunnymega":"428-m","garchompmega":"445-m","lucariomega":"448-m","abomasnowmega":"460-m","gallademega":"475-m","rotomfrost":"479f","rotomheat":"479h","rotommow":"479m","rotomfan":"479s","rotomwash":"479w","giratinaorigin":"487o","shayminsky":"492s","arceusbug":"493-bug","arceusdark":"493-dark","arceusdragon":"493-dragon","arceuselectric":"493-electric","arceusfairy":"493-fairy","arceusfighting":"493-fighting","arceusfire":"493-fire","arceusflying":"493-flying","arceusghost":"493-ghost","arceusgrass":"493-grass","arceusground":"493-ground","arceusice":"493-ice","arceuspoison":"493-poison","arceuspsychic":"493-psychic","arceusrock":"493-rock","arceussteel":"493-steel","arceuswater":"493-water","audinomega":"531-m","tornadustherian":"641-s","thundurustherian":"642-s","landorustherian":"645-s","kyuremblack":"646-b","kyuremwhite":"646-w","greninjaash":"658-a","zygarde10":"718-10","zygardecomplete":"718-c","dianciemega":"719-m","hoopaunbound":"720-u","wishiwashischool":"746-s","miniorblue":"774-b","miniorgreen":"774-g","miniorindigo":"774-i","miniororange":"774-o","miniorred":"774-r","miniorviolet":"774-v","minioryellow":"774-y"};

tools.webimage = (imgName) => `<span class="p-icon sprite-${tools.aliases[imgName.toLowerCase()] || imgName}">`;

tools.graph = function graph (distributions, settings, plotRange) {
	let data = [];
	for (let dist of distributions) {
		let distData = [...Array(plotRange)];
		let sum = 0;
		for (let d = plotRange; d > 0; d--) {
			if (dist[d]) {
				sum += dist[d];
			}
			distData[d-1] = {"x": d, "y": sum};
		}
		data.push(distData);
	}
	
	let config = {
		type: 'line',
		data: {},
		options: {}
	};
	
	config.options.animation = false;
	config.options.tooltips = {
		callbacks: {
			label: tooltipItem => Number(tooltipItem.yLabel).toLocaleString("en", {style: "percent", maximumFractionDigits: 1})
		}
	};
	config.options.scales = {
		xAxes: [{
			type: 'linear',
			position: 'bottom',
			ticks: {
				min: 1,
				max: plotRange,
				stepSize: 10 * Math.ceil(plotRange / 100),
				callback: value => value === plotRange ? "" : value  // don't display "max" label, as it frequently overlaps with the steps
			},
			scaleLabel: {
				display: true,
				labelString: 'HP'
			}
		}],
		yAxes: [{
			type: 'linear',
			ticks: {
				min: 0,
				max: 1,
				callback: value => value.toLocaleString("en", {style: "percent"})
			}
		}]
	};
	
	config.data.datasets = [];
	for (let i in distributions) {
		let dt = {
			type:             "line",
			lineTension:      0,
			fill:             true,
			borderWidth:      2,
			pointRadius:      0,
			pointHoverRadius: 2,
			pointHitRadius:   4,
			data:             data[i]
		};
		if (settings && settings[i]) {
			for (let s in settings[i])
				dt[s] = settings[i][s];
		}
		config.data.datasets.push(dt);
	}
	
	return config;
};

tools.drawGraphs = function drawGraphs () {
	for (let i in tools.graphs) {
		let canvas = document.getElementById(`graph${i}`);
		if (!canvas)
			continue;
		let chart = new Chart( canvas.getContext("2d"), tools.graphs[i] );
	}
};

tools.escapeHTML = function (str) {
	if (!str) return '';
	return (
		('' + str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
		.replace(/\//g, '&#x2f;')
	);
};

tools.makeHtmlTable = function(rows) {
	let cellMap = cell => `<td>${cell}</td>`;
	let rowMap = row => `<tr>${row.map(cellMap).join("")}</tr>`;
	return `<table>${rows.map(rowMap).join("")}</table>`;
};

tools.textareaFitContent = function textareaFitContent (ta) {
	ta.style["min-width"] = "1px";
	ta.style["min-width"] = `${ta.scrollWidth}px`;
	ta.style.height = "1px";
	ta.style.height = `${ta.scrollHeight}px`;
};

htmlNodes.register = function register (node, ...rest) {
	if (!node)
		return;
	if (typeof node === "string")
		node = document.getElementById(node);
	
	let path = node.id.split("_");
	let name = path.pop();
	if (path.length)
		path[0] += "s";  // collection names make more sense in plural
	
	let el = htmlNodes;
	for (let p of path)  // create a chain of namespaces
		el = el[p] = el[p] || {};
	el[name] = node;     // insert the node at the end of that chain
	
	if (rest.length)
		htmlNodes.register(...rest);
	return node;
};

})();