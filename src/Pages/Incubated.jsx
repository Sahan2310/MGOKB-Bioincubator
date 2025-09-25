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
  {
    title: "Meta Biosciences Pvt Ltd",
    img: "/images/i21.jpg",
    description:"Conducting research to discover and develop new drug compounds specifically targeting esophageal cancer. These compounds aim to improve treatment efficacy, reduce side effects, and increase survival rates for patients.",
    website: "https://meta-biosciences.com/",
  },
  {
    title: "Vilohit Care Tek Pvt Ltd ",
    img: "/images/i22.png",
    description:"Creating a novel multifunctional assistive device for paraplegic and hemiplegic patients. This device aims to improve mobility, independence, and overall quality of life for individuals with limited movement capabilities.",
    website: "",
  },
  {
    title: "Hersukh Wellness Pvt Ltd ",
    img: "/images/i23.png",
    description:"Offering specialized healthcare services tailored to the unique needs of women. These services include preventive care, reproductive health, and personalized treatment plans, ensuring comprehensive and compassionate care for female patients.",
    website: "https://www.ahanaher.com/",
  },
  {
    title: "EVINAHTA Solutions Pvt Ltd ",
    img: "/images/i24.png",
    description:"Performing detailed assessments to evaluate the effectiveness of healthcare interventions. These assessments provide valuable insights that help optimize treatment strategies, improve patient outcomes, and enhance the overall quality of care.",
    website: "https://evinahta.com/",
  },
  {
    title: "Gati Gait & Posture Pvt Ltd ",
    img: "/images/i25.png",
    description:"Innovating kinematic navigation technology for knee replacement surgeries. This technology provides precise guidance during surgery, enhancing the accuracy of implant placement and improving patient outcomes.",
    website: "https://www.gaticentre.in/",
  },
  {
    title: "Quantumzyme LLP",
    img: "/images/i26.png",
    description:"Developing recombinant transaminase polypeptides, which are enzymes used in biochemical processes. These polypeptides have applications in various industries, including pharmaceuticals and biotechnology, for the production of valuable compounds.",
    website: "https://www.linkedin.com/company/quantumzyme/",
  },
  {
    title: "Jivanu Therapeutics Private Limited",
    img: "/images/i27.png",
    description:"Creating oral capsules containing beneficial microbiota to restore and maintain gut health. These capsules aim to improve digestive function, boost the immune system, and promote overall well-being.",
    website: "https://jivanutx.com/",
  },
  {
    title: "Rosette Smart Bottles LLP ",
    img: "images/i28.jpg",
    description:"Designing smart bottles equipped with health-tracking sensors that monitor hydration levels, nutrient intake, and other health metrics. These bottles provide real-time feedback and help users maintain optimal health and wellness.",
    website: "https://rosettesmartlife.com/",
  },
  {
    title: "Satavic Innovations Private Limited ",
    img: "",
    description:"Developing a high-affinity PD-1-Fc fusion protein as a therapy for various diseases, including cancer. This therapy aims to improve patient outcomes and is being developed up to regulatory approval and marketing stages.",
    website: ""
  },
  {
    title: "SiSuShi Healthcare Solutions Private Limited",
    img: "",
    description:"Creating INSTAPHANTOM, an instant mix designed for uniformity phantom applications. This product ensures consistent and reliable results in imaging and diagnostic procedures, improving the accuracy of medical tests.",
    website: "",
  },
  {
    title: "Euclase Genetics Pvt Ltd",
    img: "",
    description:"Developing a standalone test for the genetic diagnosis of hereditary breast and ovarian cancer (HBOC) using nanopore sequencing technology. This test provides accurate and early detection of genetic mutations associated with these cancers.",
    website: "",
  },
  {
    title: "Vitritya labs Private Limited ",
    img: "",
    description:"Designing and developing a non-invasive cancer monitoring device that allows for continuous and real-time monitoring of cancer biomarkers. This device aims to improve cancer management and treatment by providing timely and accurate data.",
    website: "",
  },
  {
    title: "Verturis Wellness Private Limited",
    img: "",
    description:"Offering a personalized approach to gut health with a focus on microbiota modulation. This approach targets chronic gut disorders such as IBS, UC, and IBD, providing tailored treatments to improve gut health and overall well-being.",
    website: "",
  },
  {
    title: "Krop Artificial Intelligence Private Limited ",
    img: "",
    description:"Revolutionizing crop cultivation, Krop Ai's vertical pipe system maximizes space (40x) and automation, enhancing efficiency for year-round growth of exotic crops like berries, leafy greens, and herbs.",
    website: "https://www.kropai.com/",
  },
  {
    title: "Anjocadd Solutions Pvt Ltd",
    img: "",
    description:"",
    website: "",
  },
  {
    title: "Mazedoc Clinical Innovations Private Limited ",
    img: "",
    description:"Mazedoc Clinical Innovations Pvt. Ltd. is a gamified digital platform designed for medical students to develop clinical reasoning skills through AI-generated virtual patient simulations. The platform bridges the gap between theoretical learning and real-world decision-making by offering engaging, authenticated case scenarios and customizable assessments for educators.",
    website: "",
  },
  {
    title: "OncoPhytogenics Private Limited",
    img: "",
    description:"OncoPhytogenics Private Limited, led by Dr. Tejaswini A Kalkundri, focuses on developing OncoShield, a patented, plant-based polyherbal formulation designed as an anticancer agent. Combining advanced drug delivery techniques like microneedles and buccal patches, the startup aims to enhance bioavailability, ensure targeted action, and provide patient-compliant solutions for managing oral cancer.",
    website: "",
  },
  {
    title: "Neurasim Private Limited ",
    img: "",
    description:"NeuraSim (P) Ltd. develops innovative XR-based eye-tracking solutions for healthcare, focusing on diagnosing and managing eye and brain health. Their patented technology integrates advanced AI-driven eye movement analysis into portable VR devices, offering affordable and precise screening tools for conditions like glaucoma and neurodegenerative disorders.",
    website: "https://neurasim.health/",
  },
  {
    title: "Life Essentials Water Solutions Pvt Ltd",
    img: "",
    description:"Life Essentials Water Solutions Private Limited, specializes in innovative water treatment technologies to address waterborne diseases and contamination. Their advanced modular filtration systems, designed for affordability and efficiency, tackle contaminants like iron, suspended solids, and E. coli while improving access to safe drinking water for households and industries.",
    website: "Life Essentials - Thermax Channel Assosiate",
  },
  {
    title: "Bantan Technologies Pvt Ltd",
    img: "",
    description:"Developing a 100% natural, 24-hour cultured yoghurt with enhanced nutritional value and shelf life.Combining traditional fermentation with modern food tech for a healthier dairy alternative.argeting health-conscious consumers with clean-label, probiotic-rich products.",
    website: "https://www.canarafarms.com/",
  },
  {
    title: "Ms.Sumbul Farhat",
    img: "",
    description:"Establishing a bacteriophage bank to combat antimicrobial-resistant (AMR) bacterial infections.Offering a sustainable, targeted alternative to conventional antibiotics.Aiming to revolutionize infectious disease treatment through phage therapy.",
    website: "",
  },
  {
    title: "ZiA Ventures (P) Ltd. ",
    img: "",
    description:"Innovating endothelial cell assessment through advanced blood vessel sampling techniques.Enabling early detection of vascular health issues and systemic diseases.Transforming diagnostics with precision cellular analysis.",
    website: "https://www.ziaventures.in/",
  },
  {
    title: "RA Health Innovations Limited ",
    img: "",
    description:"Creating data-driven solutions to enhance senior care accessibility and personalization.Leveraging insights to improve quality of life and decision-making for elderly support systems.Making elder care more inclusive, informed, and impactfulwebsite: ",
  },
  {
    title: "Blue Molecule Life Sciences (P) Ltd.",
    img: "",
    description:"Developing a non-steroidal therapeutic solution for autoimmune-triggered hair loss.Focusing on safe, long-term treatment options without hormonal side effects.lending dermatological science with biotech innovation.website:",
    website: "https://www.falconebiz.com/company/BLUE-MOLECULE-LIFE-SCIENCE-PRIVATE-LIMITED-U96020KA2024PTC192214",
  },
  {
    title: "Omnisoph Research Pvt Ltd ",
    img: "",
    description:"",
    website: "",
  },
  {
    title: "Manentia Advisory Pvt Ltd",
    img: "",
    description:"Pioneering a modular AI platform designed to enhance diagnostic precision across imaging modalities such as X-rays and CT scans. With multimodal AI and transformer-based models, the startup integrates clinical data to produce accurate, structured medical reports—aiming to revolutionize healthcare diagnostics through scalable, plug-and-play solutions.",
    website: "https://www.manentia.ai/",
  }
];

// --------------- Component ----------------
function Incubated() {
  const [visibleCount, setVisibleCount] = useState(6); // show 3 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 3 more on each click
  };

  return (
    <div style={{ padding: "8rem 2rem 2rem 2rem", backgroundColor: "#f2f2f2ff" }}>
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
