// from data.js
var tableData = data;

// Selecting body
var tbody = d3.select("tbody")

//Select button
var filterButton = d3.select("#filter-btn")

tableData.forEach(function(mainData){
    var row = tbody.append("tr");
    // setting data in row
    Object.entries(mainData).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td").text(value);
    });
});

filterButton.on("click", function(){
    // create datetime variable
    var dateTime = d3.select('#datetime');
    var filterDateTime = dateTime.property("value");

    // Empty Table
    tbody.html("");

    // new filtered data variable
    var newData = tableData.filter(mainData => mainData.datetime === filterDateTime);

    newData.forEach(function(mainData){
        var row = tbody.append("tr");
        Object.entries(mainData).forEach(function([key,value]){
            var cell = row.append("td").text(value);
        });
    });
})

