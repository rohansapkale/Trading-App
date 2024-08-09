import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, annotationPlugin);

const StudentGrowthChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: "Other's Students",
        data: [20, 40, 35, 50, 70],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // light orange
        borderColor: 'rgba(255, 165, 0, 1)', // orange
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: 'rgba(255, 165, 0, 1)', // orange points
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
      {
        label: 'Our Students',
        data: [10, 30, 25, 40, 80],
        backgroundColor: 'rgba(0, 128, 0, 0.5)', // light green
        borderColor: 'rgba(0, 128, 0, 1)', // green
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: 'rgba(0, 128, 0, 1)', // green points
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          color: '#000000', // black text color
        },
        ticks: {
          color: '#000000', // black tick color
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
          color: '#000000', // black text color
        },
        ticks: {
          color: '#000000', // black tick color
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Students Growth',
        color: '#000000', // black title color
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: 3,
            xMax: 3,
            borderColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 2,
            label: {
              content: 'Significant Event',
              enabled: true,
              position: 'top',
              color: '#000000', // black label color
            }
          }
        }
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      animationDuration: 400,
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-3 text-zinc-800 p-8 aspect-w-16 aspect-h-9 shadow-lg rounded-lg bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default StudentGrowthChart;
