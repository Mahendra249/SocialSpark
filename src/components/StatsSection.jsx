import React, { useState, useEffect, useRef } from "react";

const stats = [
  { number: "50K+", label: "Active Influencers", icon: "👥" },
  { number: "10K+", label: "Brands Connected", icon: "🏢" },
  { number: "1M+", label: "Campaigns Run", icon: "📊" },
  { number: "95%", label: "Satisfaction Rate", icon: "✅" },
];

const CountingNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericPart = parseInt(target.replace(/[^0-9]/g, ""));
    const increment = numericPart / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  const suffix = target.replace(/[0-9]/g, "");
  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      {/* Background geometric patterns */}
      <div className="background-patterns">
        <div className="pattern square"></div>
        <div className="pattern circle"></div>
        <div className="pattern small-square"></div>
        <div className="pattern border-box"></div>
      </div>

      <div className="stats-container">
        {/* Section Header */}
        <div className="stats-header">
          <div className="header-line"></div>
          <h2>Our Impact</h2>
          <p>
            Transforming digital marketing through meaningful connections and
            data-driven results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className={`stat-card fadeInUp delay-${index}`}>
              <div className="stat-icon">{item.icon}</div>
              <h3>
                <CountingNumber target={item.number} />
              </h3>
              <p>{item.label}</p>
              <div className="decor-line"></div>
              <div className="corner"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="bottom-decor">
          <div className="shape diamond"></div>
          <div className="shape circle"></div>
          <div className="shape square"></div>
          <div className="shape circle"></div>
          <div className="shape diamond"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
