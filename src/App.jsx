/* eslint-disable no-unused-vars */
import React from "react";
import { Component } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [xoffset, setXoffset] = useState(0);
  const [yoffset, setYoffset] = useState(0);
  const [change, setChange] = useState(50);

  const moveTileUp = () => {
    if (yoffset === 0) {
      return;
    }
    setYoffset(yoffset - change);
  };

  const moveTileDown = () => {
    if (yoffset >= 600) {
      return;
    }
    setYoffset(yoffset + change);
  };

  const moveTileLeft = () => {
    if (xoffset === 0) {
      return;
    }
    setXoffset(xoffset - change);
  };

  const moveTileRight = () => {
    if (xoffset >= 850) {
      return;
    }
    setXoffset(xoffset + change);
  };

  return (
    <div>
      <button onClick={moveTileUp} className="jump-button" id="up">
        Up
      </button>
      <div className="container">
        <button onClick={moveTileLeft} className="side-button" id="left">Left</button>
        <div className="area">
          <div
            className="tile"
            style={{
              transform: `translate(${xoffset}px, ${yoffset}px)`,
            }}
          >
          </div>
        </div>
        <button onClick={moveTileRight} className="side-button" id="right">Right</button>
      </div>
      <button onClick={moveTileDown} className="jump-button" id="down">Down</button>
    </div>
  );
}

export default App;
