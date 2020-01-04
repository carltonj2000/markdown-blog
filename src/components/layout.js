import React from "react";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./components.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
