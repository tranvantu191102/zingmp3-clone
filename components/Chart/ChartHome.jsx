import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const ChartHome = ({ data }) => {
    console.log(data)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '#zingchart',
            },
        },
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels = data.chart.times.map(item => {
        if (Number(item.hour) % 2 !== 0) {
            const time = `${item.hour}:00`
            return time
        }
    })
    const dataa = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data.chart.items.ZZDFBFD8.map(item => {
                    if (Number(item.hour) % 2 !== 0) {
                        return item.counter
                    }
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: true
            },
            {
                label: 'Dataset 2',
                data: data.chart.items.ZZEEOCFZ.map(item => {
                    if (Number(item.hour) % 2 !== 0) {
                        return item.counter
                    }
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                fill: true
            },
            {
                label: 'Dataset 3',
                data: data.chart.items.ZZFZW6U9.map(item => {
                    if (Number(item.hour) % 2 !== 0) {
                        return item.counter
                    }
                }),
                borderColor: 'rgb(18, 207, 49)',
                backgroundColor: 'rgba(16, 245, 27, 0.5)',
                fill: true
            },
        ],
    };
    return (
        <>
            <Line options={options} data={dataa} />
        </>
    )
}

export default ChartHome