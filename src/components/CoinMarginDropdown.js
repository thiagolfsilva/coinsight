import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinMarginDropdown = ({ onSelect }) => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");

  useEffect(() => {
    const fetchMarginCoins = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/kcs/margin/currencies"
        );
        const data = response.data;
        console.log(data);
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch margin coins:", error);
      }
    };

    fetchMarginCoins();
  }, []);

  const handleChange = (event) => {
    setSelectedCoin(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="coin-select">Select a coin:</label>
      <select id="coin-select" value={selectedCoin} onChange={handleChange}>
        <option value="">--Choose a coin--</option>
        {coins.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoinMarginDropdown;
