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

function App() {
  const [url, setUrl] = useState("http://localhost:3000/"); //DON'T FORGET TO CHANGE THIS T0 ''
  const [isLoading, setIsLoading] = useState(true);
  const [database, setDatabase] = useState();
  const [dataID, setDataID] = useState("");
  const [reviews, setReviews] = useState();
  const [isRetriveDataRun, setRetriveDataRun] = useState(false);

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  const retriveData = () => {
    const possibleID = url.replace(/[^a-z\d\s]+/gi, "");
    const ref = firebase.database().ref(`Websites/${possibleID}`);

    ref.once("value").then(function(snapshot) {
      if (snapshot.exists()) {
        setDataID(possibleID);
        setIsLoading(false);
      } else {
        setRetriveDataRun(true);
      }
    });
  };

  const pushWebsiteToDB = () => {
    const websiteRef = firebase.database().ref("Websites");
    const newSiteID = url.replace(/[^a-z\d\s]+/gi, "");
    websiteRef.child(newSiteID).set({
      websiteURL: url,
      reviews: [""], //firebase doens't let us create empty arrays, so there will always be an empty el in the array (the first element)
    });
    setDataID(newSiteID);
    setIsLoading(false);
  };

  useEffect(() => {
    if (url) {
      retriveData();
    }
  }, [url]);

  useEffect(() => {
    if (isLoading && isRetriveDataRun) {
      pushWebsiteToDB();
    }
  }, [isRetriveDataRun]);
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
