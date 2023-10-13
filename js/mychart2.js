var xValues = ["Desktop", "Printer", "Chair", "Table", "ATM","Laptop"];
var yValues = [55, 49, 44, 24, 50,33];
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
