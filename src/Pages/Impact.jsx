import React, { useState, useEffect } from "react";

// Counter animation
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

const Impact = () => {
  return (
    <div className="impact-section">
      {/* Inline CSS */}
      <style>{`
        .impact-section {
          background-color: #f2f2f2ff;
          color: white;
          text-align: center;
        }

        .impact-title {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #000000;
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
          border: 5px solid #F54927;
        }

        .impact-icon {
          width: 70%;
          height: 70%;
        }

        .impact-number {
          font-size: 36px;
          font-weight: bold;
          margin-top: 10px;
          color: #000000;
        }

        .impact-text {
          font-size: 18px;
          line-height: 1.4;
          color: #000000;
        }
      `}</style>

      <h2 className="impact-title">Impact</h2>
      <div className="impact-grid">
        <div className="impact-card">
          <div className="impact-icon-wrapper">
            <img src="/images/bulb.jpg" alt="Lightbulb Icon" className="impact-icon" />
          </div>
          <div className="impact-number">
            <Counter endValue={974} duration={2000} text=" Cr+" />
          </div>
          <div className="impact-text">Grants to Start-ups</div>
        </div>

        <div className="impact-card">
          <div className="impact-icon-wrapper">
            <img src="/images/Startup.jpg" alt="Money Bag Icon" className="impact-icon" />
          </div>
          <div className="impact-number">
            <Counter endValue={70} duration={2000} text="" />
          </div>
          <div className="impact-text">Total startups</div>
        </div>

        <div className="impact-card">
          <div className="impact-icon-wrapper">
            <img src="/images/Technology.jpg" alt="Star Icon" className="impact-icon" />
          </div>
          <div className="impact-number">
            <Counter endValue={40} duration={2000} text="" />
          </div>
          <div className="impact-text">Technology Supported</div>
        </div>

        <div className="impact-card">
          <div className="impact-icon-wrapper">
            <img src="/images/Members.jpg" alt="Patents Icon" className="impact-icon" />
          </div>
          <div className="impact-number">
            <Counter endValue={154} duration={2000} text="" />
          </div>
          <div className="impact-text">Paid Members</div>
        </div>

        <div className="impact-card">
          <div className="impact-icon-wrapper">
            <img src="/images/women.jpg" alt="Women Icon" className="impact-icon" />
          </div>
          <div className="impact-number">
            <Counter endValue={40} duration={2000} text="" />
          </div>
          <div className="impact-text">Women-Led Startups</div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
