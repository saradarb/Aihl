import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Price.css";

function Price() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle side effects like body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="background-elements"></div>

      <nav>
        <Link className="nav-logo" to="/Aihl" style={{ textDecoration: 'none'}}>Veritas AI</Link>
        <div className="nav-links">
       
        </div>
        <button className="nav-contact" onClick={() => (window.location.href = "/contactus")}>Contact us</button>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {menuOpen && <div className="overlay active" onClick={toggleMenu}></div>}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <a href="/" onClick={toggleMenu}>Home</a>
        <a href="/features" onClick={toggleMenu}>Features</a>
        <a href="/pricing" onClick={toggleMenu}>Pricing</a>
      </div>

      <div className="container">
        <div className="content-feature">
          {[
            {
              title: "Free",
              price: "$0 USD/month",
              features: [
                "Access to Veritas AI and reasoning",
                "Standard voice mode",
                "Real-time data from the web with search",
                "Limited access to GPT-4o and o4-mini",
                "Limited access to file uploads, advanced data analysis, and image generation",
                "Use custom GPTs"
              ]
            },
            {
              title: "Plus",
              price: "$50 USD/month",
              features: [
                "Everything in Free",
                "Extended limits on messaging, file uploads, advanced data analysis, and image generation",
                "Standard and advanced voice mode",
                "Create and use tasks, projects.",
                "Unlimited access to the video generation",
                "Opportunities to test new features"
              ]
            },
            {
              title: "Pro",
              price: "$4000 USD/month",
              features: [
                "Everything in Plus",
                "Unlimited access to all reasoning models",
                "Unlimited access to advanced voice",
                "Extended access to deep research, which conducts multi-step online research for complex tasks",
                "Access to research previews and Operator"
              ]
            }
          ].map((plan, index) => (
            <div className="card" key={index}>
              <h1>{plan.title}</h1>
              <p>{plan.price}</p>
              <ul className="theListOrder">
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="buttons1">
                <button>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
