import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react';

describe('Pruebas en el useCounter', () => {
  test('Debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Debe generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('Debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    // Tomamos el counter desde result porque es un valor primitivo.
    expect(result.current.counter).toBe(101);
  });

  test('Debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });

  test('Debe realizar el reset del el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, increment, reset } = result.current;

    act(() => {
      decrement();
      increment(100)
      reset()
    });

    expect(result.current.counter).toBe(100);
  });
});
