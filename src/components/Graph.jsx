import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = () => {
  const data = {
    labels: ['Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28'],
    datasets: [
      {
        label: 'Sales',
        data: [900, 800, 900, 1000, 960, 900, 950],
        fill: false,
        backgroundColor: 'rgba(34, 139, 230, 1)',
        borderColor: 'rgba(34, 139, 230, 1)',
      },
       {
        label: 'Line 2',
        data: [700, 650, 480, 800, 600, 680, 500],
        borderColor: 'rgba(18, 184, 134, 1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: false,
      },
      {
        label: 'Line 3',
        data: [600, 500, 300, 750, 500, 400, 480],
        borderColor: 'rgba(34, 139, 230, 1)',
        backgroundColor: 'rgba(255,159,64,0.2)',
        fill: false,
      },
    ],
  };

  const options = {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.1)',
              borderDash: [5, 5], // Dotted grid lines
            },
          },
          x: {
            grid: {
              color: 'rgba(0,0,0,0.1)',
              borderDash: [5, 5], // Dotted grid lines
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        };
      
  return (
    <div className=" my-2 md:w-80 w-[99%] border-b-1 border-t-1 border-l-1 border-gray-300  md:p-2 rounded-2xl ">
      {/* <h2 className="text-2xl font-bold text-center mb-4">Line Chart</h2> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;

