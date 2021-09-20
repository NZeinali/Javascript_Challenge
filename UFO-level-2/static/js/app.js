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
  filteredData = tableData;
  
  // Prevent the page from refreshing
  d3.event.preventDefault(); 

  // Get the value property of the input element
  var inputDate = d3.select("#date").property("value");
  
  // Filter data based on the seleted date
  if (inputDate != ''){
    var filteredData = filteredData.filter(info => info.datetime === inputDate);
  };

  // Get the value property of the input element and convert the string to lowercase 
  var inputCity = d3.select("#city").property("value").toLowerCase();
 
  // Filter data based on the seleted city
  if (inputCity != ''){
    var filteredData = filteredData.filter(info => info.city === inputCity);
  };

  // Get the value property of the input element and convert the string to lowercase 
  var inputState = d3.select("#state").property("value").toLowerCase();
  
  // Filter data based on the seleted state
  if (inputState != ''){
    var filteredData = filteredData.filter(info => info.state === inputState);
  };
  
  // Get the value property of the input element
  var inputCountry = d3.select("#country").property("value");

  // Filter data based on the seleted country
  if (inputCountry != ''){
    var filteredData = filteredData.filter(info => info.country === inputCountry);
  };

  // Get the value property of the input element and convert the string to lowercase 
  var inputShape = d3.select("#shape").property("value").toLowerCase();

  // Filter data based on the seleted shape
  if (inputShape != ''){
    var filteredData = filteredData.filter(info => info.shape === inputShape);
  };  

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



