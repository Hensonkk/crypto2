// Function to handle data fetching and graph creation
function createGraph(apiUrl, graphId, name) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const parsedData = JSON.parse(data);
            const month_year = [];
            const closing_price = [];
            const volume = [];

            for (let i = 0; i < parsedData.length; i++) {
                const m_y = new Date(parsedData[i].month_year).toLocaleDateString("en-US");
                const c_p = parsedData[i].closing_price;
                const v = parsedData[i].volume;

                month_year.push(m_y);
                closing_price.push(c_p);
                volume.push(v);
            }

            const trace1 = {
                type: 'line',
                x: month_year,
                y: closing_price,
                mode: 'lines+markers',
                name: `${name} Closing Price`
            };

            const trace2 = {
                type: 'bar',
                x: month_year,
                y: volume,
                mode: 'lines+markers',
                name: `${name} Volume`,
                yaxis: 'y2',
                opacity: 0.5
            };

            const layout = {
                title: `${name} Closing Price & Volume`,
                xaxis: { showgrid: false, zeroline: false },
                yaxis: { title: 'Closing Price' },
                yaxis2: { title: 'Volume', overlaying: "y", side: 'right' }
            };

            const data = [trace1, trace2];

            Plotly.newPlot(graphId, data, layout);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    createGraph('/api/bitcoin', 'bitcoin-graph', 'Bitcoin');
});

document.addEventListener("DOMContentLoaded", function () {
    createGraph('/api/gold', 'gold-graph', 'Gold');
});

document.addEventListener("DOMContentLoaded", function () {
    createGraph('/api/silver', 'silver-graph', 'Silver');
});
