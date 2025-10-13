import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <div className="activityDiv">Count is {count}</div>

        <button className="buttons" onClick={incrementCount}>
          Increment count
        </button>
      </div>
    </>
  );
};
