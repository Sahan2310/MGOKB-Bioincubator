// src/Pages/Incubated.jsx

import React, { useState } from "react";

// --------------- Startup Data ----------------
const incubatedStartups = [
  {
    title: "Startup 1 Name",
    img: "/images/I-Logo1.png",
    description:
      "Brief description about Startup 1. Highlight its main product/service or unique value proposition.",
    website: "https://example.com",
  },
  {
    title: "Startup 2 Name",
    img: "/images/I-Logo2.png",
    description:
      "Brief description about Startup 2. Highlight its main product/service or unique value proposition.",
    website: "",
  },
  {
    title: "Startup 3 Name",
    img: "/images/I-Logo3.png",
    description:
      "Brief description about Startup 3. Highlight its main product/service or unique value proposition.",
    website: "",
  },
  {
    title: "Startup 4 Name",
    img: "/images/I-Logo4.png",
    description:
      "Brief description about Startup 4. Highlight its main product/service or unique value proposition.",
    website: "",
  },
  {
    title: "Startup 5 Name",
    img: "/images/I-Logo5.png",
    description:
      "Brief description about Startup 5. Highlight its main product/service or unique value proposition.",
    website: "",
  },
  // Add more incubated startups as needed...
];

// --------------- Component ----------------
function Incubated() {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 more on each click
  };

  return (
    <div style={{ padding: "8rem 2rem 2rem 2rem", backgroundColor: "#f0f8ff" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#0b2c61",
        }}
      >
        Incubated Startups
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {incubatedStartups.slice(0, visibleCount).map((startup, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1rem",
              textAlign: "center",
              color: "#0b2c61",
            }}
          >
            <button
              onClick={() =>
                startup.website && window.open(startup.website, "_blank")
              }
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <img
                src={startup.img}
                alt={startup.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </button>
            <h3>{startup.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#0b2c61" }}>
              {startup.description}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < incubatedStartups.length && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#0b2c61",
              color: "#fff",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Incubated;
