import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Chart } from 'chart.js/auto';

const MonthlyMetricsChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const initChart = () => {
            if (!canvasRef.current || chartInstance.current) return;

            const ctx = canvasRef.current.getContext('2d');

            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Orders',
                            data: [65, 59, 80, 81, 56, 55, 40, 72, 68, 75, 88, 90],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Earnings',
                            data: [80, 75, 95, 100, 70, 68, 50, 85, 80, 90, 105, 110],
                            backgroundColor: 'rgba(75, 192, 192, 0.8)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Refunds',
                            data: [15, 10, 8, 12, 5, 7, 20, 8, 10, 5, 12, 15],
                            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 120,
                            ticks: {
                                callback: function(value) {
                                    return value + '.00';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        };

        const cleanupChart = () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };

        // Initialize on mount
        initChart();

        // Cleanup on unmount
        return () => {
            cleanupChart();
        };
    }, []);

    return (
        <div ref={chartContainer} style={{ position: 'relative', height: '400px', width: '100%' }}>
            <canvas ref={canvasRef} />
            <div className="d-flex justify-content-center ">
                {['Orders', 'Earnings', 'Refunds'].map((label, index) => (
                    <div key={index} className="d-flex align-items-center mx-3">
            <span
                className="legend-color"
                style={{
                    width: '15px',
                    height: '15px',
                    marginRight: '5px',
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                    ][index]
                }}
            />
                        <small>{label}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default MonthlyMetricsChart