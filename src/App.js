/*global chrome*/
import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Greeting from "./pages/Greeting";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Comments from "./pages/Comments";
import firebase from "./firebase";
import { faL } from "@fortawesome/free-solid-svg-icons";
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ABLE TO ADD REVIEW TO THE FIREBASE DB BUT THE FIRST COMMENT IS SUBMITED TWICE. 
STILL NEED TO RENDER REAL DATA COMING FROM FIREBASE INSTEAD OF DUMMY. TOTAL REVIEW AND COMMENT COUNT DOESN'T WORK AS EXPECTED.
THE APP IS VERY INEFFICENT, RUNTIME VISE.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [dataID, setDataID] = useState("");
  const [reviews, setReviews] = useState();

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl("http://localhost:3000/"); //change this to setUrl(url)
      });

    setUrl("http://localhost:3000/"); //DELETE THIS. chrome extention version won't have this
  }, []);

  const createNewSite = () => {
    const websiteRef = firebase.database().ref("Websites");
    const newSite = websiteRef.push();
    newSite.set({
      websiteURL: url,
      reviews: [""],
    });

    setDataID(newSite.key);
  };

  const retriveData = () => {
    const websiteRef = firebase.database().ref("Websites");
    websiteRef.on("value", (snapshot) => {
      for (let key in snapshot.val()) {
        //big-o of n. need to optimize this.
        if (snapshot.val()[key].websiteURL === url) {
          setDataID(key);
        }
      }
    });

    setIsLoading(false);
  };

  useEffect(() => {
    if (url !== "") {
      const websitesRef = firebase.database().ref("Websites");
      websitesRef.on("value", (snapshot) => {
        if (!snapshot.val()) {
          createNewSite();
        }
      });
      retriveData();
    }
  }, [url]);

  return (
    <Router>
      <AuthProvider>
        <div className="App py-5">
          <Routes>
            <Route path={`/`} exact element={<Greeting />} />
            <Route path={`/singup`} element={<Signup />} />
            <Route path={`/singin`} element={<Login />} />
            <Route
              path={`comments`}
              element={
                isLoading ? <h1>Loading</h1> : <Comments dataID={dataID} />
              }
            />
          </Routes>
        </div>{" "}
      </AuthProvider>
    </Router>
  );
}

export default App;
