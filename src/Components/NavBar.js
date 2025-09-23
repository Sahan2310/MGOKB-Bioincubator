import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ⭐ Styles
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px",
    backgroundColor: "#0b2c61",
    position: "fixed",
    top: 0,
    left: 0,
    width: "96%", // full width
    zIndex: 999,
  };

  const navButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    position: "relative",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minWidth: "200px",
    zIndex: 999,
    borderRadius: "4px",
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    padding: "10px 15px",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    background: "none",
    border: "none",
    textDecoration: "none",
    color: "#0b2c61",
    display: "block",
  };

  const dropdownButtonStyle = {
    background: "#0b2c61",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    transition: "background 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = "#094081"; // hover color
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = "#0b2c61"; // default color
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" style={{ height: "50px", width: "auto" }} />
      </Link>

      {/* Right side buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Home */}
        <Link to="/" style={{ ...navButtonStyle, textDecoration: "none" }}>
          Home
        </Link>

        {/* About */}
        <Link to="/about" style={{ ...navButtonStyle, textDecoration: "none" }}>
          About
        </Link>

        {/* StartUps dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("StartUps")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={dropdownButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            StartUps 
          </button>
          {openDropdown === "StartUps" && (
            <div style={dropdownMenuStyle}>
              <Link to="/incubated" style={dropdownItemStyle}>
                Incubated Startups
              </Link>
              <Link to="/graduated" style={dropdownItemStyle}>
                Graduated Startups
              </Link>
            </div>
          )}
        </div>

        {/* BioNEST dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("BioNEST")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={dropdownButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            BioNEST 
          </button>
          {openDropdown === "BioNEST" && (
            <div style={dropdownMenuStyle}>
              <button style={dropdownItemStyle}>Item 1</button>
              <button style={dropdownItemStyle}>Item 2</button>
              <button style={dropdownItemStyle}>Item 3</button>
            </div>
          )}
        </div>

        {/* KTech dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("KTech")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={dropdownButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            KTech 
          </button>
          {openDropdown === "KTech" && (
            <div style={dropdownMenuStyle}>
              <button style={dropdownItemStyle}>Item 1</button>
              <button style={dropdownItemStyle}>Item 2</button>
              <button style={dropdownItemStyle}>Item 3</button>
            </div>
          )}
        </div>

        {/* Facilities dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("Facilities")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={dropdownButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Facilities 
          </button>
          {openDropdown === "Facilities" && (
            <div style={dropdownMenuStyle}>
              <button style={dropdownItemStyle}>Item 1</button>
              <button style={dropdownItemStyle}>Item 2</button>
              <button style={dropdownItemStyle}>Item 3</button>
            </div>
          )}
        </div>

        {/* Our Team */}
        <Link to="/team" style={{ ...navButtonStyle, textDecoration: "none" }}>
          Our Team
        </Link>

        {/* Events */}
        <Link to="/events" style={{ ...navButtonStyle, textDecoration: "none" }}>
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
