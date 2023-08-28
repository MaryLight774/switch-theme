import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="App-header">
        <h1>Dark/Light Mode Switch</h1>
        <label className="switch">
          <input type="checkbox" onChange={toggleMode} />
          <span className="slider round"></span>
        </label>
      </header>
    </div>
  );
}

export default App;
