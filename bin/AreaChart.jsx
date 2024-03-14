import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  tension: 0.2,
  scales: {
    x: {
      ticks: {
        color: "#ff0000",
      },
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "0",
  "10",
  "20",
  "30",
  // "May",
  // "June",
  // "July",
  // "August",
  // "September",
  // "October",
  // "November",
  // "December",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: labels.map(() => Math.random() * 10),
      borderColor: "#334eff",
      backgroundColor: "rgba(51, 78, 255,.1)",
    },
  ],
};

export default function AreaChart() {
  return <Line options={options} data={data} />;
}
