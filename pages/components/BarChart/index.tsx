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
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    scales: {
        y: {
            border:{
                color: "white"
            },
            grid: {
                display: true,
                drawTicks: true,
                zeroLineWidth: 5,
                drawBorder: false, // y axix border
                border: { color: "red", },
                zeroLineColor: 'red',
                // borderDash: context => handalGridLine(context),
                color: (context: any) => {
                    return context?.tick?.value === 0 ? 'white' : 'blue';
                },


            },
            ticks: {
                display: true,
                borderColor: "red",
                font: {
                    size: 10,
                    weight: 400,
                    color: "red",
                },
            },
        },
        x: {
            beginAtZero: false,
            min: 0,
            grid: {
                display: true,
                tickColor: (context: any) => {
                    return context?.tick?.value === 0 ? 'white' : 'blue';
                },
                color: (context: any) => {
                    return context?.tick?.value === 0 ? 'white' : 'blue';
                },

                lineWidth: (context: any) => {
                    return context?.tick?.value === 0 ? 0 : 1;
                },
                circular: true,

                dashOffset: 0.0
                // drawTicks: false,
                // zeroLineWidth: 0,
                // // drawOnChartArea: false,
                // zeroLineColor: 'red',
                // borderColor: "red",
                // drawBorder: false, // y axix border
                // color: (context: any) =>
                //     context?.tick?.value !== 0 ? "#D3D3D3" : "white",
            },
            ticks: {
                display: true,
                borderColor: "red",
            },
        },

    },
    plugins: {
        datalabels: {
            display: true,
            font: {
                size: 10,
                weight: 700,
                color: "red",
            },
            anchor: (context: any) => {
                const anchor = (context?.dataset?.data || []).map(() => {
                    return "end";
                });
                return anchor;
            },
            clip: false,
            align: (context: any) => {
                const anchor = (context?.dataset?.data || []).map(() => {
                    return "end";
                });
                return anchor;
            },
            color: "yellow",
            offset: -2,
        },
        legend: {
            position: "bottom",
            align: "start",
            labels: {
                color: "#000",
                boxWidth: 30,
                boxHeight: 18,
                padding: 10,
            },
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const labels = [
    "2015-16",
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Revenue",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "#B888DC",
            borderRadius:4
        },
        {
            label: "COGS",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "#00B0F0",
        },
        {
            label: "Gross Profit",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "ORANGE",
        },
    ],
};
const BarChart = () => {
    {/*
        // @ts-ignore */}
    return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
}

export default BarChart