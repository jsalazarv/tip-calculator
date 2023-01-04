import { renderHook } from '@testing-library/react';
import { useBillCalculator } from './index.js';

describe('[ Hook - useBillCalculator ]', () => {
  test('Should return initial state', () => {
    const { result } = renderHook(() => useBillCalculator());
    const { bill, tipAmount, total, tipAmountPerPerson, totalPerPerson } =
      result.current;

    expect(bill).toBe(0);
    expect(tipAmount).toBe(0);
    expect(total).toBe(0);
    expect(tipAmountPerPerson).toBe(0);
    expect(totalPerPerson).toBe(0);
  });

  test('Should return the calculated values', () => {
    const { result } = renderHook(() =>
      useBillCalculator({
        selectedBill: 142.55,
        selectedTipPercentage: 15,
        selectedQuantityPeople: 5,
      }),
    );

    const { bill, tipAmount, total, tipAmountPerPerson, totalPerPerson } =
      result.current;

    expect(bill).toBe(142.55);
    expect(tipAmount).toBe(21.3825);
    expect(total).toBe(163.9325);
    expect(tipAmountPerPerson).toBe(4.2765);
    expect(totalPerPerson).toBe(32.786500000000004);
  });
});
