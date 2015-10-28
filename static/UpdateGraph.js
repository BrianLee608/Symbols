//jQuery function - AJAX
function UpdateGraph() {
        //AJAX wrapper, sends input box as variable name to url /update_graph on server (Python) side
        $.getJSON($SCRIPT_ROOT + "/update_graph", {
            //firstname: $('input[name="firstname"]').val(),
            //lastname: $('input[name="lastname"]').val()},
            n1: $('input[name="n1"]').val(),
            n2: $('input[name="n2"]').val(),
            n3: $('input[name="n3"]').val(),
            n4: $('input[name="n4"]').val(),
            a1: $('input[name="a1"]').val(),
            a2: $('input[name="a2"]').val()},

            //If Python server-side correctly sends a response, function below is used to update SVG graph
            function(data){
            n = [data.n1, data.n2, data.n3, data.n4];
            a = [data.a1, data.a2];
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
            path = lineSVG.selectAll("path")
                .attr('d', lineGen(dataset))
                .attr('stroke', "black")
                .attr('stroke-width', 3)
                .attr('fill', color.toString());
            //Color change occurs after initial set-up (allows for transition effect)
            color = data.color;
            length = path.node().getTotalLength();

            scatterSVG.selectAll("circle").data(dataset)
                .attr("cx", function(d){return xScale(d[0]);})
                .attr("cy", function(d){return yScale(d[1]);})
                .attr("r", 3)
                .attr("fill", color.toString())
            //Animate line
            path
              .attr("stroke-dasharray", length + " " + length)
              .attr("stroke-dashoffset", length)
              .transition()
                .duration(2000)
                .ease("linear")
                .attr("stroke-dashoffset", 0)
                .attr('fill', color.toString())
        });
        //If server response is unsuccessful, return false (nothing happens to HTML)
        return false;
  };