import React, { useState } from 'react';
import './ProfitCalculator.css';

function ProfitCalculator() {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [rent, setRent] = useState(0);
  const [electricityBill, setElectricityBill] = useState(0);
  const [workersPayment, setWorkersPayment] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  const [profit, setProfit] = useState(0);

  const calculateProfit = () => {
    const totalExpenses = rent + electricityBill + workersPayment + otherExpenses;
    const calculatedProfit = totalEarnings - totalExpenses;
    setProfit(calculatedProfit);
  };

  return (
    <div className="container">
      <h1>Profit Calculator</h1>
      <div className="input-container">
        <label>Total Earnings:</label>
        <br />
        <input
          type="number"
          value={totalEarnings}
          onChange={(e) => setTotalEarnings(parseFloat(e.target.value))}
          className="styled-input"
        />
      </div>
      <div className="input-container">
        <label>Rent of Shop:</label>
        <br />
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(parseFloat(e.target.value))}
          className="styled-input"
        />
      </div>
      <div className="input-container">
        <label>Electricity Bill:</label>
        <br />
        <input
          type="number"
          value={electricityBill}
          onChange={(e) => setElectricityBill(parseFloat(e.target.value))}
          className="styled-input"
        />
      </div>
      <div className="input-container">
        <label>Total Workers Payment:</label>
        <br />
        <input
          type="number"
          value={workersPayment}
          onChange={(e) => setWorkersPayment(parseFloat(e.target.value))}
          className="styled-input"
        />
      </div>
      <div className="input-container">
        <label>Other Expenses:</label>
        <br />
        <input
          type="number"
          value={otherExpenses}
          onChange={(e) => setOtherExpenses(parseFloat(e.target.value))}
          className="styled-input"
        />
      </div>
      <button onClick={calculateProfit} className="calculate-button">
        Calculate Profit
      </button>
      <div className="result-container">
        <h2>Profit: {profit}</h2>
      </div>
    </div>
  );
}

export default ProfitCalculator;
