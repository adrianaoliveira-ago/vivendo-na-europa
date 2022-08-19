import { useState } from "react";

const CounterPage = () => {
  // state will be a number and the initial value will be zero
  const [counter, setCounter] = useState(0);

  function increseCounter() {
    const newCounter = counter + 1;

    setCounter(newCounter);
  }
  function resetCounter() {
    const newCounter = 0;
    setCounter(newCounter);
  }

  function decreaseCounter() {
    const newCount = counter - 1;
    setCounter(newCount);
  }
  return (
    <div>
      <button type="button" onClick={increseCounter}>
        Increase Counter
      </button>
      <button type="button" onClick={decreaseCounter}>
        Decrease Counter
      </button>
      <button type="button" onClick={resetCounter}>
        Reset Counter
      </button>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterPage;
