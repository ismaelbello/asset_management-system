var xValues = ["Annex", "Kaduna", "Head office", "Ilupeju","Ali kaduna","Yaba"];
var yValues = [55, 49, 44, 24, 40,30];
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
      text: "Total workstation"
    }
  }
});
