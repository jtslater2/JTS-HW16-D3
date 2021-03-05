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

var plotHeight = svgHeight - margin.top - margin.bottom;
var plotWidth = svgWidth - margin.left - margin.right;

console.log(plotHeight)
console.log(plotWidth)

var svg = d3.select("body")
          .append("svg")
            .attr("height", plotHeight)
            .attr("width", plotWidth)
          .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            // .call(d3.axisBottom(xl));
// var scatterGroup = svg.append("g")
//        .attr("transform", `translate(${margin.left}, ${margin.top})`);



d3.csv("assets/data/data.csv").then(function(CensusData) {
  CensusData.forEach(function(data) {
    data.age = +data.age;
    data.smokes = +data.smokes;
    console.log(data)
   
  });

var scale = d3.scaleLinear()
  .domain([d3.min(CensusData), d3.max(CensusData)])
  .range([0, plotWidth - 100]);

var x_axis = d3.axisBottom()
              .scale(scale);
svg.append("g")
  .call(x_axis);
//   const xScale = d3.scaleLinear()
//     .domain(d3.extent(CensusData, d => d.age))
//     .range([0, width])
//     .nice(); 

//   const yScale = d3.scaleLinear()
//     .domain([6,d3.max(CensusData, d => d.smokes)])
//     .range([height, 0])
//     .nice();
  
  
//   const xAxis = d3.axisBottom(xScale);
//   const yAxis = d3.axisLeft(yScale);



//   chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
//   chartGroup.append("g").call(yAxis);


// chartGroup.selectAll("circle")
// .data(CensusData)
// .enter()
// .append("circle")
// .attr("cx", d=>xScale(d.age))
// .attr("cy", d=>yScale(d.smokes))
// .attr("r", "10")
// .attr("stroke-width", "1")
// .classed("stateCircle", true)
// .attr("opacity", 0.75);



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


  // var xl = d3.scaleLinear()
  //   .domain([0,100])
  //   .range([100,800]);
  // var scatterGroup = svg.append("g")
  //        .attr("transform", `translate(${margin.left}, ${margin.top})`)
  //        .call(d3.axisBottom(xl))

  //        ;
         
         

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

  // var xl = d3.scaleLinear()
  // .domain([0,100])
  // .range([200,600]);

// d3.csv("assets/data/data.csv").then(function(scatter_data) {
//     console.log (scatter_data) 
    
  // const xScale = d3.scaleLinear()
  //   .domain(d3.extent(scatter_data, d => d.age))
  //   .range([0, width])
  //   .nice(); 

  // const yScale = d3.scaleLinear()
  //   .domain([6,d3.max(scatter_data, d => d.smokes)])
  //   .range([height, 0])
  //   .nice();
  
  
  // const xAxis = d3.axisBottom(xScale);
  // const yAxis = d3.axisLeft(yScale);


    // scatter_data.forEach(function(data) {
    //   data.smokesHigh = +data.smokesHigh;
    //   data.age = +data.age;
    //   data.income = +data.income;
    //   data.obesity = +data.obesity;



    // const xScale = d3.scaleLinear()
    // .domain(d3.extent(scatter_data, d => d.age))
    // .range([0, width])
    // .nice(); 

    //  const yScale = d3.scaleLinear()
    // .domain([6,d3.max(scatter_data, d => d.smokes)])
    // .range([height, 0])
    // .nice();

    // });
    // // console.log(data.smokesHigh);
    // console.log(data.age);
    //create scatter with age as x and smokes as y

    svg.selectAll("#scatter")
    //  svg.append("g")
        .data(CensusData)
        .enter()
        .append("circle")
        .classed("scatter", true)
        .attr("cx", d => d.obesity)
        .attr("cy", d => d.age)
        .attr("r", 2)
        .attr("stroke", "blue")
        .attr("stroke-width", "1")
        .attr("fill", "grey")
        .attr("text", d => d.abbr)
        // .call(d3.axisBottom(xl))

        
        
  
                
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


