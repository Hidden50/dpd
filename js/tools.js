(function(){

window.project = window.project || {};
window.ui = project.ui = project.ui || {};
window.htmlNodes = ui.htmlNodes = {};
let tools = ui.tools = ui.tools || {};
tools.graphs = [];

tools.weblink  = (imgName) => `./img/${imgName}.png`;
tools.webimage = (imgName) => `<img src="./img/${imgName}.png">`;

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