import React from "react";
import { useNavigate } from "react-router-dom";

const CMSDashboard = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "10px",
    border: "3px solid #ff6600",
    backgroundColor: "#ff6600",
    color: "white",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#cc5200";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#ff6600";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff7e6, #ffe0b3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Garamond, serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "50px 60px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          border: "3px solid #ff6600",
          textAlign: "center",
          width: "500px",
        }}
      >
        <h1
          style={{
            marginBottom: "1rem",
            color: "#ff6600",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            marginBottom: "2rem",
            fontSize: "18px",
            color: "#444",
          }}
        >
          Welcome! Click a button below to manage content.
        </p>

        <div>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/thrust-area")}
          >
            Trust Area
          </button>

          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </button>

          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/admin/edit-events")}
          >
            Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;
