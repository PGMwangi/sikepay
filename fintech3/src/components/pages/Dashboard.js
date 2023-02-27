import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashboard.scss';

function Dashboard() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // make API call to retrieve crypto data
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        setCryptoData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Crypto Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map(crypto => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.price_usd}</td>
              <td>{crypto.market_cap_usd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

