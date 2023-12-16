var xValues = ["Desktop", "Chair", "Laptop", "Table", "Printer","ATM"];
var yValues = [900, 800, 700, 600, 500,390];
var barColors = [
    "#DC1C1C",
    "#646464",
    "#B3ACAC",
    "#e8c3b9",
    "red",
    "silver"
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
