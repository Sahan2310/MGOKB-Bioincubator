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
  const [hoveredCard, setHoveredCard] = useState(null);

  const aimData = [
    {
      front: "Our Vision",
      back: "To transform innovative ideas or technology to an enterprise through strategic implementation along with adequate mentoring through eminent incubation service and affordable high-end incubation facilities."
    },
    {
      front: "Our Mission",
      back: "To create an entrepreneurship ecosystem with professional services that aids the transformation of innovative ideas to scalable technology and knowledge-based enterprises."
    }
  ];

  return (
    <div className="aimimpact-container">
      <style>{`
        .aimimpact-container {
          text-align: center;
          font-family: "Times New Roman", Serif;
          color:00000fff;
        }

        .aimimpact-header {
          font-size: 30px;
          font-weight: bold;
          color: #000000ff;
          margin-bottom: 20px;
        }
          
        .aim-flipcards {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .aim-card {
          background-color: #F54927;
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
          font-size: 18px;
          padding: 10px;
          box-sizing: border-box;
        }

        .aim-card-back {
          background-color: #F54927;
          transform: rotateY(180deg);
          color: #ffffff;
        }

        .impact-section {
          background-color: #f2f2f2ff;
          color: white;
          text-align: center;
          margin-top: 60px;
        }

        .impact-title {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #0b2c61;
        }

        .impact-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .impact-card {
          flex: 1 1 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
          max-width: 220px;
        }

        .impact-icon-wrapper {
          width: 90px;
          height: 90px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          border: 5px solid transparent;
          transition: border 0.3s;
          cursor: pointer;
        }

        .impact-icon-wrapper:hover {
          border: 5px solid #0b2c61;
        }

        .impact-icon {
          width: 70%;
          height: 70%;
        }

        .impact-number {
          font-size: 36px;
          font-weight: bold;
          margin-top: 10px;
          color: #0b2c61;
        }

        .impact-text {
          font-size: 18px;
          line-height: 1.4;
          color: #0b2c61;
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
              className={`aim-card-inner ${hoveredCard === index ? "hovered" : ""}`}
            >
              <div className="aim-card-front">{item.front}</div>
              <div className="aim-card-back">{item.back}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAimImpact;
