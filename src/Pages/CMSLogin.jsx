import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CMSLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin(); // update App.js state
      navigate("/admin/dashboard"); // redirect to dashboard
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #fff7e6, #ffe0b3)",
        fontFamily: "Garamond, serif",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#ffffff",
          padding: "40px 30px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          border: "3px solid #ff6600",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#ff6600",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "26px",
          }}
        >
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "10px",
              marginBottom: "15px",
              border: "2px solid #ff6600",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#cc5200")}
            onBlur={(e) => (e.target.style.borderColor = "#ff6600")}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "10px",
              marginBottom: "15px",
              border: "2px solid #ff6600",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#cc5200")}
            onBlur={(e) => (e.target.style.borderColor = "#ff6600")}
          />
          <br />
          <button
            type="submit"
            style={{
              background: "#ff6600",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#cc5200")}
            onMouseLeave={(e) => (e.target.style.background = "#ff6600")}
          >
            Login
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "15px", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default CMSLogin;
