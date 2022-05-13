import Greeter from "./components/Greeter";
import React, { useState, useEffect } from "react";

const App = () => {

  const [email, setEmail] = useState("");

  const [loaded, setLoaded] = useState(false);

  const handleButtonClick = () => {
          setLoaded(true);
  }

  useEffect(() => {
      if(loaded === false) {
          setTimeout(() => {
              setLoaded(true);
          }, 3000);
      }}, [loaded]);

  
  if(loaded === false) {
      return(
        <>
            <h1>Website loading...</h1>
            <button className="btn btn-dark" onClick={handleButtonClick}>Load the Page</button>
        </>
      );
  };
    
        


  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="col-md-6 bg-white shadow-lg" id="header">Hello there!</h1>
      </div>

      <div className="row justify-content-center">
        <img src={require("../src/gif1.gif")} className="col-md-6" />

        <Greeter name="General Kenobi!"></Greeter>
        <Greeter phrase="You are a bold one."></Greeter>

        <img src={require("../src/gif2.gif")} className="col-md-6" />

        <Greeter name="Anakin" phrase=", you were the chosen one!" />
        <Greeter name="Anakin" phrase="doesn't like sand." />
        <Greeter phrase="...or younglings..." />
      </div>

      <div className="row justify-content-center">
        <input
          className="col-md-4 my-3"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="col-md-4 my-3">You are logging in as {email}</p>
      </div>
    </div>
  );
};

export default App;
