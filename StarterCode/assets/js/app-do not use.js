// @TODO: YOUR CODE HERE!
//var dataArray = [1, 2, 3];
//var dataCategories = ["one", "two", "three"];

// function makeResponsive() {

    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart

  // var svgHeight = 500;
  // var svgWidth = 1000;
  
  // var svgArea = d3.select("body").append("svg")
  //     .attr("height", svgHeight)
  //     .attr("width", svgWidth);
  

  // if (!svgArea.empty()) {
  //   svgArea.remove();
  // }
  var svgHeight = 500;
  var svgWidth = 1000;
  
  var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  
  var chartHeight = svgHeight - margin.top - margin.bottom;
  var chartWidth = svgWidth - margin.left - margin.right;
  
  
  var svg = d3.select("body").append("svg")
         .attr("height", svgHeight)
         .attr("width", svgWidth);
  
  // var scatterGroup = svg.append("g")
  //        .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
  
  
      // svg params
    // var svgHeight = window.innerHeight;
    // var svgWidth = window.innerWidth;
    // var svgHeight = 500;
    // var svgWidth = 1000;
  
  
      // margin
    // var margin = {
    //   top: 10,
    //   right: 10,
    //   bottom: 10,
    //   left: 10
    // };
  
      // chart area minus margins
    // var chartHeight = svgHeight - margin.top - margin.bottom;
    // var chartWidth = svgWidth - margin.left - margin.right;
  
      // create svg container
    //  var svg = d3.select("body").append("svg")
    //         .attr("height", svgHeight)
    //         .attr("width", svgWidth);
  
      // shift everything over by the margins
     var scatterGroup = svg.append("g")
           .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
    //   // scale y to chart height
    // var yScale = d3.scaleLinear()
    //       .domain([0, d3.max(dataArray)])
    //       .range([chartHeight, 0]);
  
    //   // scale x to chart width
    // var xScale = d3.scaleBand()
    //       .domain(dataCategories)
    //       .range([0, chartWidth])
    //       .padding(0.1);
  
    //   // create axes
    // var yAxis = d3.axisLeft(yScale);
    // var xAxis = d3.axisBottom(xScale);
  
    //   // set x to the bottom of the chart
    // chartGroup.append("g")
    //       .attr("transform", `translate(0, ${chartHeight})`)
    //       .call(xAxis);
  
    //   // set y to the y axis
    // chartGroup.append("g")
    //       .call(yAxis);
  
  
    //Load data csv
  d3.csv("assets/data/data.csv").then(function(scatter_data) {
      console.log (scatter_data) 
      
      scatter_data.forEach(function(data) {
        data.smokesHigh = +data.smokesHigh;
        data.age = +data.age;
        data.income = +data.imcome;
        data.obesity = +data.obesity;
  
      });
      // console.log(data.smokesHigh);
      // console.log(data.age);
      //create scatter with age as x and smokes as y
  
      scatterGroup.selectAll("#scatter")
          .data(scatter_data)
          .enter()
          .append("circle")
          .classed("scatter", true)
          .attr("cx", d => d.age)
          .attr("cy", d => d.obesity)
          .attr("r", 2)
          .attr("stroke", "blue")
          .attr("stroke-width", "1")
          .attr("fill", "grey")
          .attr("text", d => d.abbr);
    
    
    
    
                  
      });
    
    
      // chartGroup.selectAll("rect")
      //     .data(dataArray)
      //     .enter()
      //     .append("rect")
      //     .attr("x", (d, i) => xScale(dataCategories[i]))
      //     .attr("y", d => yScale(d))
      //     .attr("width", xScale.bandwidth())
      //     .attr("height", d => chartHeight - yScale(d))
      //     .attr("fill", "green")
      //     // event listener for onclick event
      //     .on("click", function(d, i) {
      //       alert(`Hey! You clicked bar ${dataCategories[i]}!`);
      //     })
      //     // event listener for mouseover
      //     .on("mouseover", function() {
      //       d3.select(this)
      //             .attr("fill", "red");
      //     })
      //     // event listener for mouseout
      //     .on("mouseout", function() {
      //       d3.select(this)
      //             .attr("fill", "green");
      //     });
  
  
  
  // }
  
  // makeResponsive();
  
  // Event listener for window resize.
  // When the browser window is resized, makeResponsive() is called.
  // d3.select(window).on("resize", makeResponsive);

  
  
