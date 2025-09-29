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

  return (
    <span>
      {count}
      {text}
    </span>
  );
};

const OurAimImpact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const aimData = [
    {
      frontLogo: "/images/vision.png", 
      back: "To transform innovative ideas or technology to an enterprise through strategic implementation along with adequate mentoring through eminent incubation service and affordable high-end incubation facilities.",
    },
    {
      frontLogo: "/images/mission.png",
      back: "To create an entrepreneurship ecosystem with professional services that aids the transformation of innovative ideas to scalable technology and knowledge-based enterprises.",
    },
  ];

  return (
    <div className="aimimpact-container">
      <style>{`
        .aimimpact-container {
          text-align: center;
          font-family: Garamond, serif;
          color: #000000ff;
        }

        .aimimpact-header {
          font-size: 35px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 20px;
          background-color: #F54927;
          display: inline-block;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .aim-flipcards {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .aim-card {
          width: 300px;
          height: 200px;
          perspective: 1200px;
          cursor: pointer;
        }

        .aim-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          border-radius: 12px;
        }

        .aim-card-inner.hovered {
          transform: rotateY(180deg);
        }

        .aim-card-front,
        .aim-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          font-size: 20px;
          padding: 10px;
          box-sizing: border-box;
          background-color: #F54927;
        }

        .aim-card-back {
          background-color: #F54927;
          transform: rotateY(180deg);
          color: #ffffff;
        }

        /* Added for logo styling */
        .aim-card-front img {
          max-width: 40%;
          max-height: 40%;
          object-fit: contain;
        }
      `}</style>

      {/* Our Aim */}
      <h2 className="aimimpact-header">Our Aim</h2>
      <div className="aim-flipcards">
        {aimData.map((item, index) => (
          <div
            key={index}
            className="aim-card"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`aim-card-inner ${
                hoveredCard === index ? "hovered" : ""
              }`}
            >
              <div className="aim-card-front">
                <img src={item.frontLogo} alt={`logo-${index}`} />
              </div>
              <div className="aim-card-back">{item.back}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAimImpact;
