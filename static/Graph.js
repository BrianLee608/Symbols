//Variables used to determine superformula shape (see wikipedia)
var n = [19, 4, 8, 4];
var a = [4, 5];
var points = 10000;
//Generate range of input values for superformula function
var phi = [];
for (i = 0; i < points; i++){
    phi.push(i*(6.28/points))
}
//Parse through all values of phi and generate x,y points based n, a, and phi
var dataset = [];
for (var i = 0; i < points; i++){
    dataset.push(superformula(n, a, phi[i]))
}
//w, h, padding are used to set SVG dimensions
var w = 500;
var h = 500;
var padding = 20;
//Scales are used to map how far data points are in relation to the edge of SVG container
//i.e. xScale takes in a domain of (min, max) and outputs a linear range of (padding, w (width) - padding)
//therefore if x = (0,2,5,6) then an x coordinate of 0 will map to the value of padding
//so that it's slightly to the right of 0 (otherwise the point would be slightly outside the container and is cut off)
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
//Creates new SVG object using d3 chain
var scatterSVG = d3.select("body").append("svg").attr("width", w).attr("height", h);
//Selects created SVG object and connects it with our dataset
var circles = scatterSVG.selectAll("circle").data(dataset).enter().append("circle");
//Sets where points will appear according to our dataset
//Since the dataset has been connected above, invoking a function(d) will iterate through all values of our dataset
//cx/cy are used to set location of the point (center of circle), r is used to set size of point
circles
    .attr("cx", function(d){return xScale(d[0]);})
    .attr("cy", function(d){return yScale(d[1]);})
    .attr("r", 2)

//Lines may be more efficient to generate, since we may be able to reduce number of data points (haven't tested yet)
var lineSVG = d3.select("body").append("svg").attr("width", w).attr("height", h);
var lineGen = d3.svg.line().x(function(d){return xScale(d[0])}).y(function(d){return yScale(d[1])})

var path = lineSVG.append('svg:path')
    .attr('d', lineGen(dataset))
    .attr('stroke', 'black')
    .attr('stroke-width', 3)
    .attr('fill', 'none')

var color = 'purple'
var length = path.node().getTotalLength();
//Animate line
path
  .attr("stroke-dasharray", length + " " + length)
  .attr("stroke-dashoffset", length)
  .transition()
    .duration(2000)
    .ease("linear")
    .attr("stroke-dashoffset", 0)
    .attr('fill', color.toString())


