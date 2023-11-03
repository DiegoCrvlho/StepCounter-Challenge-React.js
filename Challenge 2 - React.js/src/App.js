import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function countStepPlus() {
    setStep((s) => s + 1);
  }

  function countStepMinus() {
    setStep((s) => s - 1);
  }

  function countButtonPlus() {
    setCount((s) => s + step);
  }

  function countButtonMinus() {
    setCount((s) => s - step);
  }

  const date = new Date("November 3 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        <button onClick={countStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={countStepPlus}>+</button>
      </div>
      <div className="count">
        <button onClick={countButtonMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={countButtonPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
