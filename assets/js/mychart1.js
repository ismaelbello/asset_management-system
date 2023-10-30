var xValues = ["SouthWest", "SouthEast", "SouthSouth", "NorthWest","NorthEast","NorthCentral"];
var yValues = [500, 300, 200, 300, 200,300];
var barColors = [
    "#DC1C1C",
    "#646464",
    "#B3ACAC",
    "#e8c3b9",
    "red",
    // "#876eeb"
];

new Chart("mychart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Total Asset in Regions"
    }
  }
});
