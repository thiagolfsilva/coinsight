import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const InterestRateChart = ({ data, threshold, coin }) => {
  const [timestamps, setTimestamps] = useState([]);
  const [aprs, setAprs] = useState([]);

  const maxApr = Math.max(...aprs.filter((apr) => apr != null), 0);
  const ymax = maxApr * 1.2;

  const chartOptions = {
    chart: {
      id: 'interest-rate-line-chart',
    },
    xaxis: {
      type: 'datetime',
      categories: timestamps,
    },
    yaxis: {
      min: 0,
      max: ymax,
      labels: {
        formatter: (value) => `${value.toFixed(2)}%`,
      },
    },
    title: {
      text: 'Interest Rate Line Chart',
    },
  };

  const chartSeries = [
    {
      name: 'APR',
      data: aprs,
    },
  ];

  useEffect(() => {
    // Update the timestamps and aprs states when the input data changes
    const timestamps = data.map((item) => item.timestamp);
    const aprs = data.map((item) => item.apr);

    setTimestamps(timestamps);
    setAprs(aprs);
  }, [data]);

  return (
    <div>
      <h1>Kucoin P2P Rates - {threshold} {coin}</h1>
      {timestamps.length > 0 ? (
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          width="100%"
          height="400"
        />
      ) : (
        <p>Loading...</p>
      )}
      <p>An interest rate of 0% means there were no availabe loans, or the data harvesting failed for that period</p>
    </div>
  );
};

export default InterestRateChart;