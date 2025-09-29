// Partners.jsx
import React, { useState } from "react";

const Partners = () => {
  const [activeTab, setActiveTab] = useState("academic");

  // Logos for each category (replace with your own images)
  const logos = {
    academic: ["/images/birac.png", "/images/ncl.png"],
    industry: ["/images/industry1.png", "/images/industry2.png"],
    government: ["/images/dst.png"],
  };

  const tabs = [
    { key: "academic", label: "ACADEMIC COLLABORATOR" },
    { key: "industry", label: "INDUSTRY PARTNERS" },
    { key: "government", label: "GOVERNMENT INITIATIVES" },
  ];

  const tabStyle = (key) => ({
    margin: "0 20px 0 0",
    padding: "10px 0",
    fontWeight: activeTab === key ? "bold" : "normal",
    color: activeTab === key ? "#FF5722" : "#000",
    cursor: "pointer",
    borderBottom: activeTab === key ? "2px solid #00BCD4" : "2px solid transparent",
  });

  const logoStyle = {
    margin: "20px",
    width: "150px",
    height: "auto",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#003366" }}>Partners</h2>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "30px" }}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            style={tabStyle(tab.key)}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Logos centered */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
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
