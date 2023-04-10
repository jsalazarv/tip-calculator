import { useEffect, useState } from 'react';

export const useBillCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const calculateBill = () => {
    const tipAmountPerPersonCalculated =
      (bill * tipAmount) / 100 / numberOfPeople;
    const totalPerPersonCalculated =
      bill / numberOfPeople + tipAmountPerPersonCalculated;

    setTipAmountPerPerson(tipAmountPerPersonCalculated);
    setTotalPerPerson(totalPerPersonCalculated);
  };

  useEffect(() => {
    calculateBill();
  }, [bill, tipAmount, numberOfPeople]);

  return {
    bill,
    setBill,
    tipAmount,
    setTipAmount,
    numberOfPeople,
    setNumberOfPeople,
    tipAmountPerPerson,
    setTipAmountPerPerson,
    totalPerPerson,
    setTotalPerPerson,
  };
};
