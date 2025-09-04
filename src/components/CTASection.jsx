import React, { useState, useEffect } from "react";


const CTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.querySelector(".cta-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = document.querySelector(".cta-section");
    section?.addEventListener("mousemove", handleMouseMove);

    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={`cta-section min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="orb orb-left"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px)`,
          }}
        />
        <div
          className="orb orb-right"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${
              -mousePosition.y * 0.03
            }px)`,
          }}
        />

        {/* Grid Pattern */}
        <div className={`grid-pattern ${isHovered ? "hovered" : ""}`}></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="overflow-hidden mb-8">
          <h2 className="cta-heading animate-slideUp">
            Ready to{" "}
            <span className="cta-gradient animate-gradient-x">Spark</span>
            <br />
            Your Next{" "}
            <span className="relative">
              Campaign
              <div className="underline animate-expandLine" />
            </span>
            <span className="inline-block ml-4 text-6xl animate-bounce delay-2000">
              ?
            </span>
          </h2>
        </div>

        <div className="overflow-hidden mb-12">
          <p className="cta-subtitle animate-fadeInUp delay-500">
            Join SocialSpark today and connect with thousands of{" "}
            <span className="text-white font-medium">influencers</span> and{" "}
            <span className="text-white font-medium">brands</span>.
            <br />
            <span className="text-gray-400 text-lg">
              Start your journey to digital success.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons animate-fadeInUp delay-1000">
          <a href="#" className="btn-primary">
            <span className="relative z-10 flex items-center">
              Get Started
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="btn-overlay" />
          </a>

          <a href="#" className="btn-secondary">
            <span className="relative z-10 flex items-center">
              Contact Us
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
            <div className="btn-bg" />
            <div className="btn-hover" />
          </a>
        </div>

        {/* Bottom info */}
        <div className="bottom-info animate-fadeInUp delay-1500">
          <div className="info-item">
            <div className="dot animate-ping" />
            <span>Trusted by 50K+ creators</span>
          </div>
          <div className="info-item">
            <div className="dot animate-ping delay-500" />
            <span>1M+ campaigns launched</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
