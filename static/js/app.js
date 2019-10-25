// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

function populateTable(tableToPopulate){
    tbody.html("");
    tableToPopulate.forEach(sighting => {
        const trow = tbody.append("tr");
        for (key in sighting){
            const cell = tbody.append("td")
            cell.text(sighting[key]);
        }
    })
}

populateTable(tableData)

const filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    d3.event.preventDefault();
    let filtered = tableData;

    let inputDate = d3.select("#datetime").property("value");
    if (inputDate) {
        filtered = tableData.filter(sighting => 
            sighting.datetime === inputDate)};

    let inputCity = d3.select("#city").property("value");
    if (inputCity) {
        filtered = filtered.filter(sighting => 
            sighting.city === inputCity)};
            
    let inputState = d3.select("#state").property("value");
    if (inputState) {
        filtered = filtered.filter(sighting => 
            sighting.state === inputState)};

    let inputCountry = d3.select("#country").property("value");
    if (inputCountry) {
        filtered = filtered.filter(sighting => 
            sighting.country === inputCountry)};

    let inputShape = d3.select("#shape").property("value");
    if (inputShape) {
        filtered = filtered.filter(sighting => 
            sighting.shape === inputShape)};
                                                

    populateTable(filtered)
});