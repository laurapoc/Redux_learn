import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <div className="activityDiv">Count is {count}</div>
        <div className="actionButtons">
          <button className="buttons" onClick={incrementCount}>
            Increment count
          </button>
          <button className="buttons" onClick={resetCount}>
            Reset count
          </button>
        </div>
      </div>
    </>
  );
};
