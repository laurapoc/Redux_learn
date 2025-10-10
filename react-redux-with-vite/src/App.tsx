import { Activity, useState } from "react";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <Activity mode={isLoading ? "visible" : "hidden"}>
        <div>Loading...</div>
        <button onClick={toggleLoading}>Set to not loading</button>
      </Activity>
      <Activity mode={!isLoading ? "visible" : "hidden"}>
        <div>
          <h1>Hello World</h1>
        </div>

        <button onClick={toggleLoading}>Set to loading</button>
      </Activity>
    </>
  );
}

export default App;
