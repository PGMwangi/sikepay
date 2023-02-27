import React, { useState } from 'react';
import axios from 'axios';
import ExchangeRates from './ExchangeRates';
import Buy from './Buy';
import Sell from './Sell';
import '../styles/header.scss';

const Header = () => {
  const [showBuy, setShowBuy] = useState(false);
  const [showSell, setShowSell] = useState(false);

  const handleBuyClick = () => {
    setShowBuy(true);
    setShowSell(false);
  };

  const handleSellClick = () => {
    setShowSell(true);
    setShowBuy(false);
  };

  const handleBuySellClick = () => {
    axios
      .post('/api/buysell')
      .then(response => {
        // handle response from backend here
      })
      .catch(error => {
        // handle error here
      });
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Our Mission Statement Goes Here</h1>
        <ExchangeRates />
        <div className="header__actions">
          <button className="header__action-button" onClick={handleBuyClick}>
            Buy Crypto
          </button>
          <button className="header__action-button" onClick={handleSellClick}>
            Sell Crypto
          </button>
          <button className="header__payment-button" onClick={handleBuySellClick}>
            Make a Payment with Crypto
          </button>
        </div>
        {showBuy && <Buy />}
        {showSell && <Sell />}
      </div>
    </header>
  );
};

export default Header;



