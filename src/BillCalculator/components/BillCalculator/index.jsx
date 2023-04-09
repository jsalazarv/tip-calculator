import { useState } from 'react';
import { useBillCalculator } from '../../hooks/useBillCalculator/index.js';
import './styles.css';

export const BillCalculator = () => {
  const {
    setBill,
    setTipAmount,
    setNumberOfPeople,
    tipAmountPerPerson,
    totalPerPerson,
  } = useBillCalculator();
  const [numberOfPeopleInputValue, setNumberOfPeopleInputValue] = useState(1);

  const handleNumberOfPeopleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue > 0) {
      setNumberOfPeopleInputValue(newValue);
      setNumberOfPeople(newValue);
    } else {
      setNumberOfPeopleInputValue(1);
      setNumberOfPeople(1);
    }
  };

  return (
    <div className="tip-calculator-card">
      <div className="tip-calculator-card-controls">
        <div>
          <label className="card-labels">Bill</label>
          <input
            className="input-of-calculator"
            type="number"
            onChange={(event) => setBill(parseInt(event.target.value))}
          />
        </div>
        <div className="my-10">
          <label className="card-labels">Select Tip %</label>
          <div className="controls-group">
            <button className="btn btn-dark">5%</button>
            <button className="btn btn-dark">10%</button>
            <button className="btn btn-dark">15%</button>
            <button className="btn btn-dark">25%</button>
            <button className="btn btn-dark">50%</button>

            <input
              className="input-of-calculator"
              type="number"
              placeholder="Custom"
              onChange={(event) => setTipAmount(parseInt(event.target.value))}
            />
          </div>
        </div>
        <div>
          <label className="card-labels">Number Of People</label>
          <input
            className="input-of-calculator"
            type="number"
            value={numberOfPeopleInputValue}
            onChange={handleNumberOfPeopleInputChange}
          />
        </div>
      </div>

      <div className="tip-calculator-display flex flex-col justify-between">
        <div>
          <div>{tipAmountPerPerson}</div>
          <br />
          <div>{totalPerPerson}</div>
        </div>
        <button className="btn btn-default">RESET</button>
      </div>
    </div>
  );
};
