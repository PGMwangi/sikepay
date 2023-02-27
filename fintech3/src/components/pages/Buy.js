import React, { useState } from 'react';
import '../styles/buy.scss';

const Buy = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // handle buy crypto logic here
  };

  return (
    <div className="buy">
      <form onSubmit={handleSubmit}>
        <h2 className="buy__title">Buy Crypto</h2>
        <div className="buy__form-group">
          <label htmlFor="amount" className="buy__label">
            Amount:
          </label>
          <div className="buy__input-group">
            <input
              id="amount"
              className="buy__input"
              type="number"
              step="0.0001"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="buy__input-symbol">BTC</span>
          </div>
        </div>
        <button className="buy__button" type="submit">
          Buy
        </button>
      </form>
    </div>
  );
};

export default Buy;