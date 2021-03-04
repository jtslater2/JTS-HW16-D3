// @TODO: YOUR CODE HERE!
// Purpose: Create a D3 scatter plot comparing two specific parameters in the dataset given or another dataset of my chosing
// Create a scatter plot function

// Focus: Income vs High End Obesity by state
// Function scatterplot GO!

//function buildScatterPlot(error, data) {

// // console log the data
// console.log(data);

// // Log an error if one exists
// if (error) return console.warn(error);

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
top: 30,
right: 30,
bottom: 30,
left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
.select("#scatter") //might change to #scatter later
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var scatterGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load the data csv with D3
d3.csv("assets/data/data.csv").then(function(dataset) {

    // log errors if any and console.log(dataset)
    // if (error) return console.warn(error);
    
    console.log(dataset);

    //cast the obesityHigh as a number to make sure it stays that way
    dataset.forEach(function(data) {
        data.obesityHigh = +data.obesityHigh;
        data.income = +data.income;
    });

    // create the code to imput the circles for each of the states given
    //      with the obesityHigh as the Y variable and income as the X variable
    scatterGroup.selectAll("#scatter")
        .data(dataset)
        .enter()
        .append("circle")
        .classed("scatter", true)
        .attr("cx", d => d.income)
        .attr("cy", d => d.obesityHigh)
        .attr("r", 8)
        .attr("stroke", "black")
        .attr("stroke-width", "1")
        .attr("fill", "none")
        .attr("text", d => d.abbr);


}).catch(function(error) {
    console.log(error);
});

