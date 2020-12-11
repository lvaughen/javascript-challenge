// from data.js
var tableData = data;

// // Step 1: Loop Through `data` and console.log each alien sighting object
// data.forEach(function(alien_seen) {
//   console.log(alien_seen);
// });

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 3:  Use `Object.entries` to get each alien report obj key and value
tableData.forEach(function(tableData) {
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key, value]) {

// Add a table data cell and obj value into the table
    var cell = row.append("td");
    cell.text(value);
  });

});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// list for the a date entered filter or the filter table button select

// Select the button
var button = d3.select("#datetime");

// Select the form
var form = d3.select(".form-control");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

// Print the value to the console
console.log(inputValue);

var filtertable = tableData.filter(alien => alien.datetime === inputValue);

console.log(filtertable);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Update table based on filter
filtertable.forEach(function(filtertable) {
    var row = tbody.append("tr");

    Object.entries(filtertable).forEach(function([key, value]) {

// Add a table data cell and obj value into the table
    var cell = row.append("td");
    cell.text(value);
  });

});
};
