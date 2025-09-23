import React, { useState } from "react";

const thrustAreasData = [
  { title: "Biopharma", img: "/images/Biopharma.jpg" },
  { title: "Biomedical Devices", img: "/images/Biomedical.jpg" },
  { title: "Dental Innovation", img: "/images/Dental Innovation.jpg" },
  { title: "Biotech", img: "/images/Biotechnology.jpg" },
  { title: "Diagnosis and Medical Healthcare", img: "/images/Healthcar.jpg" },
  { title: "Food Tech", img: "/images/FT.jpg" },
];

const supportedByData = [
  { img: "/images/KTech.png" },
  { img: "/images/MAHE.png" },
  { img: "/images/BiRAC.png" },
];

const scrollingPartnersData = [
  { img: "images/MUTBI.png" },
  { img: "images/DPIIT.jpeg" },
  { img: "images/Seed Funding.jpeg" },
  { img: "images/DST Nidhi.jpeg" },
  { img: "images/Startup Karnataka.png" },
  { img: "images/HDFC.jpg" },
];

const Homepage = () => {
  const containerStyle = {
    backgroundColor: "#f2f2f2ff",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Times New Roman, Serif",
    paddingTop: "120px", // ⭐ Added padding to push content below navbar
  };

  // ⭐ Styles
  const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 30px",
  backgroundColor: "#0b2c61",
  position: "fixed", // ⭐ makes it fixed
  top: 0,            // ⭐ stick to top
  left: 0,           // ⭐ start from left edge
  width: "98%",     // ⭐ full width
  zIndex: 999,       // ⭐ stay above other content
};


  const navButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#ffffffff",
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

  const headerStyle = {
    padding: "0px 10px",
    fontSize: "30px",
    borderRadius: "8px",
    marginBottom: "30px",
    marginTop: "2px",
    fontWeight: "bold",
    color: "#0b2c61",
    textAlign: "center",
  };

  const supportedByHeaderStyle = {
    ...headerStyle,
    marginTop: "60px",
    marginBottom: "30px",
  };

  const mainGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
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
    color: "#05445e",
    textAlign: "center",
  };

  const supportedByImageWrapperStyle = {
    width: "250px",
    height: "125px",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };

  const supportedByImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "white",
    transition: "transform 0.1s ease-in-out",
  };

  const scrollingContainerStyle = {
    overflow: "hidden",
    marginTop: "60px",
    marginBottom: "20px",
    width: "100%",
    background: "#f2f2f2ff",
  };

  const scrollingInnerStyle = {
    display: "flex",
    width: "max-content",
    animation: "scroll 20s linear infinite",
  };

  const scrollingImageWrapperStyle = {
    flex: "0 0 auto",
    margin: "0 20px",
    width: "200px",
    height: "100px",
  };

  const scrollingImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <>
      {/* ⭐ Navbar */}
<nav style={navbarStyle}>
      {/* Logo on the left */}
      <img
        src="/images/logo.png" // ⭐ replace with your logo path
        alt="Logo" // ⭐ add your description here
        style={{ height: "50px", width: "auto" }}
      />

      {/* Right side buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Home */}
        <button
          style={navButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
          onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
        >
          Home
        </button>

        {/* About */}
        <button
          style={navButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
          onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
        >
          About
        </button>

        {/* StartUps dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("StartUps")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={navButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
            onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
          >
            StartUps 
          </button>
          {openDropdown === "StartUps" && (
            <div style={dropdownMenuStyle}>
              <button style={dropdownItemStyle}>Incubated Startups</button>
              <button style={dropdownItemStyle}>Graduated Startups</button>
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
            style={navButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
            onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
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

        {/* Facilities dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown("Facilities")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            style={navButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
            onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
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
        <button
          style={navButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
          onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
        >
          Our Team
        </button>

        {/* Events */}
        <button
          style={navButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
          onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
        >
          Events
        </button>
      </div>
    </nav>

      <div style={containerStyle}>
        {/* Keyframes animation */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        {/* Thrust Areas */}
        <h2 style={headerStyle}>Thrust Areas</h2>
        <div style={mainGridStyle}>
          <div style={rowStyle}>
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
          <div style={rowStyle}>
            {thrustAreasData.slice(3, 6).map((item, index) => (
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

        <hr
          style={{
            border: "none",
            borderTop: "2px solid #0b2c61",
            margin: "50px auto",
            width: "80%",
          }}
        />

        {/* Supported By */}
        <h2 style={supportedByHeaderStyle}>With Support From</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          {supportedByData.map((item, index) => (
            <div
              key={index}
              style={supportedByImageWrapperStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.img}
                alt={`Partner ${index + 1}`}
                style={supportedByImgStyle}
              />
            </div>
          ))}
        </div>

        {/* Scrolling Partners */}
        <h2 style={supportedByHeaderStyle}>Our Patrons</h2>
        <div style={scrollingContainerStyle}>
          <div style={scrollingInnerStyle}>
            {scrollingPartnersData
              .concat(scrollingPartnersData)
              .map((item, index) => (
                <div key={index} style={scrollingImageWrapperStyle}>
                  <img
                    src={item.img}
                    alt={`Partner ${index + 1}`}
                    style={scrollingImgStyle}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

