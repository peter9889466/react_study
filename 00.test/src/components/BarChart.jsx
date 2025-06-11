// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import chartData from '../data/chartData.json'; // JSON 파일 경로 확인

const BarChart = () => {
    const data = {
        labels: chartData.labels,
        datasets: chartData.barData, // chartData.json의 barData 사용
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: { // BarChart에서 여러 데이터셋을 표시할 경우 스택 여부 설정
                stacked: false // 막대가 겹치지 않고 나란히 표시
            }
        },
        plugins: {
            legend: {
                position: 'bottom', // 범례 위치 조정
            },
            title: {
                display: true,
                text: '수출입 실적 (막대 그래프)', // 단독 차트 제목
            },
        }
    };

    return (
        <div className="w-2/3 h-full">
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}
export default BarChart;