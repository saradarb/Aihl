import React from 'react';

function HeroSection() {
  return (
    <div className="container">
      <div className="content">
        <h1>Smarter Solutions Start Here</h1>
        <p>
          Meet Veritas, our AI-powered services that automate, optimize, 
          and elevate digital experiences. Want to know more about what else Veritas can do?
          Ask us, and we will answer all your questions.
        </p>
        <div className="buttons">
          <button onClick={() => window.location.href='/Aihl/chat'}>Get Started</button>
          <button onClick={() => window.location.href='/Aihl/price'}>Learn More</button>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/"><i className="fab fa-github"></i></a>
        </div>
      </div>

      <div className="bg-main-container">
        <div className="bg-main">
          <spline-viewer url="https://prod.spline.design/BoWg-dch2T9e59sl/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
