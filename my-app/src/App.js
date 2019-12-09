import './App.css';
import React, { Component, createRef } from "react";
import { drawGraph } from "./createGraph";
import { Graph } from "./graph-component";

function App() {
  const graphData = drawGraph();

  return (
    <div className="App">
      <Graph graphData={graphData}/>
    </div>
  );
}

export default App;
