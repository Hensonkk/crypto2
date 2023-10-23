document.addEventListener('DOMContentLoaded', function() {
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            const countries = data.map(item => item.country);
            const reserves = data.map(item => item.reserves);

            const heatmapData = {
                type: 'choropleth',
                locations: countries,
                locationmode: 'country names',
                z: reserves,
                text: countries,
                colorscale: 'Viridis',
                colorbar: {
                    title: 'Gold Reserves (in tonnes)'
                }
            };

            const layout = {
                title: 'Gold Reserves by Country',
            };

            Plotly.newPlot('heatmap', [heatmapData], layout);
        });
});

let jsonData1 = {
    "currency3": [{x: 2014, y: 378, y2: 16},
                   {x: 2015, y: 430, y2: 17},
                   {x: 2016, y: 964, y2: 20},
                   {x: 2017, y: 14156, y2: 18},
                   {x: 2018, y: 10397, y2: 17},
                   {x: 2019, y: 10817, y2: 18},
                   {x: 2020, y: 29002, y2: 28},
                   {x: 2021, y: 61319, y2: 28},
                   {x: 2022, y: 45539, y2: 25},
                   {x: 2023, y: 30477, y2: 24}],
    "currency4": [{x: 2014, y: 902994450, y2: 100090},
               {x: 2015, y: 2177623396, y2: 80023},
               {x: 2016, y: 4749702740, y2: 105261},
               {x: 2017, y: 410336495104, y2: 252176},
               {x: 2018, y: 416247858176, y2: 128191},
               {x: 2019, y: 724157870864, y2: 122362},
               {x: 2020, y: 1290442059648, y2: 141618},
               {x: 2021, y: 2267152936675, y2: 89121},
               {x: 2022, y: 1224531549126, y2: 123756},
               {x: 2023, y: 883299703608, y2: 74574}]};

var dataPoints =[];
var chart = new CanvasJS.Chart("chartContainer", {
   title: {text: "Bitcoin vs Silver by Year (Max Price/Volume)"},
   axisX: {title: 'Year', valueFormatString: "####", interval:1},
   axisY2: {title: 'Silver Price', lineColor: "#d4d4d4", titleFontColor: "#d4d4d4", labelFontColor: "#d4d4d4", includeZero: true, prefix: "$"},
   axisY: {title: "Bitcoin Price", lineColor: "#4f82bc", titleFontColor: "#4f82bc", labelFontColor: "#4f82bc", prefix: "$"}, 
   legend: {verticalAlign: "bottom"},
               
data: [{
   showInLegend: true,
   type: 'line',
   axisYType: "primary",
   color: "#4f82bc",
   name: "Bitcoin",
   dataPoints: dataPoints},
   {showInLegend: true,
   type: 'line',
   axisYType: "secondary",
   color: "#d4d4d4",
   name: "Silver",
   dataPoints: dataPoints}]});
                 
$( ".dropdown" ).change(function() {
chart.options.data[0].dataPoints = [];
chart.options.data[1].dataPoints = [];
var e = document.getElementById("dd");
var selected = e.options[e.selectedIndex].value;
currency = jsonData1[selected];
   for (x in currency){
       xval = currency[x].x
       yval = currency[x].y
       y2val = currency[x].y2
   chart.options.data[0].dataPoints.push({x: xval, y: yval})
   chart.options.data[1].dataPoints.push({x: xval, y: y2val})}
                   
   chart.render()
   console.log(xval);
   console.log(yval);
});