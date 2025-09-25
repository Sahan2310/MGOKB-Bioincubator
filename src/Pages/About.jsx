import React from "react";

const About = () => {
  const sectionStyle = {
    position: "relative",
    width: "100%",
    height: "800px",
    backgroundImage: "url('/images/ASR.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "LEFT",
    color: "white",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(11,44,97,0.7), rgba(11,44,97,0.7))", // gradient overlay
    zIndex: 1,
  };

  const textContainerStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "1110px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
         Manipal - Government of Karnataka Bioincubator, Technology Business Incubator, an initiative by Manipal Academy of Higher Education (MAHE) and the Government of Karnataka to facilitate incubation of startups. This Incubation platform aims at upscaling innovations specializing in technology, propelling innovative ideas towards product commercialization. The Startups, entrepreneurs, innovators, entrepreneurship ventures of researchers, faculty and students are welcome to explore world class bio-incubation space with cutting edge access to expertise and infrastructure. Manipal-GOK Bioincubator also focuses on the translational activities dedicated to promoting technology based early stage ideas, through mentorship, investment readiness support, technical assistance, business validation and networking opportunities.
        </p>
        <p style={paragraphStyle}>
         Manipal Academy for Higher Education with a 60-year-old legacy of excellence, partnering with the Government of Karnataka with a vision to create a world-class startup ecosystem with a powerful blend of academic experience and industry exposure. Government of Karnataka extends its support through strategic investment and policy interventions, to create the Bioincubator to accelerate the innovative ideas with a strong market potential, and to build up multidisciplinary technology development through the intersection of professional institutions of Health Sciences, Pharma, Medical, Dental, Engineering, Life Science, Management, Basic Science, Communication, etc. for the enhancement entrepreneurial culture of Manipal eco-system, with over 28,000 students from 57 different nations.
        </p>
        <p style={paragraphStyle}>
         The Goal of Manipal-GOK Bioincubator is to handhold and address the challenges of entrepreneurs to create technology-based enterprise to successfully commercializing business model. Bioincubator is keen to develop a strong entrepreneurial culture with good governance and operational model to evaluate and benchmark the performance of entrepreneurs. Bioincubator welcomes you to explore the emerging opportunities available with biotechnology hubs with the cumulative incubation area of 10,000 sq. ft. of laboratory and office spaces along with opportunities to forge synergies with industry.
        </p>
        
      </div>
    </section>
  );
};

export default About;
