import { useEffect, useState } from 'react';

export const useBillCalculator = ({
  selectedBill = 0,
  selectedTipPercentage = 0,
  selectedQuantityPeople = 1,
} = {}) => {
  const [bill, setBill] = useState(selectedBill);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(1);

  return { bill, tipAmount, total, tipAmountPerPerson, totalPerPerson };
};
