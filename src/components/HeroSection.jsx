import React from "react";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Connect. Create.{" "}
            <span className="hero-highlight">Collaborate.</span>
          </h1>
          <p className="hero-description">
            The ultimate platform where influencers meet brands, sparking
            authentic partnerships that drive real results and meaningful
            connections.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              ▶ Get Started
            </a>
            <a href="#" className="btn-secondary">
              Watch Demo →
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="video-container">
            <button className="play-button"></button>
            <div className="floating-elements">
              <div className="floating-element">📊</div>
              <div className="floating-element">👥</div>
              <div className="floating-element">📈</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
