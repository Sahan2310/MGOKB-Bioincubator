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

const testimonialsData = [
  {
    name: "John Doe",
    image: "/images/customer1.jpg", // replace with your image path
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/images/customer2.jpg",
    review: "Great service! Highly recommend to everyone looking for quality.",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    image: "/images/customer3.jpg",
    review: "Amazing experience with this company. Very satisfied.",
    rating: 5,
  },
  // ⭐ Add more testimonials here
];

const Homepage = () => {
  const containerStyle = {
    backgroundColor: "#f2f2f2ff",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Times New Roman, Serif",
    paddingTop: "120px", // ⭐ Added padding to push content below navbar
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
    color: "#0b2c61",
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
                    const card = e.currentTarget;
                    card.style.border = "5px solid #0b2c61";
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.border = "5px solid transparent";
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
                    const card = e.currentTarget;
                    card.style.border = "5px solid #0b2c61";
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.border = "5px solid transparent";
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
        <div style={styles.container}>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.imageContainer}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={styles.image}
            />
          </div>
          <h3 style={styles.name}>{testimonial.name}</h3>
          <div style={styles.stars}>
            {"⭐".repeat(testimonial.rating)}
          </div>
          <p style={styles.review}>{testimonial.review}</p>
        </div>
      ))}
    </div>
      </div>
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    padding: "40px",
    backgroundColor: "#0b2c61",
  },
  card: {
    backgroundColor: "#fff",
    padding: "10px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  imageContainer: {
    width: "100px",
    height: "100px",
    margin: "0 auto",
    marginBottom: "10px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid orange",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    margin: "10px 0 5px",
    fontWeight: "bold",
  },
  stars: {
    color: "orange",
    marginBottom: "10px",
  },
  review: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Homepage;
