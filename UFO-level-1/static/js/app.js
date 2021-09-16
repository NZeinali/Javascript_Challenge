// from data.js
var tableData = data;

// Getting a reference to the table body
var tbody = d3.select("tbody");


// Getting a reference to the input element on the page with the id property
var inputDate = d3.select("#datetime");

// Creating event handler
inputDate.on("change", function() {
        
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var selectedDate = d3.event.target.value;
    console.log(selectedDate);
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", toDo);
form.on("submit", toDo);

// Complete the event handler function for the form
function toDo() {

  // Prevent the page from refreshing
  d3.event.preventDefault();   

  // Select the input element and get the raw HTML node
  var selectedDate = d3.select("#datetime").property("value");

  // Filter data
  var filteredData = tableData.filter(info => info.datetime === selectedDate);
  console.log(filteredData);

  // Select table body
  var tbody = d3.select("tbody");
  tbody.html("");
  filteredData.forEach(info => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value])=> {
      console.log(value)  
      var cell = row.append("td");
      cell.text(value);

      });

  });

}




