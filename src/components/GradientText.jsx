import React from "react";

const GradientText = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

export default GradientText;
