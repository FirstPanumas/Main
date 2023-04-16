 
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FromCompo } from "./components/FromCompo";
function App() {
  const facthData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}`)
      .then((response) => {
        console.log(response.data);
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
      <FromCompo/>
    </div>
  );
}

export default App;
