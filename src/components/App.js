import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app" style={{marginTop: "50px"}}>

        <Tooltip text={<h2>This is a tooltip</h2>}>
          <h1 className="hover-item">Hover over me</h1>
        </Tooltip>
        <Tooltip text={<p>This is a tooltip</p>}>
          <p className="hover-item">Hover over me to see another tooltip</p>
        </Tooltip>
    </div>
  );
};

export default App;
