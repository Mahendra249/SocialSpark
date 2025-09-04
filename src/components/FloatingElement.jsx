import React from "react";

const FloatingElement = ({ children, delay = 0 }) => (
  <div
    className="floating-element"
    style={{
      animation: `float 6s ease-in-out infinite ${delay}s`,
    }}
  >
    {children}
  </div>
);

export default FloatingElement;
