import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Greeting from "../pages/Greeting";
function App() {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
