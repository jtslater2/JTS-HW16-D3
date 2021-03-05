// @TODO: YOUR CODE HERE!
var svgHeight = 500;
var svgWidth = 1000;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 55
};

var plotHeight = svgHeight - margin.top - margin.bottom;
var plotWidth = svgWidth - margin.left - margin.right;

console.log(plotHeight)
console.log(plotWidth)

var svg = d3.select("#scatter")
          .append("svg")
          .attr("height", svgHeight)
          .attr("width", svgWidth)
          

var scatterGroup = svg.append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);


d3.csv("assets/data/data.csv").then(function(scatter_data) {
   scatter_data.forEach(function(data) {
     data.age = +data.age;
     data.smokes = +data.smokes
     data.income = +data.income;
     data.obesity = +data.obesity;
     console.log(data)
   
   });

  const xScale = d3.scaleLinear()
   .domain(d3.extent(scatter_data, d => d.age))
   .range([0, plotWidth])
   .nice(); 

  const yScale = d3.scaleLinear()
   .domain([8,d3.max(scatter_data, d => d.smokes)])
   .range([plotHeight, 0])
   .nice();
 
 
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);


  scatterGroup.append("g").attr("transform", `translate(0, ${plotHeight})`).call(xAxis);
  scatterGroup.append("g").call(yAxis);


scatterGroup.selectAll("circle")
.data(scatter_data)
.enter()
.append("circle")
.attr("cx", d=>xScale(d.age))
.attr("cy", d=>yScale(d.smokes))
.attr("r", "9")
.attr("stroke", "blue")
.attr("stroke-width", "1")
.attr("opacity", .8)
.classed("stateCircle", true)
.attr("text", d => d.abbr)


scatterGroup.append("g")
  .selectAll('text')
  .data(scatter_data)
  .enter()
  .append("text")
  .text(d=>d.abbr)
  .attr("x",d=>xScale(d.age))
  .attr("y",d=>yScale(d.smokes))
  .classed(".stateText", true)
  .attr("text-anchor", "middle")
  .attr("fill", "black")
  .attr("font-size", "10px")
  .style("font-weight", "bold")
  .attr("alignment-baseline", "central");


scatterGroup.append("text")
  .attr("transform", `translate(${plotWidth / 2}, ${plotHeight + margin.top + 14})`)
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("fill", "black")
  .style("font-weight", "bold")
  .text("Median Age");

scatterGroup.append("text")
  .attr("y", 0 - ((margin.left / 2) + 2))
  .attr("x", 0 - (plotHeight / 2))
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("fill", "black")
  .style("font-weight", "bold")
  .attr("transform", "rotate(-90)")
  .text("Smokers (%)");


}).catch(function(error) {
console.log(error);
});



