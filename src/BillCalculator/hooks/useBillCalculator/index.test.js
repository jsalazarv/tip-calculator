import { renderHook, act } from '@testing-library/react';
import { useBillCalculator } from './index.js';

describe('[ Hook - useBillCalculator ]', () => {
  test('Should return the calculated values', () => {
    const { result } = renderHook(() => useBillCalculator());

    act(() => {
      result.current.setBill(100);
      result.current.setTipAmount(10);
      result.current.setNumberOfPeople(2);
    });

    expect(result.current.tipAmountPerPerson).toBe(5);
    expect(result.current.totalPerPerson).toBe(55);
  });
});
