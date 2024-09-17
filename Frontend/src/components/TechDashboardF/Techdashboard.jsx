import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Techdashboard.css";
export const Techdashboard = () => {
  const [currentSection, setCurrentSection] = useState("Dashboard");
  // Render different content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case "Dashboard":
        return (
          <>
            <div className="techdash-header">
              <div className="banner"></div>
              {/* <img src={UserProfile} id="user-profile"/> */}
              <i class="fa-solid fa-circle-user"></i>
              <h3>Charan</h3>
            </div>
            <h2 className="tech-heading">Ongoing Works</h2>
            <div className="tech-ongoing-works">
              
            </div>
          </>
        );
      case "Payment":
        return <div>Payment Content</div>;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <>
      <div className="tech-dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="logo">
            <i class="fa-solid fa-screwdriver-wrench"></i> LOCOS
          </h3>
          <ul>
            <li
              className={currentSection === "Dashboard" ? "active" : ""}
              onClick={() => setCurrentSection("Dashboard")}
            >
              <i class="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
            </li>
            <li
              className={currentSection === "Payment" ? "active" : ""}
              onClick={() => setCurrentSection("Payment")}
            >
              <i class="fa-solid fa-sack-dollar"></i> &nbsp; Payment
            </li>
            <Link to="/">
              <li>
                <i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
              </li>
            </Link>
          </ul>
        </div>
        {/* Main Content */}
        <div className="tech-main-content">{renderContent()}</div>
      </div>
    </>
  );
};
