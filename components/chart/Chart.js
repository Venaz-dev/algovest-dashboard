import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2";



const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Deposit Rate',
      data: [2, 1, 9, 5, 11, 2, 7],
      fill: true,
      lineTension: 0.3,
      radius: 0,
      borderWidth: 2,
      borderColor: 'green',
      backgroundColor: 'rgba(22, 245, 40, 0.23)',
    },
  ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: true,
            text: '98.3%',
            fontSize: '100',
            // position: 'left',

        }
    }
};

const LineChartCompOne = () => {
    return (
        <>
            <Line 
                data={data}
                options={options}
            />
        </>
    );
}

export default LineChartCompOne;
