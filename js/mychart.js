var xValues = ["Annex", "Kaduna", "Head office", "Ilupeju","Ali kaduna","Yaba"];
var yValues = [55, 49, 44, 24, 60,38];
var barColors = [
  "#DC1C1C",
  "#646464",
  "#B3ACAC",
  "#e8c3b9",
  "red",
  // "#876ee"
];

new Chart("mychart", {
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
      text: "Total asset in branches"
    }
  }
});
