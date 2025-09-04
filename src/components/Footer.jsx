import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = ({ sectionRefs }) => {
  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-section about">
          <h2 className="footer-logo">SocialSpark</h2>
          <p>
            Connecting creators with brands to spark authentic digital
            storytelling and impactful campaigns.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("influencers")}>
                Influencers
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("stats")}>Stats</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("cta")}>
                Get Started
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SocialSpark. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
