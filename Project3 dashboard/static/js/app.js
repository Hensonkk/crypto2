let data;

// Load data
function loadData() {
    d3.json("samples.json").then(jsonData => {
        data = jsonData;
        console.log(data);

        // Populate the dropdown
        populateDropdown(data);

        // Create the initial charts and display metadata
        updateDashboard(data.names[0]);
    });
}

// Define the populateDropdown function
function populateDropdown(data) {
    let dropdown = d3.select("#selDataset");

    data.names.forEach(sampleId => {
        dropdown.append("option").text(sampleId).property("value", sampleId);
    });
}