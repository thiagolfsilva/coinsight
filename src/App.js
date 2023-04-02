// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import CoinMarginDropdown from './components/CoinMarginDropdown';
import CoinInterestRateChart from './components/CoinInterestRateChart';
import Table from './components/Table';
import InterestRateChart from './components/InterestRateChart';
import CustomNavbar from './components/CustomNavbar';
import RateConverter from './components/tools/RateConverter';
import LeverageRatio from './components/tools/LeverageRatio';
import TelegramBotPage from './components/TelegramBotPage';

class App extends Component {
  state = {
    data: {}
  }

  render() {
    const { data } = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <CustomNavbar />
            <Routes>
              <Route path="/" element={
                <div>
                  <h1>Kucoin Lending Rates</h1>
                  <Table />
                </div>
              } />
              <Route path="/interestrates" element={<CoinInterestRateChart />} />
              <Route path="/telegram" element={<TelegramBotPage />} />
              <Route path="/tools/rateconverter" element={<RateConverter />} />
              <Route path="/tools/leverageratio" element={<LeverageRatio />} />
            </Routes>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
