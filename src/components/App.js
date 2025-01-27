import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app" style={{marginTop: "100px"}}>

        <Tooltip text={<h2><div>This is a tooltip</div></h2>}>
          <h1 className="hover-item">Hover over me</h1>
        </Tooltip>
        <Tooltip text={<p><div>This is another tooltip</div></p>}>
          <p className="hover-item">Hover over me to see another tooltip</p>
        </Tooltip>
    </div>
  );
};

export default App;
