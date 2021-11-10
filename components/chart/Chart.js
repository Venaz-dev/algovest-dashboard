import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Deposit Rate",
      data: [2, 1, 9, 5, 11, 2, 7],
      fill: true,
      lineTension: 0.3,
      radius: 0,
      borderWidth: 2,
      borderColor: "green",
      backgroundColor: "rgba(22, 245, 40, 0.23)",
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "98.3%",
      fontSize: "100",
      // position: 'left',
    },
  },
  scaleShowLabels: false,
};

const LineChartCompOne = () => {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChartCompOne;
