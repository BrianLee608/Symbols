var n = [19, 4, 8, 4];
var a = [4, 5];
var points = 10000;

var phi = [];
for (i = 0; i < points; i++){
    phi.push(i*(6.28/points))
}

var dataset = [];
for (var i = 0; i < points; i++){
    dataset.push(superformula(n, a, phi[i]))
}

var w = 500;
var h = 500;
var padding = 20;
var xScale = d3.scale.linear()
    .domain([d3.min(dataset,
        function(d){return d[0]}),
        d3.max(dataset,
        function(d){return d[0]})])
    .range([padding, w - padding]);
var yScale = d3.scale.linear()
    .domain([d3.min(dataset,
        function(d){return d[1]}),
        d3.max(dataset,
        function(d){return d[1]})])
    .range([padding, h - padding]);

var scatterSVG = d3.select("body").append("svg").attr("width", w).attr("height", h);
var circles = scatterSVG.selectAll("circle").data(dataset).enter().append("circle");

circles
    .attr("cx", function(d){return xScale(d[0]);})
    .attr("cy", function(d){return yScale(d[1]);})
    .attr("r", 2)

//var lineSVG = d3.select("body").append("svg").attr("width", w).attr("height", h);
//var lineGen = d3.svg.line().x(function(d){return xScale(d[0])}).y(function(d){return xScale(d[1])})
//
//lineSVG.append('svg:path')
//  .attr('d', lineGen(dataset))
//  .attr('stroke', 'black')
//  .attr('stroke-width', 2)
//  .attr('fill', 'none');