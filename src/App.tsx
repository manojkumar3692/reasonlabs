import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Square from "./pages/Square";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/square" element={<Square />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
