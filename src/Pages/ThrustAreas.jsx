import React from "react";

// Example data for Thrust Areas
const thrustAreasData = [
  { title: "Biopharma", img: "/images/Biopharma.jpg" },
  { title: "Biomedical Devices", img: "/images/Biomedical.jpg" },
  { title: "Dental Innovation", img: "/images/Dental Innovation.jpg" },
  { title: "Biotech", img: "/images/Biotechnology.jpg" },
  { title: "Diagnosis and Medical Healthcare", img: "/images/Healthcar.jpg" },
  { title: "Food Tech", img: "/images/FT.jpg" },
];
const ThrustAreas = () => {
  // Inline styles
  const containerStyle = {
    backgroundColor: "#f2f2f2ff",
    textAlign: "center",
    fontFamily: "Garamond, serif",
  };

  const headerStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#ffffffff",
    textAlign: "center",
    backgroundColor: "#F54927",
    display: "inline-block",
    padding: "10px 20px",
    borderRadius: "8px",
  };

  const mainGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
  };

  const cardWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "220px",
  };

  const cardStyle = {
    backgroundColor: "#ffffffff",
    width: "150px",
    height: "150px",
    cursor: "pointer",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, filter 0.3s, border 0.3s",
    border: "5px solid transparent",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s, filter 0.3s",
  };

  const titleStyle = {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#000000ff",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Thrust Areas</h2>
      <div style={mainGridStyle}>
        {/* First row */}
        <div style={rowStyle}>
          {thrustAreasData.slice(0, 3).map((item, index) => (
            <div key={index} style={cardWrapperStyle}>
              <div
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.border = "5px solid #F54927")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.border = "5px solid transparent")
                }
              >
                <img src={item.img} alt={item.title} style={imgStyle} />
              </div>
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div style={rowStyle}>
          {thrustAreasData.slice(3, 6).map((item, index) => (
            <div key={index} style={cardWrapperStyle}>
              <div
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.border = "5px solid #F54927")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.border = "5px solid transparent")
                }
              >
                <img src={item.img} alt={item.title} style={imgStyle} />
              </div>
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThrustAreas;
