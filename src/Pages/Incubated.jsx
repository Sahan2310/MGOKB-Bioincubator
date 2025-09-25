// src/Pages/Incubated.jsx

import React, { useState } from "react";

// --------------- Startup Data ----------------
const incubatedStartups = [
  {
    title: "Aironc Health technologies Pvt.Ltd",
    img: "/images/I1.png",
    description:"Leveraging artificial intelligence to improve the precision and effectiveness of radiation oncology treatments. These AI solutions enable personalized treatment plans, optimize radiation doses, and enhance patient outcomes.",
    website: "",
  },
  {
    title: "Aaray Health Solutions Pvt Ltd",
    img: "/images/I2.jpg",
    description:"Providing detailed and accurate histopathological analysis services to support pre-clinical research studies. These analyses help researchers understand disease mechanisms, evaluate treatment efficacy, and advance scientific knowledge.",
    website: "https://www.aarayhealthsolutions.in/p/about-us_4.html",
  },
  {
    title: "Lead Molecules LLP",
    img: "/images/I3.png",
    description:"Establishing an innovation-driven drug discovery and development organization that offers integrated scientific and management services to academic and pharmaceutical enterprises. This includes conducting research, developing new drugs, and providing comprehensive support throughout the drug development process.",
    website: "",
  },
  {
    title: "Sciogen BioScience Private Limited",
    img: "/images/I4.jpg",
    description:
      "Brief description about Startup 4. Highlight its main product/service or unique value proposition.",
    website: "",
  },
  {
    title: "Curiouz TechLab Pvt.Ltd ",
    img: "/images/I5.png",
    description:"Creating surgical tools that offer unparalleled precision in hydro dissection and tissue excision procedures. These tools are designed to minimize tissue damage, reduce recovery times, and improve surgical outcomes for patients.",
    website: "https://www.linkedin.com/company/curiouz-techlabs/",
  },
  {
    title: "Regenco Innovations Pvt.Ltd",
    img: "/images/i6.png",
    description:"Innovating bio-printed skin grafts that promote faster and more effective wound healing and reconstructive surgery. These grafts are tailored to match the patient's skin properties, enhancing integration and reducing the risk of rejection.",
    website: "https://www.linkedin.com/company/regenco-innovation-private-limited/posts/?feedView=all",
  },
  {
    title: "Vyabja Ocular Pvt.Ltd",
    img: "/images/i7.jpg",
    description:"Creating a drug delivery implant specifically designed for post-cataract treatment. This implant ensures the controlled release of medication, reducing the need for frequent eye drops and enhancing the effectiveness of post-operative care.",
    website: "",
  },
  {
    title: "Drava Life Sciences Pvt. Ltd ",
    img: "/images/i8.png",
    description:"Creating cutting-edge sequencing technologies that enable the non-invasive detection of cancer. These technologies provide early and accurate diagnosis, allowing for timely intervention and improved patient prognosis.",
    website: "https://dravalifesciences.com/",
  },
  {
    title: "BioBreath Health Solutions Pvt.Ltd",
    img: "/images/i9.png",
    description:"Developing reusable, transparent, and breathable materials for non-invasive medical applications. These materials are designed to provide comfort and visibility while ensuring effective protection and support in various medical settings.",
    website: "https://biobreath.in/",
  },
  {
    title: "Seragen Biotherpeutics Pvt.Ltd",
    img: "/images/i10.png",
    description:"Innovating ovarian rejuvenation techniques that offer disruptive and innovative solutions in the global fertility industry. These techniques aim to enhance ovarian function and improve fertility outcomes for women",
    website: "https://www.seragen.co/",
  },
  {
    title: "Scires Technologies Pvt.Ltd",
    img: "/images/i11.png",
    description:"Offering comprehensive research and development solutions that accelerate the development of biotech products. These solutions include experimental design, data analysis, and regulatory support, helping companies bring innovative products to market.",
    website: "https://scirestechnologies.com/",
  },
  {
    title: "Blackfrog Technologies Pvt.Ltd ",
    img: "/images/i12.png",
    description:"Developing robust and reliable portable refrigeration units that ensure the safe and efficient transport of medical supplies. These units maintain precise temperature control, safeguarding the integrity of vaccines, medications, and biological samples",
    website: "https://blackfrog.in/",
  },
  {
    title: "Tiny Prism labs pvt ltd",
    img: "/images/i13.png",
    description:"Designing an advanced device that evaluates and mitigates the risks of aspiration in patients. This device helps healthcare providers identify high-risk individuals and implement preventive measures, reducing the incidence of aspiration-related complications.",
    website: "https://tinyprismlabs.com/about/",
  },
  {
    title: "Autorobox AI & R Solutions Pvt Ltd",
    img: "/images/i14.jpg",
    description:"Creating innovative wearable devices equipped with artificial intelligence capabilities to monitor health metrics and detect potential health risks early. These wearables provide real-time feedback and personalized recommendations, empowering users to take proactive measures.",
    website: "https://www.autorobox.com/",
  },
  {
    title: "SVN Novatech Pvt Ltd ",
    img: "/images/i15.png",
    description:"Developing a user-centric and low-cost gnathodynamometer, a device used to measure the strength of jaw muscles. This tool is designed to be accessible and easy to use, providing valuable data for dental and medical professionals.",
    website: "",
  },
  {
    title: "Ganglia Technologies Private Limited ",
    img: "/images/i16.jpg",
    description:"Engaging in active research led by Manipal Faculty to develop a video laryngoscope. This device enhances visualization during airway management procedures, improving the safety and efficiency of intubation.",
    website: "https://ganglia.in/",
  },
  {
    title: "Neer Shakti Systems Pvt Ltd ",
    img: "/images/i17.png",
    description:"Creating nano bubble generators to enhance crop yield. These generators produce nano-sized bubbles that improve water quality and nutrient absorption in agricultural practices, leading to healthier and more productive crops.",
    website: "",
  },
  {
    title: "TeachSpoon EdTech Pvt Ltd",
    img: "/images/i18.jpg",
    description:"Developing Medi-Study Go, a digital platform that provides medical students with access to study materials, interactive learning tools, and exam preparation resources. This platform aims to support and enhance the learning experience for medical students.",
    website: "https://medistudygo.com/",
  },
  {
    title: "Greenie Bioplastics Private Limited",
    img: "/images/i19.png",
    description:"Manufacturing compostable carry bags and other commodities using biodegradable materials. These products offer an eco-friendly alternative to traditional plastics, reducing environmental impact and promoting sustainability.",
    website: "https://www.greenie.co.in/home",
  },
  {
    title: "Cambrian Biotech Private Limited ",
    img: "/images/i20.png",
    description:"Developing RNA-based diagnostic tools that leverage quantum dot technology for enhanced sensitivity and accuracy. These diagnostics enable the rapid and reliable detection of diseases at the molecular level.",
    website: "https://www.cambrianbioworks.com/",
  },
  // Add more incubated startups as needed...
];

// --------------- Component ----------------
function Incubated() {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 more on each click
  };

  return (
    <div style={{ padding: "8rem 2rem 2rem 2rem", backgroundColor: "#f0f8ff" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#0b2c61",
        }}
      >
        Incubated Startups
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {incubatedStartups.slice(0, visibleCount).map((startup, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1rem",
              textAlign: "center",
              color: "#0b2c61",
            }}
          >
            <button
              onClick={() =>
                startup.website && window.open(startup.website, "_blank")
              }
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <img
                src={startup.img}
                alt={startup.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </button>
            <h3>{startup.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#0b2c61" }}>
              {startup.description}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < incubatedStartups.length && (
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

export default Incubated;
