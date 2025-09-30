import React, { useState, useEffect } from "react";

const BootcampPopup = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Registration deadline
  const registrationDeadline = new Date("2025-10-10T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = registrationDeadline - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [registrationDeadline]);

  if (!isOpen) return null;

  // Inline Styles
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const popupStyle = {
    background: "#fff",
    width: "400px",
    maxWidth: "90%",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.3s ease-in-out",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const countdownContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    margin: "15px 0",
  };

  const countdownItemStyle = {
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "8px",
    minWidth: "60px",
  };

  const countdownSpanStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    display: "block",
  };

  const registerBtnStyle = {
    background: "#ff6600",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>×</button>
        <h2>🚀 Upcoming Bootcamp</h2>
        <p>Register now before slots run out!</p>
        <div style={countdownContainerStyle}>
          <div style={countdownItemStyle}><span style={countdownSpanStyle}>{timeLeft.days}</span>Days</div>
          <div style={countdownItemStyle}><span style={countdownSpanStyle}>{timeLeft.hours}</span>Hours</div>
          <div style={countdownItemStyle}><span style={countdownSpanStyle}>{timeLeft.minutes}</span>Minutes</div>
          <div style={countdownItemStyle}><span style={countdownSpanStyle}>{timeLeft.seconds}</span>Seconds</div>
        </div>
        <button style={registerBtnStyle}>Register Now</button>
      </div>
    </div>
  );
};

export default BootcampPopup;
