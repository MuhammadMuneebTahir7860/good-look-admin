import React from 'react'
import { Line } from 'react-chartjs-2';
import { DS } from '../DashboardStyle';
import { colors } from '../../../constants/Color';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from 'chart.js';
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Title
);
export default function LineChart({
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
  accusations
}) {
  console.log(accusations);
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
          size: 18
        }
      },
    },
    scales: {
      y: {
        grid: {
          tickColor: 'white',
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
        ticks: accusations ? {
          color: colors.white,
          callback: accusations ? (value, index) => accusations[index] && `${(accusations[index][1]?.accusation?.substring(0, 20) + '...')} (${accusations[index][0]})` : '',
          font: {
            weight: 'bold',
          }
        }
          :
          {
            color: colors.white,
            font: {
              weight: 'bold',
            }
          }
      },
    },
  }
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
        <Line data={
          {
            labels: labels == 'months' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : labels,
            datasets:
              multipleDatasets ?
                [
                  {
                    label: firstDatasetLabel,
                    data: firstDatasetData,
                    backgroundColor: firstDatasetGraphColors,
                    fill: false,
                    borderColor: firstDatasetGraphColors,
                    tension: 0.1
                  },
                  {
                    label: secondDatasetLabel,
                    data: secondDatasetData,
                    backgroundColor: secondDatasetGraphColors,
                    fill: false,
                    borderColor: secondDatasetGraphColors,
                    tension: 0.1,
                  },
                ]
                :
                [
                  {
                    label: firstDatasetLabel,
                    data: firstDatasetData,
                    backgroundColor: firstDatasetGraphColors,
                    fill: false,
                    borderColor: firstDatasetGraphColors,
                    tension: 0.1
                  }
                ]
          }
        }
          options={options}
        />
      </DS.GraphContainerHeight>
    </DS.GraphContainer>
  )
}
