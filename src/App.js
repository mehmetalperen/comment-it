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
  const [url, setUrl] = useState("");
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
    const websiteRef = firebase.database().ref("Websites");

    websiteRef.on("value", (snapshot) => {
      for (let key in snapshot.val()) {
        //big-o of n. need to optimize this.
        if (snapshot.val()[key].websiteURL === url) {
          setDataID(key);
          setIsLoading(false);

          break;
        }
      }
      setRetriveDataRun(true);
    });
  };

  const pushWebsiteToDB = () => {
    const websiteRef = firebase.database().ref("Websites");
    const newSite = websiteRef.push();
    newSite.set({
      websiteURL: url,
      reviews: [""],
    });
    setDataID(newSite.key);
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
