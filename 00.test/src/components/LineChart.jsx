// LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import chartData from '../data/chartData.json'; // JSON 파일 경로 확인

const LineChart = () => {
    const data = {
        labels: chartData.labels,
        datasets: chartData.lineData, // chartData.json의 lineData 사용
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'bottom', // 범례 위치 조정
            },
            title: {
                display: true,
                text: '수출 증감률 (꺾은선 그래프)', // 단독 차트 제목
            },
        }
    };

    return (
        <div className="w-2/3 h-full">
            <Line
                data={data}
                options={options}
            />
        </div>
    );
}

export default LineChart;