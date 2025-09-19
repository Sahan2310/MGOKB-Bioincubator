import React from "react";

const thrustAreasData = [
  { title: "Biopharma", img: "/images/Biopharma.jpg" },
  { title: "Biomedical Devices", img: "/images/Biomedical.jpg" },
  { title: "Dental Innovation", img: "/images/Dental Innovation.jpg" },
  { title: "Biotech", img: "/images/Biotechnology.jpg" },
  { title: "Diagnosis and Medical Healthcare", img: "/images/Healthcar.jpg" },
];

const Homepage = () => {
  const containerStyle = {
    backgroundColor: "#bbd4f9ff", 
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

 const headerStyle = {
    display: "inline-block",
    backgroundColor: "#3673f8ff",
    color: "white",
    padding: "10px 20px",
    fontSize: "20px",
    borderRadius: "8px",
    marginBottom: "40px",
  };

  const mainGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px", 
  };

  // Styles for the individual rows
  const topRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Gap between the cards
  };

  const bottomRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Gap between the cards
  };

  const cardStyle = {
    backgroundColor: "#3673f8ff",
    color: "white",
    width: "220px",
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, filter 0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    transition: "transform 0.3s, filter 0.3s",
  };

  const titleStyle = {
    padding: "10px",
    fontWeight: "bold",
    fontSize: "16px",
  };

return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>THRUST AREAS</h2>
      <div style={mainGridStyle}>
        {/* Top row with 3 images */}
        <div style={topRowStyle}>
          {thrustAreasData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.filter = "blur(2px)";
                img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.filter = "blur(0px)";
                img.style.transform = "scale(1)";
              }}
            >
              <img src={item.img} alt={item.title} style={imgStyle} />
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Bottom row with 2 images */}
        <div style={bottomRowStyle}>
          {thrustAreasData.slice(3, 5).map((item, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.filter = "blur(2px)";
                img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.filter = "blur(0px)";
                img.style.transform = "scale(1)";
              }}
            >
              <img src={item.img} alt={item.title} style={imgStyle} />
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
