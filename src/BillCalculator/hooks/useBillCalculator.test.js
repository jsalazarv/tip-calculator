import { renderHook } from '@testing-library/react';
import { useBillCalculator } from './useBillCalculator.js';

describe('[ Hook - useBillCalculator ]', () => {
  test('Should return initial state', () => {
    const { result } = renderHook(() => useBillCalculator());
    const { bill, tipAmount, total, tipAmountPerPerson, totalPerPerson } =
      result.current;

    expect(bill).toBe(0);
    expect(tipAmount).toBe(0);
    expect(total).toBe(0);
    expect(tipAmountPerPerson).toBe(0);
    expect(totalPerPerson).toBe(1);
  });
});
