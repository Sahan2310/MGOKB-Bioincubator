import React from "react";

const CompanyCards = () => {
  const companies = [
    {
      img: "/images/S1.png",
      title: "Neer Shakti Systems Pvt Ltd",
      logo: "/images/i17.png", // added logo path
    },
    {
      img: "/images/S2.jpg",
      title: "EikonaX Innovative Solutions Pvt.Ltd",
      logo: "/images/G-Logo9.png",
    },
    {
      img: "/images/S3.jpg",
      title: "TeachSpoon EdTech Pvt Ltd",
      logo: "/images/i18.jpg",
    },
    {
      img: "/images/S4.png",
      title: "Hersukh Wellness Pvt Ltd",
      logo: "/images/i23.png",
    },
    
  ];

  return (
    <>
      <style>
        {`
          .cards-container {
            display: flex;
            gap: 10px;
            padding: 10px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .card {
            width: 250px;
            height: 300px;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            position: relative;
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
          }

          .card:hover {
            transform: scale(1.3); /* makes it much larger on hover */
            z-index: 2; /* bring hovered card above others */
          }

          .card-image {
            width: 250px;
            height: 250px;
            object-fit: cover;
          }

          .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 12px;
            background: rgba(255,255,255,0.8);
            box-sizing: border-box;
            display: flex; /* added */
            align-items: center; /* added */
            gap: 8px; /* space between logo and text */
          }

          .card-logo {
            width: 30px; /* logo size */
            height: 30px;
            object-fit: contain;
          }

          .text-content {
            display: flex;
            flex-direction: column;
          }

          .card-title {
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
            justifyContent: "right", 
            
          }

          .card-subtitle {
            font-size: 0.8rem;
            margin: 0;
          }
        `}
      </style>

      <div className="cards-container">
        <h2 style={{ width: "100%", textAlign: "center", marginBottom: "10px", color: "#0b2c61",fontSize:35 }}>Win Stories</h2>
        {companies.map((c, i) => (
          <div className="card" key={i}>
            <img src={c.img} alt={c.title} className="card-image" />
            <div className="card-content">
              <img src={c.logo} alt="logo" className="card-logo" />
              <div className="text-content">
                <p className="card-title">{c.title}</p>
                <p className="card-subtitle">{c.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyCards;
