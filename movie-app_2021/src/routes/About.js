import React from "react";
import "./About.css";

// react-router-dom 에 의해서 받은 props들
// history
// location
// match
// staticContext
function About() {
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}

export default About;
