// Partners.jsx
import React, { useState } from "react";

// CSS styles at the top
const containerStyle = {
  textAlign: "center",
  fontFamily: "Garamond, serif",
  margin: "40px 40px",
};

const headingStyle = {
  textAlign: "center",
  backgroundColor: "#ff6600",
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: 30,
};

// For tabs
const tabsContainerStyle = {
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "30px",
};

const tabStyle = (isActive) => ({
  margin: "0 20px 0 0",
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "#ff6600" : "#000",
  cursor: "pointer",
  fontSize: "20px",
  fontFamily: "Garamond, serif",
  paddingBottom: "5px",
});

// For logos
const logosContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "30px",
};

const logoStyle = {
  margin: "20px",
  width: "150px",
  height: "auto",
  transition: "transform 0.3s ease",
};

// Component
const Partners = () => {
  const [activeTab, setActiveTab] = useState("academic");

  // Logos for each category
  const logos = {
    academic: ["/images/birac.png", "/images/ncl.png"],
    industry: ["/images/industry1.png", "/images/industry2.png"],
    government: ["/images/dst.png"],
  };

  const tabs = [
    { key: "academic", label: "Academic Collaborator" },
    { key: "industry", label: "Industry Partners" },
    { key: "government", label: "Government Initiatives" },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Partners</h2>

      {/* Tabs */}
      <div style={tabsContainerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            style={tabStyle(activeTab === tab.key)}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Logos */}
      <div style={logosContainerStyle}>
        {logos[activeTab].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={activeTab}
            style={logoStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
