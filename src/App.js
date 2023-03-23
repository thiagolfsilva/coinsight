import React, { Component } from 'react';
import CoinMarginDropdown from "./components/CoinMarginDropdown";
import Table from "./components/Table";

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
      <div className="App">
      <header className="App-header">
        <h1>Kucoin Margin Coins</h1>
        <CoinMarginDropdown />
        <Table />
      </header>
      </div>
    );
  }
}

export default App;
