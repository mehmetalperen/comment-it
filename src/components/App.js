import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Greeting from "../pages/Greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Greeting />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="/singin" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
