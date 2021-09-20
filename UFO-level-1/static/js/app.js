// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", filteredTable);
form.on("submit", filteredTable);

// Complete the event handler function for the form
function filteredTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();   

  // Select the input element and get the raw HTML node
  var selectedDate = d3.select("#date").property("value");

  // Filter data based on the seleted date
  var filteredData = tableData.filter(info => info.datetime === selectedDate);

  // Remove any data from the table body
  tbody.html("");

  // Append sightings to the table
  filteredData.forEach(info => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value])=> {
      var cell = row.append("td");
      cell.text(value);
      });
  });
};




