
import React, { useState } from "react";
import "./App.css";

const LIMIT = 10;

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="container">
      <h1 className="title">Simple Counter App</h1>
      <div className="counter-box">
        <button className="btn" onClick={decrease} disabled={counter === 0}>
          Decrease
        </button>
        <span className="count">{counter}</span>
        <button className="btn" onClick={increase}>
          Increase
        </button>
      </div>
      {counter >= LIMIT && (
        <div className="limit-message">You have reached your limit.</div>

      )}
    </div>
  );
}
export default App;