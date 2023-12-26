import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <div className="Footer-left">
        <Link onClick={scrollToTop} to="/">
          About
        </Link>
        <Link onClick={scrollToTop} to="/">
          Store locator
        </Link>
        <Link onClick={scrollToTop} to="/">
          FAQs
        </Link>
        <Link onClick={scrollToTop} to="/">
          News
        </Link>
        <Link onClick={scrollToTop} to="/">
          Careers
        </Link>
        <Link onClick={scrollToTop} to="/">
          Contact Us
        </Link>
      </div>

      <div className="Footer-right">
        <h4>Made by Henry Yum</h4>
        <p>
          Design by{" "}
          <a href="https://github.com/Abderraouf-Rahmani">Abderraouf</a>
        </p>
      </div>
    </div>
  );
}
