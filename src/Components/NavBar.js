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
    width: "98%", // ⭐ changed from 98% → 100% for full width
    zIndex: 999,
  };

  const navButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff", // ⭐ fixed color
    position: "relative",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minWidth: "150px",
    zIndex: 999,
  };

  const dropdownItemStyle = {
    padding: "10px",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    background: "none",
    border: "none",
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ height: "50px", width: "auto" }}
        />
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
          <button style={navButtonStyle}>StartUps</button>
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
          <button style={navButtonStyle}>BioNEST</button>
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
          <button style={navButtonStyle}>KTech</button>
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
          <button style={navButtonStyle}>Facilities</button>
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
