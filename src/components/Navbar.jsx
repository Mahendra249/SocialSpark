import React, { useEffect, useState } from "react";

const Navbar = ({ sectionRefs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? "rgba(0, 0, 0, 0.98)" : "rgba(0, 0, 0, 0.95)",
      }}
    >
      <div className="nav-container">
        {/* Logo */}
        <button className="logo" onClick={() => scrollToSection("home")}>
          <div className="logo-icon"></div>
          SocialSpark
        </button>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("influencers")}
              className="nav-link"
            >
              Influencers
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("stats")}
              className="nav-link"
            >
              Stats
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("cta")} className="nav-link">
              Get Started
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="nav-link"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
