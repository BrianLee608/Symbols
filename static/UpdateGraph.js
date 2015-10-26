$(function() {
    $('a#submit').bind('click', function(){
        $.getJSON($SCRIPT_ROOT + "/update_graph", {
            name: $('input[name="name"]').val(),
        }, function(data){
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
                .range([padding, h - padding]);

            scatterSVG.selectAll("circle").data(dataset)
                .attr("cx", function(d){return xScale(d[0]);})
                .attr("cy", function(d){return yScale(d[1]);})
                .attr("r", 3)
        });
        return false;
    })
  });