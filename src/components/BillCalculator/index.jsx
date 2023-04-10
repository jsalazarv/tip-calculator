import { useEffect, useRef, useState } from 'react';
import { useBillCalculator } from './hooks/useBillCalculator/index.js';
import { Display } from './components/Display';
import './styles.css';

export const BillCalculator = () => {
  const {
    bill,
    setBill,
    setTipAmount,
    numberOfPeople,
    setNumberOfPeople,
    tipAmountPerPerson,
    totalPerPerson,
  } = useBillCalculator();
  const [selectedTipButton, setSelectedTipButton] = useState(null);
  const customTipInputRef = useRef();

  const handleBill = (bill) => {
    if (bill.target.value.length === 0) {
      setBill(0);
    }

    setBill(bill.target.value);
  };

  const handleTipButtonClick = (tipPercent) => {
    setTipAmount(tipPercent);
    setSelectedTipButton(tipPercent);
    customTipInputRef.current.value = '';
  };

  const handleCustomTip = (customTip) => {
    if (customTip.target.value.length === 0) {
      setTipAmount(5);
      setSelectedTipButton(5);
    } else {
      setTipAmount(parseInt(customTip.target.value));
      setSelectedTipButton(customTip.target.value);
    }
  };

  const handleNumberOfPeople = (numberOfPeople) => {
    if (numberOfPeople.target.value.length === 0) {
      setNumberOfPeople(1);
    } else {
      setNumberOfPeople(numberOfPeople.target.value);
    }
  };

  const handleReset = () => {
    setBill(0);
    setTipAmount(5);
    setSelectedTipButton(5);
    setNumberOfPeople(1);
  };

  useEffect(() => {
    handleTipButtonClick(5);
  }, []);

  return (
    <div className="tip-calculator-card">
      <div className="tip-calculator-card-controls">
        <div>
          <label className="card-labels">Bill</label>
          <input
            className="input-of-calculator"
            type="number"
            value={bill}
            onChange={(event) => handleBill(event)}
          />
        </div>
        <div className="my-10">
          <label className="card-labels">Select Tip %</label>
          <div className="controls-group">
            <button
              className={`btn btn-dark ${selectedTipButton === 5 && 'active'}`}
              onClick={() => handleTipButtonClick(5)}>
              5%
            </button>
            <button
              className={`btn btn-dark ${selectedTipButton === 10 && 'active'}`}
              onClick={() => handleTipButtonClick(10)}>
              10%
            </button>
            <button
              className={`btn btn-dark ${selectedTipButton === 15 && 'active'}`}
              onClick={() => handleTipButtonClick(15)}>
              15%
            </button>
            <button
              className={`btn btn-dark ${selectedTipButton === 25 && 'active'}`}
              onClick={() => handleTipButtonClick(25)}>
              25%
            </button>
            <button
              className={`btn btn-dark ${selectedTipButton === 50 && 'active'}`}
              onClick={() => handleTipButtonClick(50)}>
              50%
            </button>

            <input
              className="input-of-calculator"
              ref={customTipInputRef}
              type="number"
              placeholder="Custom"
              onChange={(event) => handleCustomTip(event)}
            />
          </div>
        </div>
        <div>
          <label className="card-labels">Number Of People</label>
          <input
            className="input-of-calculator"
            type="number"
            min="1"
            value={numberOfPeople}
            onChange={(event) => handleNumberOfPeople(event)}
          />
        </div>
      </div>

      <Display
        tipAmountPerPerson={tipAmountPerPerson}
        totalPerPerson={totalPerPerson}
        handleReset={() => handleReset()}
      />
    </div>
  );
};
