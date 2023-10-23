let goldVotes = 0;
let silverVotes = 0;
let bitcoinVotes = 0;

const goldVoteButton = document.getElementById('goldVote');
const silverVoteButton = document.getElementById('silverVote');
const bitcoinVoteButton = document.getElementById('bitcoinVote');

const goldCountSpan = document.getElementById('goldCount');
const silverCountSpan = document.getElementById('silverCount');
const bitcoinCountSpan = document.getElementById('bitcoinCount');

goldVoteButton.addEventListener('click', () => {
    goldVotes++;
    goldCountSpan.textContent = goldVotes;
});

silverVoteButton.addEventListener('click', () => {
    silverVotes++;
    silverCountSpan.textContent = silverVotes;
});

bitcoinVoteButton.addEventListener('click', () => {
    bitcoinVotes++;
    bitcoinCountSpan.textContent = bitcoinVotes;
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/bitcoin')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                var dates = new Date(m_y).toLocaleDateString("en-US")
                c_p = data[i]["bitcoin_cp"];
                v = data[i]["bitcoin_v"];

                month_year.push(dates);
                closing_price.push(c_p);
                volume.push(v);
            }

            var trace1 = {
                type: 'line',
                x: month_year,
                y: closing_price,
                marker: {color: 'rgb(44,135,209'},
                mode: 'lines+markers',
                name: 'Bitcoin Closing Price'
            };
            var trace2 = {
                type: 'bar',
                x: month_year,
                y: volume,
                mode: 'lines+markers',
                name: 'Bitcoin Volume',
                yaxis: 'y2',
                opacity: 0.4
            };
            var layout = {
                title: 'Bitcoin Closing Price & Volume',
                xaxis: {showgrid: false, zeroline: false},
                yaxis: {title: 'Closing Price ($)'},
                yaxis2: {title: 'Volume ($)', overlaying: "y", side: 'right'},
                legend: {x:1, y:-.5}
            };
            var data = [trace1, trace2]

            Plotly.newPlot('bitcoin-graph', data, layout);
    });
    }
);

 document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/gold')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                var dates = new Date(m_y).toLocaleDateString("en-US")
                c_p = data[i]["gold_cp"];
                v = data[i]["gold_v"]

                month_year.push(dates);
                closing_price.push(c_p);
                volume.push(v);
        }

        var trace1 = {
            type: 'line',
            x: month_year,
            marker: {color: 'rgb(255,215,0'},
            y: closing_price,
            mode: 'lines+markers',
            name: 'Gold Closing Price'
        };
        var trace2 = {
            type: 'bar',
            x: month_year,
            y: volume,
            mode: 'lines+markers',
            name: 'Gold Volume',
            yaxis: 'y2',
            opacity: 0.4
        };
        var layout = {
            title: 'Gold Closing Price & Volume',
            xaxis: {showgrid: false, zeroline: false},
            yaxis: {title: 'Closing Price ($)'},
            yaxis2: {title: 'Volume ($)', overlaying: "y", side: 'right'},
            legend: {x:1, y:-.5}
        };
        var data = [trace1, trace2]

        Plotly.newPlot('gold-graph', data, layout);
    }
        )
    }
)


document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/silver')
        .then(response => response.json())
        .then(data => {
            var data = JSON.parse(data);

            month_year = [];
            closing_price = [];
            volume = [];

            for (let i = 0; i < data.length; i++){

                m_y = data[i]["month_year"];
                var dates = new Date(m_y).toLocaleDateString("en-US");
                c_p = data[i]["silver_cp"];
                v = data[i]["silver_v"]

                month_year.push(dates);
                closing_price.push(c_p);
                volume.push(v);
        }

        var trace1 = {
            type: 'line',
            x: month_year,
            marker: {color: 'rgb(192,192,192'},
            y: closing_price,
            mode: 'lines+markers',
            name: 'Silver Closing Price'
        };
        var trace2 = {
            type: 'bar',
            x: month_year,
            y: volume,
            mode: 'lines+markers',
            name: 'Silver Volume',
            yaxis: 'y2',
            opacity: 0.4
        };
        var layout = {
            title: 'Silver Closing Price & Volume',
            xaxis: {showgrid: false, zeroline: false},
            yaxis1: {title: 'Closing Price ($)'},
            yaxis2: {title: 'Volume ($)', overlaying: "y", side: 'right'},
            legend: {x:1, y:-.5}
        };
        var data = [trace1, trace2]

        Plotly.newPlot('silver-graph', data, layout);
    }
        )
    }
)

let jsonData = {
    "currency1": [{x: 2014, y: 378, y2: 1184},
                {x: 2015, y: 430, y2: 1279},
                {x: 2016, y: 964, y2: 1349},
                {x: 2017, y: 14156, y2: 1316},
                {x: 2018, y: 10397, y2: 1339},
                {x: 2019, y: 10817, y2: 1519},
                {x: 2020, y: 29002, y2: 1968},
                {x: 2021, y: 61319, y2: 1903},
                {x: 2022, y: 45539, y2: 1949},
                {x: 2023, y: 30477, y2: 1990}],
     "currency2": [{x: 2014, y: 902994450, y2: 299410},
                {x: 2015, y: 2177623396, y2: 258615},
                {x: 2016, y: 4749702740, y2: 281653},
                {x: 2017, y: 410336495104, y2: 404733},
                {x: 2018, y: 416247858176, y2: 441893},
                {x: 2019, y: 724157870864, y2: 443701},
                {x: 2020, y: 1290442059648, y2: 316262},
                {x: 2021, y: 2267152936675, y2: 245814},
                {x: 2022, y: 1224531549126, y2: 232014},
                {x: 2023, y: 883299703608, y2: 220474}]};


var dataPoints =[];
var chart = new CanvasJS.Chart("chartContainer", {
title: {text: "Bitcoin vs Gold by Year (Max Price & Volume)"},
axisX: {title: 'Year', valueFormatString: "####", interval:1},
axisY2: {title: 'Gold Price', lineColor: "#FFD700", titleFontColor: "#FFD700", labelFontColor: "#FFD700", includeZero: true, prefix: "$"},
axisY: {title: "Bitcoin Price", lineColor: "#2c87d1", titleFontColor: "#2c87d1", labelFontColor: "#2c87d1", prefix: "$"}, 
legend: {verticalAlign: "bottom"},

data: [{
showInLegend: true,
type: 'line',
axisYType: "primary",
color: "#2c87d1",
name: "Bitcoin",
dataPoints: dataPoints},
{showInLegend: true,
type: 'line',
axisYType: "secondary",
color: "#FFD700",
name: "Gold",
dataPoints: dataPoints}]});

$( ".dropdown" ).change(function() {
chart.options.data[0].dataPoints = [];
chart.options.data[1].dataPoints = [];
var e = document.getElementById("dd");
var selected = e.options[e.selectedIndex].value;
currency = jsonData[selected];
for (i in currency){
    xval = currency[i].x
    yval = currency[i].y
    y2val = currency[i].y2
chart.options.data[0].dataPoints.push({x: xval, y: yval})
chart.options.data[1].dataPoints.push({x: xval, y: y2val})}

chart.render()
});