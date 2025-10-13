import { Activity, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [showActivityCount, setShowActivityCount] = useState(true);
  const [showCount, setShowCount] = useState(true);

  const toggleShowCount = () => {
    setShowCount(!showCount);
  };
  const toggleShowActivityCount = () => {
    setShowActivityCount(!showActivityCount);
  };

  return (
    <div className="container">
      <div className="counterBox">
        {showCount && <Counter />}
        <button className="toggleButton" onClick={toggleShowCount}>
          Toggle not Activity count
        </button>
      </div>

      <div className="counterBox">
        <Activity mode={showActivityCount ? "visible" : "hidden"}>
          <Counter />
        </Activity>
        <button className="toggleButton" onClick={toggleShowActivityCount}>
          Toggle Activity count
        </button>
      </div>
    </div>
  );
}

export default App;
