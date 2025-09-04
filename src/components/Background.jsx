import React, { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    const bgElements = document.getElementById("bgElements");
    for (let i = 0; i < 50; i++) {
      const element = document.createElement("div");
      element.className = "bg-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.top = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 3 + "s";
      bgElements.appendChild(element);
    }
  }, []);

  return <div className="bg-elements" id="bgElements"></div>;
};

export default Background;
