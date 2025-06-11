// MixedChart.jsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import chartData from '../data/chartData.json'; // JSON 파일 경로 확인

// Chart.js에 필요한 컨트롤러와 스케일 등을 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const MixedChart = () => {
    const data = {
        labels: chartData.labels,
        datasets: chartData.mixedChartData,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: '수출입실적',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                stacked: false,
            },
            y: { // 첫 번째 Y축 (왼쪽, 수출액/수입액)
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                title: {
                    display: true,
                    text: '수출액/수입액(억달러)'
                },
                grid: {
                    drawOnChartArea: true,
                },
            },
            y1: { // 두 번째 Y축 (오른쪽, 증감률)
                type: 'linear',
                display: true,
                position: 'right',
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: '수출, 수입 증감률(%)'
                },
            },
        },
    };

    return (
        <div className="w-2/3 h-full">
            <Bar data={data} options={options} />
        </div>
    );
};

export default MixedChart;