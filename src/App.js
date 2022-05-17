import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was created by{" "}
          <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
            Adeola Adedeji
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/adeolaadedeji/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
