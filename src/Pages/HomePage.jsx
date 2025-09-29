import React, { useState, useEffect } from "react";
import WhyUs from "./whyus";
import Gallery from "./Gallery";  
import Footer from "./Footer";
import Aim from './Aim';
import Impact from "./Impact";
import Testimonial from "./Testimonial";
import ThurstAreas from "./ThrustAreas";
import Partners from "./Partners";


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

const Counter = ({ endValue, duration, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const increment = Math.ceil((endValue / duration) * progress);
      setCount(Math.min(increment, endValue));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return <span>{count}{text}</span>;
};

const Homepage = () => {
  const containerStyle = {
    backgroundColor: "#f2f2f2ff",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Times New Roman, Serif",
    paddingTop: "120px",
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
    marginBottom: "100px",
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
        <Aim/>
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <WhyUs />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <Impact />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <ThurstAreas/>
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <Gallery />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <Partners />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />

        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;