import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const InterestRateChart = ({ data }) => {
  const [series, setSeries] = useState([{ data: [] }]); // Add this line to define series state and setSeries function
  const [timestamps, setTimestamps] = useState([]);
  const [aprs, setAprs] = useState([]);

  const fetchInterestRateData = async () => {
    try {
      
        const response = await axios.get('http://localhost:5000/api/interest-rates');
      const interestRateData = response.data;

      const timestamps = interestRateData.map((data) => data.timestamp);
      const aprs = interestRateData.map((data) => data.apr);

      setTimestamps(timestamps);
      setAprs(aprs);
    } catch (error) {
      console.error('Error fetching interest rate data:', error);
    }
  };

  useEffect(() => {
    fetchInterestRateData();
  }, []);

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
      max: 10,
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
    // Update the series data when the input data changes
    setSeries([{ data: data.map((item) => [item.timestamp, item.apr]) }]);
  }, [data]);

  return (
    <div>
      <h1>Interest Rate Chart</h1>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        width="100%"
        height="400"
      />
    </div>
  );
}

export default InterestRateChart;