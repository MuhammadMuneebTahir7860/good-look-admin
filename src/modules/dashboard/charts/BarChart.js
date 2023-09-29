import React from 'react'
import { Bar } from 'react-chartjs-2';
import { DS } from '../DashboardStyle';
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { colors } from '../../../constants/Color';
ChartJS.register(
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChart({
    graphTitle,
    firstTotalNumbersBox,
    secondTotalNumbersBox,
    totalNumbersBoxWidth,
    firstTotalNumbersBoxColor,
    secondTotalNumbersBoxColor,
    firstTotalNumbersBoxContent,
    secondTotalNumbersBoxContent,
    labels,
    multipleDatasets,
    firstDatasetLabel,
    firstDatasetData,
    firstDatasetGraphColors,
    secondDatasetLabel,
    secondDatasetData,
    secondDatasetGraphColors,
}) {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: colors.white,
                }
            },
            title: {
                display: true,
                text: graphTitle,
                color: colors.white,
                font: {
                    size: 18,
                }
            },
        },
        scales: {
            y: {
                grid: {
                    tickColor: colors.white,
                },
                ticks: {
                    color: colors.white,
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    padding: 20,
                    stepSize: 1,
                }
            },
            x: {
                grid: {
                    tickColor: colors.white,
                },
                ticks: {
                    color: colors.white,
                    font: {
                        weight: 'bold',
                    }
                }
            },
        },
    };
    return (
        <DS.GraphContainer>
            <DS.TotalNumbersHeadingContainersRow >
                {/* {
                    firstTotalNumbersBox &&
                    <DS.TotalNumbersHeadingContainer width={totalNumbersBoxWidth} color={firstTotalNumbersBoxColor}>
                        <DS.TotalNumbers>{firstTotalNumbersBoxContent}</DS.TotalNumbers>
                    </DS.TotalNumbersHeadingContainer>
                }
                {
                    secondTotalNumbersBox &&
                    <DS.TotalNumbersHeadingContainer width={totalNumbersBoxWidth} color={secondTotalNumbersBoxColor}>
                        <DS.TotalNumbers>{secondTotalNumbersBoxContent}</DS.TotalNumbers>
                    </DS.TotalNumbersHeadingContainer>
                } */}
            </DS.TotalNumbersHeadingContainersRow>
            <DS.GraphContainerHeight>
                <Bar data={
                    {
                        labels: labels == 'months' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : labels,
                        datasets:
                            multipleDatasets ?
                                [
                                    {
                                        label: firstDatasetLabel,
                                        // labelColor: colors.white,
                                        data: firstDatasetData,
                                        showLine: false,
                                        tension: 0.5,
                                        pointStyle: "dash",
                                        borderWidth: 0,
                                        fill: false,
                                        backgroundColor: firstDatasetGraphColors,
                                        borderColor: "rgba(255, 99, 132, 0.2)",
                                    },
                                    {
                                        label: secondDatasetLabel,
                                        data: secondDatasetData,
                                        showLine: false,
                                        tension: 0.5,
                                        pointStyle: "dash",
                                        borderWidth: 0,
                                        fill: false,
                                        backgroundColor: secondDatasetGraphColors,
                                        borderColor: "rgba(255, 99, 132, 0.2)",
                                    },
                                ]
                                :
                                [
                                    {
                                        label: firstDatasetLabel,
                                        data: firstDatasetData,
                                        showLine: false,
                                        tension: 0.5,
                                        pointStyle: "dash",
                                        borderWidth: 0,
                                        fill: false,
                                        backgroundColor: firstDatasetGraphColors,
                                        borderColor: "rgba(255, 99, 132, 0.2)",
                                    },
                                ]
                    }
                }
                    options={options}
                />
            </DS.GraphContainerHeight>
        </DS.GraphContainer>
    )
}
