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
    fontFamily: "Times New Roman, Serif",
  };

  const headerStyle = {
    padding: "10px 20px",
    fontSize: "30px",
    borderRadius: "8px",
    marginBottom: "40px",
    marginTop: "10px",
    fontWeight: "bold",
    color: "#0b2c61", // dark blue text
    textAlign: "center",
  };

  const mainGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  };

  // Styles for the individual rows
  const topRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  };

  const bottomRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  };

  const cardWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "220px",
  };

  const cardStyle = {
    backgroundColor: "#3673f8ff",
    width: "150px",
    height: "150px",
    cursor: "pointer",
    borderRadius: "50%", // make circle
    overflow: "hidden", // keep image inside the circle
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, filter 0.3s",
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
    fontSize: "16px",
    color: "#0b2c61", // dark blue text
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>THRUST AREAS</h2>
      <div style={mainGridStyle}>
        {/* Top row with 3 images */}
        <div style={topRowStyle}>
          {thrustAreasData.slice(0, 3).map((item, index) => (
            <div key={index} style={cardWrapperStyle}>
              <div
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
              </div>
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Bottom row with 2 images */}
        <div style={bottomRowStyle}>
          {thrustAreasData.slice(3, 5).map((item, index) => (
            <div key={index} style={cardWrapperStyle}>
              <div
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
              </div>
              <div style={titleStyle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
