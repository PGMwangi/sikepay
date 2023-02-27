import React, { useState } from 'react';
import '../styles/sell.scss';

const Sell = ({ handleSellClick }) => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSellClick(amount);
    setAmount('');
  };

  return (
    <div className="sell">
      <form onSubmit={handleSubmit}>
        <h2 className="sell__title">Sell Crypto</h2>
        <div className="sell__form-group">
          <label htmlFor="amount" className="sell__label">
            Amount:
          </label>
          <div className="sell__input-group">
            <input
              id="amount"
              className="sell__input"
              type="number"
              step="0.0001"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="sell__input-symbol">BTC</span>
          </div>
        </div>
        <button className="sell__button" type="submit">
          Sell
        </button>
      </form>
    </div>
  );
};

export default Sell;

