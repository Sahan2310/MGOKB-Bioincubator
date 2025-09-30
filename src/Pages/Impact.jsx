import React, { useState, useEffect } from "react";

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

const OurAimImpact = () => {
  const impactData = [
    { endValue: 9.74, duration: 2000, text: "Cr+", label: "Grants To Start-Ups", logo: "/images/bulb.jpg" },
    { endValue: 70, duration: 2000, text: "+", label: "Supported Start-Ups", logo: "/images/startup.jpg" },
    { endValue: 40, duration: 2500, text: "+", label: "Technology Supported", logo: "/images/Technology.jpg" },
    { endValue: 1.54, duration: 2000, text: "Cr+", label: "Grants to Incubator", logo: "/images/Money.jpg" },
    { endValue: 730, duration: 2000, text: "+", label: "Paid Members", logo: "/images/Members.jpg" },
    { endValue: 40, duration: 2000, text: "+", label: "Women led Start-Ups", logo: "/images/Women.jpg" },
    // New 3 items
    { endValue: 20, duration: 2000, text: "+", label: "Services and Product Launched", logo: "/images/mentor.jpg" },
    { endValue: 15, duration: 2000, text: "Cr+", label: "Investment raised by Start-Ups", logo: "/images/investment.jpg" },
    { endValue: 200, duration: 2000, text: "+", label: "Job opportunities by Start-Ups", logo: "/images/job.jpg" },
  ];

  return (
    <div className="aimimpact-container">
      <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 columns */
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
          font-size: 12px;
        }

        .impact-item {
          background-color: #f9f9f9;
          padding: 25px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .impact-item .logo {
          width: 100px;
          height: 100px;
          margin-right: 15px;
          object-fit: contain;
        }

        .impact-item .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end; /* Text aligned to right */
          flex-grow: 1; /* Take remaining space */
          text-align: right; /* Ensure inner text is right-aligned */
        }

        .impact-item .counter-value {
          font-size: 48px;
          font-weight: bold;
          color: #ff6600;
        }

        .impact-item .counter-label {
          margin-top: 5px;
          font-size: 18px;
          color: #000000ff;
        }

        @media (max-width: 1024px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h2 className="aimimpact-header">Our Impact</h2>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <div key={index} className="impact-item">
            <img src={item.logo} alt={item.label} className="logo" />
            <div className="content-wrapper">
              <div className="counter-value">
                <Counter
                  endValue={item.endValue}
                  duration={item.duration}
                  text={item.text}
                />
              </div>
              <p className="counter-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAimImpact;
