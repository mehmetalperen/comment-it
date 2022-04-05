/*global chrome*/
import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Greeting from "./pages/Greeting";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Comments from "./pages/Comments";

function App() {
  const [url, setUrl] = useState("");

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="App py-5">
          <Routes>
            <Route path={`/`} exact element={<Greeting />} />
            <Route path={`/singup`} element={<Signup />} />
            <Route path={`/singin`} element={<Login />} />
            <Route path={`comments`} element={<Comments />} />
          </Routes>
        </div>{" "}
      </AuthProvider>
    </Router>
  );
}

export default App;
