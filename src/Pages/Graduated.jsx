// src/Pages/Graduated.jsx

import React, { useState } from "react";

// --------------- Startup Data ----------------
const graduatedStartups = [
  {
    title: "Biomed Implants and Research Technologies LLP",
    img: "/images/G-Logo1.png",
    description: "Designing and engineering innovative medical implants that significantly enhance the mobility of hand joints. These implants are crafted to improve surgical outcomes by providing patients with greater dexterity and reduced recovery times, leading to better quality of life.",
    website: "https://www.biomedimplants.com/",
  },
  {
    title: "Concipio Enterprises Private Limited",
    img: "/images/G-Logo2.jpg",
    description: "Performing comprehensive ancestry studies that utilize unique genetic markers to trace lineage and uncover ancestral heritage. These studies offer individuals a deeper understanding of their genetic history and cultural background.",
    website: "https://www.zaubacorp.com/CONCIPIO-ENTERPRISE-PRIVATE-LIMITED-U74999WB2018PTC228973",
  },
  {
    title: "Businexbridge Possibility Solutions Private Limited",
    img: "/images/G-Logo3.png",
    description: "Establishing a Contract Research Organization (CRO) that provides specialized research and development services for biotech and pharmaceutical companies. These services include clinical trials, regulatory compliance, and product development support.",
    website: "",
  },
  {
    title: "IUVA foods Pvt.Ltd ",
    img: "/images/G-Logo4.png",
    description: "Utilizing recombinant DNA technology to produce lab-grown milk that serves as a sustainable alternative to traditional dairy products. This innovative approach not only addresses environmental concerns but also provides a cruelty-free and allergen-friendly option for consumers.",
    website: "https://www.iuvalife.com/",
  },
  {
    title: "Uniarc Services LLP",
    img: "/images/G-Logo5.png",
    description: "Creating advanced data analytics solutions powered by artificial intelligence to help businesses make data-driven decisions. These solutions offer insights into market trends, customer behavior, and operational efficiency, driving business growth.",
    website: "",
  },
  {
    title: "Urwi Medical Innovations Pvt.Ltd ",
    img: "/images/G-Logo6.jpg",
    description: "Developing comprehensive training programs that provide effective strategies for managing urinary incontinence. These programs aim to improve the quality of life for individuals affected by incontinence through education, support, and practical techniques.",
    website: "",
  },
  {
    title: "Microbolite Research & Development Pvt.Ltd ",
    img: "/images/G-Logo7.png",
    description: "Developing cutting-edge fabrics with embedded antibacterial properties that help reduce odor and the need for frequent washing. These fabrics are ideal for activewear, medical uniforms, and everyday clothing, offering both convenience and hygiene benefits.",
    website: "microbolite.in | microbolite",
  },
  {
    title: "IUVA Labs Pvt.Ltd ",
    img: "/images/G-Logo8.png",
    description: "Designing and engineering microbial systems optimized for large-scale protein production. These systems provide a cost-effective and sustainable method for producing high-quality proteins for various applications, including food, pharmaceuticals, and industrial processes.",
    website: "",
  },
  {
    title: "EikonaX Innovative Solutions Pvt.Ltd ",
    img: "/images/G-Logo9.png",
    description: "Creating a revolutionary positioning guide to enhance the accuracy of dental X-rays. This guide ensures precise alignment and optimal imaging, leading to better diagnostic capabilities and more effective dental treatments.",
    website: "https://eikonax.com/",
  },
  
];

// --------------- Component ----------------
function Graduated() {
    const [visibleCount, setVisibleCount] = useState(3); // show 4 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 4 more on each click
  };
  
  return (
    <div style={{ padding: "8rem 2rem 2rem 2rem", backgroundColor: "#f0f8ff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Graduated Startups
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {graduatedStartups.slice(0, visibleCount).map((startup, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => window.open(startup.website, "_blank")}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <img
                src={startup.img}
                alt={startup.title}
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                loading="lazy"
              />
            </button>
            <h3>{startup.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {startup.description}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < graduatedStartups.length && (
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
export default Graduated;
