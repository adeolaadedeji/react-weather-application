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
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adeola Adedeji
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/adeolaadedeji/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://adorable-valkyrie-2c6c6e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
