//jQuery function - AJAX
$(function() {
    $('a#submit').bind('click', function(){
        //AJAX wrapper, sends input box as variable name to url /update_graph on server (Python) side
        $.getJSON($SCRIPT_ROOT + "/update_graph", {
            name: $('input[name="name"]').val()},
            //If Python server-side correctly sends a response, function below is used to update SVG graph
            function(data){
            n = [data.n1, 4, 8, 4];
            a = [4, 5];
            points = 10000;

            phi = [];
            for (i = 0; i < points; i++){
                phi.push(i*(6.28/points))
            }

            dataset = [];
            for (var i = 0; i < points; i++){
                dataset.push(superformula(n, a, phi[i]))
            }
            xScale = d3.scale.linear()
                .domain([d3.min(dataset,
                    function(d){return d[0]}),
                    d3.max(dataset,
                    function(d){return d[0]})])
                .range([padding, w - padding]);
            yScale = d3.scale.linear()
                .domain([d3.min(dataset,
                    function(d){return d[1]}),
                    d3.max(dataset,
                    function(d){return d[1]})])
                .range([padding, h - padding])
            //Everything above is the same as Graph.js, just updating with new dataset
            //Only difference is that instead APPENDING a new SVG, we simply select the one we already created
            //and change it's attributes
            scatterSVG.selectAll("circle").data(dataset)
                .attr("cx", function(d){return xScale(d[0]);})
                .attr("cy", function(d){return yScale(d[1]);})
                .attr("r", 3)
            lineSVG.selectAll("path")
                .attr('d', lineGen(dataset))
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                .attr('fill', data.color.toString());
        });
        //If server response is unsuccessful, return false (nothing happens to HTML)
        return false;
    })
  });