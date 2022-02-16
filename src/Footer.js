import React from "react";
import "./style/Footer.css";

export default function Footer() {
  return (
    <span className="footer">
      <a
        href="https://github.com/ZoeyLewis/weather-react-app"
        target="_blank"
        rel="noreferrer"
        className="openSourceFooter"
      >
        Open-source code
      </a>
      , by Zoey Lewis
    </span>
  );
}
