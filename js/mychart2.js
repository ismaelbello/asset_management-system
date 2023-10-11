var xValues = ["Annex", "Kaduna", "Oshodi", "Head office", "Ilupeju"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
    "#DC1C1C",
    "#646464",
    "#B3ACAC",
    "#e8c3b9",
    "#FFFFFF"
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
