import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import React, {useState, useEffect} from "react";

function App() {
  const facthData = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_API}/get_user`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("test");
    facthData();
    // console.log(process.env.REACT_APP_SERVER_API);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to
          reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
