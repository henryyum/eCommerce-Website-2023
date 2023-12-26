import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div>
        <h1>Newsletter</h1>
      </div>

      <div className="newsletter-input-wrapper">
        <input placeholder="Enter Email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
