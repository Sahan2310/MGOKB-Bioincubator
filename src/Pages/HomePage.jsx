import React, { useState, useEffect } from "react";
import WhyUs from "./whyus";
import Gallery from "./Gallery";  
import Footer from "./Footer";

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
    name: "Shruti Acharya",
    company: "EikonaX Innovative Solutions Pvt.Ltd",
    image: "/images/T1.png",
    review:
      "MAHE Bioincubator has been a game-changer for our startup journey. The supportive ecosystem fosters innovation and collaboration effortlessly. Access to state-of-the-art infrastructure has accelerated our R&D. Mentorship and guidance from industry experts have been invaluable. Networking opportunities here opened doors to key partnerships. Their team is always proactive and approachable. We’re proud to grow under MAHE Bioincubator’s nurturing environment.",
    rating: 5,
  },
];
const accordionData = [
  {
    title: 'Complete Ecosystem',
    imageSrc: '/images/ecosystem.jpg',
    content: 'Our diverse and impactful ecosystem is designed to nurture and propel early-stage ideas, startups, and entrepreneurs. Our support spans across key areas to ensure that your startup journey is seamless: mentoring expertise, funding, infrastructure support, and so much more!'
  },
  {
    title: 'Mentoring Expertise',
    imageSrc: '/images/mentoring.jpg',
    content: 'Gain access to a network of seasoned industry veterans, successful entrepreneurs, and subject matter experts. Our tailored mentoring programs provide strategic guidance and practical advice to accelerate your growth.'
  },
  {
    title: 'Track record',
    imageSrc: '/images/track-record.jpg',
    content: 'Our portfolio of successful startups speaks for itself. We have a proven history of helping founders transform brilliant ideas into market-leading companies. Join a community of innovators who have achieved remarkable success.'
  }
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

  const flipCardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "60px",
    flexWrap: "wrap",
  };

  const flipCardStyle = {
    backgroundColor: "#0b2c61",
    width: "300px",
    height: "200px",
    perspective: "1200px",
    cursor: "pointer",
  };

  const flipCardInnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)", // subtle shadow
    borderRadius: "12px",
  };

  const flipCardFrontBackStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "10px",
    boxSizing: "border-box",
  };

  const flipCardBackStyle = {
    ...flipCardFrontBackStyle,
    backgroundColor: "#0b2c61",
    transform: "rotateY(180deg)",
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const impactSectionStyle = {
    backgroundColor: "#f2f2f2ff",
    color: "white",
    textAlign: "center",
  };

  const impactTitleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#0b2c61",
  };

  const impactGridStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const impactCardStyle = {
    flex: "1 1 200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    maxWidth: "220px",
  };

  const impactIconWrapperStyle = {
    width: "90px",
    height: "90px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    border: "5px solid transparent", // Initial border
    transition: "border 0.3s", // Transition for the border
    cursor: "pointer", // Add cursor pointer for better UX
  };

  const impactIconStyle = {
    width: "70%",
    height: "70%",
  };

  const impactNumberStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#0b2c61",
  };

  const impactTextStyle = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#0b2c61",
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

        {/* Vision & Mission */}
        <h2 style={headerStyle}>Our Aim</h2>
        <div style={flipCardContainerStyle}>
          {[
            { front: "Our Vision", back: "To transform innovative ideas or technology to an enterprise through strategic implementation along with adequate mentoring through eminent incubation service and affordable high-end incubation facilities." },
            { front: "Our Mission", back: "To create an entrepreneurship ecosystem with professional services that aids the transformation of innovative ideas to scalable technology and knowledge-based enterprises." }
          ].map((item, index) => (
            <div
              key={index}
              style={flipCardStyle}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  ...flipCardInnerStyle,
                  transform: hoveredCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div style={flipCardFrontBackStyle}>{item.front}</div>
                <div style={flipCardBackStyle}>{item.back}</div>
              </div>
            </div>
          ))}
        </div>
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />

        <WhyUs />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        {/* Thrust Areas */}
        <h2 style={headerStyle}>Thrust Areas</h2>
        <div style={mainGridStyle}>
          <div style={rowStyle}>
            {thrustAreasData.slice(0, 3).map((item, index) => (
              <div key={index} style={cardWrapperStyle}>
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                  onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
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
                  onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                  onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
                >
                  <img src={item.img} alt={item.title} style={imgStyle} />
                </div>
                <div style={titleStyle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />
        <Gallery />
        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />

        {/* New Impact Section */}
        <div style={impactSectionStyle}>
          <h2 style={impactTitleStyle}>Impact</h2>
          <div style={impactGridStyle}>
            <div style={impactCardStyle}>
              <div
                style={impactIconWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
              >
                <img src="/images/bulb.jpg" alt="Lightbulb Icon" style={impactIconStyle} />
              </div>
              <div style={impactNumberStyle}>
                <Counter endValue={974} duration={2000} text=" Cr+" />
              </div>
              <div style={impactTextStyle}>Grants to Start-ups</div>
            </div>
            <div style={impactCardStyle}>
              <div
                style={impactIconWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
              >
                <img src="/images/Startup.jpg" alt="Money Bag Icon" style={impactIconStyle} />
              </div>
              <div style={impactNumberStyle}>
                <Counter endValue={70} duration={2000} text="" />
              </div>
              <div style={impactTextStyle}>Total startups</div>
            </div>
            <div style={impactCardStyle}>
              <div
                style={impactIconWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
              >
                <img src="/images/Technology.jpg" alt="Star Icon" style={impactIconStyle} />
              </div>
              <div style={impactNumberStyle}>
                <Counter endValue={40} duration={2000} text="" />
              </div>
              <div style={impactTextStyle}>Technology Supported</div>
            </div>
            <div style={impactCardStyle}>
              <div
                style={impactIconWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
              >
                <img src="/images/Members.jpg" alt="Patents Icon" style={impactIconStyle} />
              </div>
              <div style={impactNumberStyle}>
                <Counter endValue={154} duration={2000} text=" Cr+" />
              </div>
              <div style={impactTextStyle}>Paid Members</div>
            </div>
            <div style={impactCardStyle}>
              <div
                style={impactIconWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.style.border = "5px solid #0b2c61")}
                onMouseLeave={(e) => (e.currentTarget.style.border = "5px solid transparent")}
              >
                <img src="/images/women.jpg" alt="Women Icon" style={impactIconStyle} />
              </div>
              <div style={impactNumberStyle}>
                <Counter endValue={40} duration={2000} text="" />
              </div>
              <div style={impactTextStyle}>Women-Led Startups</div>
            </div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "2px solid #0b2c61", margin: "50px auto", width: "80%" }} />

        {/* Supported By */}
        <h2 style={supportedByHeaderStyle}>With Support From</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          {supportedByData.map((item, index) => (
            <div
              key={index}
              style={supportedByImageWrapperStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={item.img} alt={`Partner ${index + 1}`} style={supportedByImgStyle} />
            </div>
          ))}
        </div>

        {/* Scrolling Partners */}
        <h2 style={supportedByHeaderStyle}>Our Patrons</h2>
        <div style={scrollingContainerStyle}>
          <div style={scrollingInnerStyle}>
            {scrollingPartnersData.concat(scrollingPartnersData).map((item, index) => (
              <div key={index} style={scrollingImageWrapperStyle}>
                <img src={item.img} alt={`Partner ${index + 1}`} style={scrollingImgStyle} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          padding: "4px",
          backgroundColor: "#0b2c61",
        }}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: "#fff",
              padding: "10px",
              width: "300px",
              height: "400px",
              borderRadius: "10px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}>
              <div style={{ width: "33%", margin: "0 auto", height: "33%", objectFit: "cover" }}>
                <img src={testimonial.image} alt={testimonial.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 style={{ margin: "10px 0 5px", fontWeight: "bold", color: "#0b2c61" }}>{testimonial.name}</h3>
              <h3 style={{ margin: "10px 0 5px", color: "#0b2c61", fontSize: 15 }}>{testimonial.company}</h3>
              <div style={{ color: "#0b2c61", marginBottom: "10px" }}>{"⭐".repeat(testimonial.rating)}</div>
              <p style={{ fontSize: "14px", color: "#0b2c61" }}>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;