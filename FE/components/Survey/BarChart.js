import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// options.scales[scaleId].grid;
const BarChart = ({ total, item }) => {
  console.log(item);
  const options = {
    responsive: true,

    indexAxis: "y",
    scales: {
      x: {
        min: 0,
        max: total,
        grid: { display: false, drawBorder: false },
        title: {
          display: false,
        },
      },
      y: { position: "right" },
    },
    plugins: {
      legend: {
        display: false,
      },
      width: 100,
      // datalabels: {
      //   color: "#fff",
      //   borderwidth: 2,
      //   anchor: "center",
      //   formatter: 100,
      // },
    },
  };

  const data = {
    labels: item.option.map((opt) => opt.context),

    datasets: [
      {
        data: item.option.map((opt) => opt.count),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(50, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div style={{ height: "400px", width: "800px" }}>
      <Bar
        style={{ height: "300px", width: "800px" }}
        options={options}
        data={data}
      />
    </div>
  );
};

export default BarChart;
