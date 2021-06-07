import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// react-router-dom 은 해당 링크로 이동하고,
// props 를 전달할 수 있다.
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
