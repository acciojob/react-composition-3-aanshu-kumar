import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app" style={{marginTop: "50px"}}>

        <Tooltip text="This is a tooltip">
          <h1 className="hover-item">Hover over me</h1>
        </Tooltip>
        <Tooltip text="This is another tooltip">
          <p className="hover-item">Hover over me to see another tooltip</p>
        </Tooltip>
    </div>
  );
};

export default App;
