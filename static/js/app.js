var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// OUse d3 to update each cell's text with values 
data.forEach(function(signtingdata)
{
 console.log(signtingdata);
 var row = tbody.append("tr");

 Object.entries(signtingdata).forEach(function([key, value])
 {
   console.log(key, value);
   // Append a cell to the row for each value
   
   var cell = tbody.append("td");
   cell.text(value);
 });
});

 
var inputElement = d3.select("#filter-btn");

inputElement.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
 
  var inputE = d3.select("#datetime");
  console.log(inputE);

 // Get the value property of the input element
  var inputValue = inputE.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(chart => chart.datetime === inputValue);
  console.log(filteredData)
});