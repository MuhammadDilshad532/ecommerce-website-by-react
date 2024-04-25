import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./Approutes";
const App = () => {
  return (
    <div className="main ">
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
