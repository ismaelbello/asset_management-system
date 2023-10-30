var xValues = ["Desktop", "Chair", "Laptop", "Table", "Printer","ATM"];
var yValues = [700, 600, 400, 300, 200,150];
var barColors = [
    "#DC1C1C",
    "#646464",
    "#B3ACAC",
    "#e8c3b9",
    "red",
    // "#876eeb"
];

new Chart("mychart2", {
  type: "bar",
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
      text: "Top 5 Asset"
    }
  }
});
