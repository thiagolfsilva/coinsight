// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import CoinMarginDropdown from './components/CoinMarginDropdown';
import CoinInterestRateChart from './components/CoinInterestRateChart';
import Table from './components/Table';
import InterestRateChart from './components/InterestRateChart';

class App extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/interestrates">Interest Rates</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={
                <div>
                  <h1>Kucoin Margin Coins</h1>
                  <CoinMarginDropdown />
                  <Table />
                </div>
              } />
              <Route path="/interestrates" element={<CoinInterestRateChart />} />
            </Routes>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
