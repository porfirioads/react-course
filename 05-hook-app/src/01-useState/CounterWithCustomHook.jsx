import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>

      <button className="btn btn-outline-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-outline-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
