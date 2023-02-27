import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/exchange.scss';

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd')
      .then(response => {
        setExchangeRates(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="exchange-rates">
      <h2>Current Exchange Rates:</h2>
      <table>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>USD</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(exchangeRates).map((crypto, index) => (
            <tr key={index}>
              <td>{crypto}</td>
              <td>{exchangeRates[crypto].usd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRates;
