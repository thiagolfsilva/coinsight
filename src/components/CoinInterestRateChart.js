import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinMarginDropdown from './CoinMarginDropdown';
import InterestRateChart from './InterestRateChart';

const CoinInterestRateChart = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [interestRateData, setInterestRateData] = useState([]);
  const [threshold, setThreshold] = useState(1);
  const [chartCoin, setChartCoin] = useState(selectedCoin);
  const [chartThreshold, setChartThreshold] = useState(threshold);

  const fetchInterestRateData = async (coin, threshold) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/kucoin/margin/historical?coin=${coin}&threshold=${threshold}`
      );
      console.log(response.data);
      console.log('Type of response.data:', typeof response.data);

      const data = response.data.map((item) => {
        return {
          timestamp: item.timestamp,
          apr: item.dailyIntRate * 365 * 100,
        };
      });
      setInterestRateData(data);
      setChartCoin(coin);
      setChartThreshold(threshold);
    } catch (error) {
      console.error('Failed to fetch interest rate data:', error);
    }
  };

  useEffect(() => {
    fetchInterestRateData(selectedCoin, threshold);
  }, []);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  const handleThresholdChange = (event) => {
    setThreshold(event.target.value);
  };

  const handleUpdateButtonClick = () => {
    fetchInterestRateData(selectedCoin, threshold);
  };

  return (
    <div>
      <CoinMarginDropdown onSelect={handleCoinSelect} />
      <label htmlFor="threshold-input">Threshold: </label>
      <input
        id="threshold-input"
        type="number"
        value={threshold}
        onChange={handleThresholdChange}
      />
      <button onClick={handleUpdateButtonClick}>Update Graph</button>
      <InterestRateChart
        data={interestRateData}
        coin={chartCoin}
        threshold={chartThreshold}
      />
    </div>
  );
};

export default CoinInterestRateChart;