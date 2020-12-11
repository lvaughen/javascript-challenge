// from data.js
var tableData = data;

// // Step 1: Loop Through `data` and console.log each alien sighting object
// data.forEach(function(alien_seen) {
//   console.log(alien_seen);
// });

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use `Object.entries` to get each alien report obj key and value
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
var button = d3.select("#filter-btn");

// Select the form - ask about why the form tag works, but input class form-control doesn't
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  // var inputElement2 = d3.select("#city");
  // var inputElement3 = d3.select("#state");
  // var inputElement4 = d3.select("#country");
  // var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value")
  // var inputValue2 = inputElement2.property("value")
  // var inputValue3 = inputElement3.property("value")
  // var inputValue4 = inputElement4.property("value")
  // var inputValue5 = inputElement5.property("value")

  // Print the value to the console
  inputValues = [inputValue1]
  console.log(inputValues);

  // Filter the data based on input values
  if (inputValue1) {var filtertable = tableData.filter(alien => alien.datetime === inputValue1)
  }
  // if no data to filter, then use full table data
  else {var filtertable = tableData}

// if (inputValue1) {
//    filtertable = filtertable.filter(alien => alien.datetime === inputValue1)
//  }

// if(inputValue2) {
//   filtertable = filtertable.filter(alien => alien.city === inputValue2)
//   } 

// if(inputValue3) {
//   filtertable = filtertable.filter(alien => alien.state === inputValue3)  
//   } 

// if(inputValue4) {
//   filtertable = filtertable.filter(alien => alien.country === inputValue4)  
//   } 

// if(inputValue5) {
//   filtertable = filtertable.filter(alien => alien.shape === inputValue5)  
//   } 
 
  console.log(filtertable);

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Update table based on filter

  tbody.html("");

  filtertable.forEach(function(filtertable) {
      var row = tbody.append("tr");

      Object.entries(filtertable).forEach(function([key, value]) {

  // Add a table data cell and obj value into the table
      var cell = row.append("td");
      cell.text(value);
    });

  });
  };
