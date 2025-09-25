import React from "react";

const eventsData = [
  { img: "/images/event1.jpg", title: " Impact of AI on Healthcare, Business, Education & Research." },
  { img: "/images/event2.png", title: "CELEBRATING COURAGE: WORLD ENTREPRENEURS’ DAY SPECIAL" }]

const Events = () => {
  return (
    <>
      <style>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 100px;
          justify-content: center;
        }

        .flex-item {
          position: relative;
          flex: 1 1 300px; /* grow, shrink, base width */
          max-width: 300px;
          overflow: hidden;
          border-radius: 10px;
        }

        .flex-item img {
          width: 100%;
          display: block;
          border-radius: 10px;
          transition: transform 0.4s ease;
        }

        .flex-item:hover img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: #f2f2f2ff;
          padding: 15px;
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }

        .flex-item:hover .overlay {
          transform: translateY(0);
        }

        .overlay h3 {
          margin: 0;
          font-size: 18px;
          font-weight: bold;
        }

        .overlay p {
          margin-top: 5px;
          font-size: 14px;
        }
      `}</style>

      <div className="flex-container">
        {eventsData.map((event, i) => (
          <div className="flex-item" key={i}>
            <img src={event.img} alt={event.title} />
            <div className="overlay">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
