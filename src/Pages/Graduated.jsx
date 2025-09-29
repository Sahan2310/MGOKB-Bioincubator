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
  {
    title: "Add Here- Theraphy ",
    img: "/images/G-Logo.png",
    description: "Creating a user-friendly digital platform that helps patients adhere to their prescribed therapy regimens. This tool offers reminders, progress tracking, and personalized support, improving treatment compliance and health outcomes.",
    website: "",
  },
  {
    title: "TAD AIRCON Pvt.Ltd ",
    img: "/images/G-Logo10.png",
    description: "Designing state-of-the-art air purifiers with advanced filtration systems that efficiently remove pollutants, allergens, and harmful particles from indoor air. These purifiers contribute to healthier living environments and improved respiratory health.",
    website: "https://www.tadaircon.com/",
  },
  {
    title: "Alantis Sciences IndiaPvt Ltd ",
    img: "/images/G-Logo11.png",
    description: "Providing a range of cutting-edge diagnostic tools and biomedical devices that enhance the accuracy and efficiency of medical testing and treatment. These solutions aim to improve patient outcomes and streamline healthcare processes.",
    website: "https://alantissciencesindia.com/",
  },
  {
    title: "Konkan Kayaks Pvt.Ltd",
    img: "/images/G-Logo12.gif",
    description: "Engineering high-performance kayaks that offer exceptional stability and maneuverability. These kayaks are equipped with innovative features such as ergonomic seating, advanced materials, and customizable components for enhanced paddling experiences.",
    website: "https://www.konkankayaks.com/",
  },
  {
    title: "SESNOR Technology Pvt Ltd ",
    img: "/images/G-Logo13.png",
    description: "Developing advanced micro-sensors that monitor key parameters in agriculture and healthcare. These sensors provide real-time data on soil conditions, crop health, patient vitals, and more, enabling precise and informed decision-making.",
    website: "",
  },
  {
    title: "Gilbert Biotech Private Limited ",
    img: "/images/G-Logo14.png",
    description: "Offering research services that are easy to understand and use for individuals without specialized knowledge. These services make scientific research more accessible and enable non-specialists to participate in and benefit from scientific advancements.",
    website: "",
  },
  {
    title: "Senztech Technologies Pvt.Ltd ",
    img: "/images/G-Logo.png",
    description: "Designing an innovative device that accurately detects heavy metal contaminants in water sources. This device helps ensure water safety and protect public health by providing reliable and timely contamination detection.",
    website: "",
  },
  {
    title: "Stat N Fact Private Limited ",
    img: "/images/G-Logo15.png",
    description: "Creating a digital platform tailored to the needs of academic researchers for managing projects efficiently. This platform includes tools for task management, collaboration, and resource allocation, enhancing research productivity and outcomes.",
    website: "",
  },
  {
    title: "Dashapatmaja Solutions Private Limited.",
    img: "/images/G-Logo16.png",
    description: "Developing a comprehensive digital platform that simplifies the process of planning medical travel. This platform offers personalized itineraries, appointment scheduling, and logistical support, making it easier for patients to access medical care abroad.",
    website: "https://dashapatmaja.in/",
  },
  {
    title: "Bhan Enterprises Pvt Ltd ",
    img: "/images/G-Logo17.jpg",
    description: "Offering customized web development services specifically designed to meet the unique needs of research institutions and pharmaceutical companies. These solutions include secure data management, collaborative tools, and user-friendly interfaces.",
    website: "https://bhanenterprises.in/",
  },
  {
    title: "TAD Frost Pvt Ltd",
    img: "/images/G-Logo18.jpg",
    description: "Designing high-efficiency heat pumps that can be utilized in various industrial processes. These heat pumps provide sustainable and energy-efficient solutions for heating and cooling applications in the industrial sector.",
    website: "http://tadfrost.com/",
  },
  {
    title: "Gumpu Technologies Private Limited",
    img: "/images/G-Logo19.jpg",
    description: "Developing wearable devices known as \"Butterflies\" that monitor various health parameters. These devices provide real-time data and alerts, helping users manage their health more effectively.",
    website: "",
  },
  {
    title: "Elohim Novatech Pvt Ltd ",
    img: "/images/G-Logo.png",
    description: "Developing a direct-coupled switched reluctance machine-based standalone solar water pumping system for irrigation. This system provides efficient and sustainable irrigation solutions for agricultural use, leveraging solar energy to power water pumps.",
    website: "",
  },
  
];

// --------------- Component ----------------
function Graduated() {
    const [visibleCount, setVisibleCount] = useState(6); // show 4 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more on each click
  };
  
  return (
    <div style={{ padding: "8rem 2rem 2rem 2rem", backgroundColor: "#f2f2f2ff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#000000ff" }}>
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
              color: "000000ff",
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
            <p style={{ fontSize: "0.9rem", color: "#000000ff" }}>
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
              backgroundColor: "#F54927",

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
