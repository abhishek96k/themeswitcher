import React, { useState } from "react";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(i) {
    setToggle(i);
  }

  return (
    <div className="body">
      <div className="main-card">
        <div className="tab">
          <ul className="tab-list">
            <li className="flex-fill" onClick={() => updateToggle(1)}>
              Tab 1
            </li>
            <li className="flex-fill" onClick={() => updateToggle(2)}>
              Tab 2
            </li>
            <li className="flex-fill" onClick={() => updateToggle(3)}>
              Tab 3
            </li>
          </ul>
        </div>
      </div>
      <div className={toggle === 1 ? "show-content" : "content"}>
        <h1>Tab 1</h1>
      </div>
      <div className={toggle === 2 ? "show-content" : "content"}>
        <h1>Tab 2</h1>
      </div>
      <div className={toggle === 3 ? "show-content" : "content"}>
        <h1>Tab 3</h1>
      </div>
    </div>
  );
};

export default Tabs;
