import { Activity, useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { ImageList } from "./components/ImageList";

function App() {
  const [showActivityCount, setShowActivityCount] = useState(true);
  const [showCount, setShowCount] = useState(true);
  const [replaceActivity, setReplaceActivity] = useState(true);
  const [showImageList, setShowImageList] = useState(true);
  const [showActivityImageList, setShowActivityImageList] = useState(false);

  const toggleShowCount = () => {
    setShowCount(!showCount);
  };

  const toggleShowActivityCount = () => {
    setShowActivityCount(!showActivityCount);
  };

  const toggleChangeActivity = () => {
    setReplaceActivity(!replaceActivity);
  };

  const toggleShowImageList = () => {
    setShowImageList(!showImageList);
    setShowActivityImageList(false);
  };

  const toggleShowActivityImageList = () => {
    setShowActivityImageList(!showActivityImageList);
    setShowImageList(false);
  };

  return (
    <>
      <div className="container">
        <div className="flexContainer">
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

          <div className="counterBox">
            <Activity mode={replaceActivity ? "visible" : "hidden"}>
              <Counter />
            </Activity>
            <Activity mode={!replaceActivity ? "visible" : "hidden"}>
              <div className="activityDiv">Change activity content</div>
            </Activity>
            <button className="toggleButton" onClick={toggleChangeActivity}>
              Toggle replace Activity count
            </button>
          </div>

          <div className="counterBox">
            <div className="actionButtons">
              <button
                className="toggleButton2 toggleButton"
                onClick={toggleShowActivityImageList}
              >
                Toggle Activity Image List
              </button>
              <button className="toggleButton" onClick={toggleShowImageList}>
                Toggle Image List
              </button>
            </div>
          </div>
        </div>

        {showImageList && <ImageList />}

        {
          <Activity mode={showActivityImageList ? "visible" : "hidden"}>
            <ImageList />
          </Activity>
        }
      </div>
    </>
  );
}

export default App;
