import React, { useState } from "react";

const accordionData = [
  {
    title: "Complete Ecosystem",
    imageSrc: "/images/ASR.jpg",
    content:
      "Our diverse and impactful ecosystem is designed to nurture and propel early-stage ideas, startups, and entrepreneurs. Our support spans across key areas to ensure that your startup journey is seamless: mentoring expertise, funding, infrastructure support, and so much more!",
  },
  {
    title: "Mentoring Expertise",
    imageSrc: "/images/mentoring.jpg",
    content:
      "Gain access to a network of seasoned industry veterans, successful entrepreneurs, and subject matter experts. Our tailored mentoring programs provide strategic guidance and practical advice to accelerate your growth.",
  },
  {
    title: "Track record",
    imageSrc: "/images/track-record.jpg",
    content:
      "Our portfolio of successful startups speaks for itself. We have a proven history of helping founders transform brilliant ideas into market-leading companies. Join a community of innovators who have achieved remarkable success.",
  },
];

const WhyUsCombined = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };
  const activeImage = accordionData[activeIndex].imageSrc;

  return (
    <section className="why-us-container">
      {/* Inline CSS */}
      <style>{`
        .why-us-container {
          max-width: 1100px;
          font-family: Garamond, serif;
          width: 100%;
          margin: 40px auto;
          padding: 20px;
        }

        .why-us-container h1 {
          font-size: 30px;
          background-color: #F54927;
          display: inline-block;
          padding: 10px 20px;
          border-radius: 8px;
          color: #ffffffff;
          margin-bottom: 2rem;
        }

        .why-us-content {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
        }

        .image-display {
          flex: 1;
          position: sticky;
          top: 20px;
        }

        .image-display img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .accordion {
          flex: 1.2;
        }

        .accordion-item {
          margin-bottom: 1rem;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .accordion-header {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #000000;
          cursor: pointer;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .accordion-content {
          background-color: #ffffff;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out, padding 0.4s ease-out;
          line-height: 1.6;
          color: #000000;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          font-family: Garamond, serif;
          font-size: 20px;
        }

        .accordion-content p {
          margin: 0;
        }

        .accordion-item.active .accordion-header {
          background-color: #F54927;
          border-color: #0b2c61;
          color: #ffffff;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        .accordion-item.active .accordion-content {
          max-height: 500px;
          padding: 1.5rem;
        }

        .icon {
          width: 28px;
          height: 28px;
          border: 2px solid #F54927;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s ease, border-color 0.3s ease;
        }

        .icon::before {
          content: '';
          width: 10px;
          height: 10px;
          border-left: 2px solid #F54927;
          border-bottom: 2px solid #F54927;
          transform: rotate(-45deg);
          transition: border-color 0.3s ease;
        }

        .accordion-item.active .accordion-header .icon {
          transform: rotate(180deg);
          border-color: #ffffff;
        }

        .accordion-item.active .accordion-header .icon::before {
          border-color: #fffefe;
        }

        @media (max-width: 768px) {
          .why-us-content {
            flex-direction: column;
          }
          .image-display {
            position: static;
            width: 100%;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <h1>Why Choose Us?</h1>
      <div className="why-us-content">
        <div className="image-display">
          <img
            key={activeImage}
            src={activeImage}
            alt={accordionData[activeIndex].title}
          />
        </div>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => handleItemClick(index)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="icon"></span>
              </button>
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsCombined;
