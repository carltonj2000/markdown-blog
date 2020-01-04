import React from "react";

import "./components.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p>&copy; carltonj2000 {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
