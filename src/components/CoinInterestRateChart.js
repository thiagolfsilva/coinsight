// src/CoinInterestRateChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinMarginDropdown from './CoinMarginDropdown';
import InterestRateChart from './InterestRateChart';

const CoinInterestRateChart = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [interestRateData, setInterestRateData] = useState([]);

  useEffect(() => {
    const fetchInterestRateData = async (coin) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/interest-rates?coin=${coin}`
        );
        const data = response.data;
        setInterestRateData(data);
      } catch (error) {
        console.error('Failed to fetch interest rate data:', error);
      }
    };

    fetchInterestRateData(selectedCoin);
  }, [selectedCoin]);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div>
      <CoinMarginDropdown onSelect={handleCoinSelect} />
      <InterestRateChart data={interestRateData} />
    </div>
  );
};

export default CoinInterestRateChart;
