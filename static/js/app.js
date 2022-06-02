// import data from data.js.
const tableData = data;

//Reference the HTML table using d3.
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
}

// Chained for loop with argument "dataRow" that will iterate through array.
data.forEach((dataRow) => {

    // Finding <tbody> tag and adding table row tr.
    let row = tbody.append("tr");

    // Reference one object from UFA sighting. Add value to dataRow
    // forEach(val) specifies one object per row.
    Object.values(dataRow).forEach((val) => {

        // Appending data into table data tag.
        let cell = row.append("td");
        // Add values from object.
        cell.text(val);
        }
    );
});

function handleClick() { 
    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
       // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);
