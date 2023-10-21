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
        title: {text: "Bitcoin vs Gold"},
        axisX: {title: 'Year', valueFormatString: "####", interval:1},
        axisY2: {title: 'Gold Price', lineColor: "#bca14f", titleFontColor: "#bca14f", labelFontColor: "#bca14f", includeZero: true},
        axisY: {title: "Bitcoin Price", lineColor: "#4f82bc", titleFontColor: "#4f82bc", labelFontColor: "#4f82bc"}, 
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
        color: "#bca14f",
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
        console.log(xval);
        console.log(yval);
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

var dataPoints1 =[];
var chart1 = new CanvasJS.Chart("chartContainer1", {
        title: {text: "Bitcoin vs Silver"},
        axisX: {title: 'Year', valueFormatString: "####", interval:1},
        axisY2: {title: 'Silver Price', lineColor: "#bca14f", titleFontColor: "#bca14f", labelFontColor: "#bca14f", includeZero: true},
        axisY: {title: "Bitcoin Price", lineColor: "#4f82bc", titleFontColor: "#4f82bc", labelFontColor: "#4f82bc"}, 
        legend: {verticalAlign: "bottom"},
                    
    data1: [{
        showInLegend: true,
        type: 'line',
        axisYType: "primary",
        color: "#4f82bc",
        name: "Bitcoin",
        dataPoints: dataPoints1},
        {showInLegend: true,
        type: 'line',
        axisYType: "secondary",
        color: "#bca14f",
        name: "Gold",
        dataPoints: dataPoints1}]});
                      
$( ".dropdown1" ).change(function() {
    chart1.options.data1[0].dataPoints1 = [];
    chart1.options.data1[1].dataPoints1 = [];
    var e1 = document.getElementById("dd1");
    var selected1 = e1.options[e1.selectedIndex].value;
    currency1 = jsonData1[selected1];
        for (i in currency1){
            xval1 = currency1[i].x
            yval1 = currency1[i].y
            y2val1 = currency1[i].y2
        chart1.options.data1[0].dataPoints1.push({x: xval1, y: yval1})
        chart1.options.data1[1].dataPoints1.push({x: xval1, y: y2val1})}
                        
        chart.render()
        console.log(xval1);
        console.log(yval1);
});
