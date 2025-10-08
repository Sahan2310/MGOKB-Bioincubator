import React, { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const BASE_URL = "http://localhost:5000";

  // Hardcoded finished events
  const finishedEventsData = [
    {
      month: "September 2025",
      events: [
        {
          img: "/images/event1.jpg",
          date: "20 Sept 2025",
          title: "September Event 1",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfT_lamMdppPIMMo8MnGS4mtCrPGzhlkYeMn96RJzZlzxeTaw/viewform?usp=dialog",
        },
        {
          img: "/images/event2.png",
          date: "23 Sept 2025",
          title: "September Event 2",
          link: "https://tinyurl.com/3vwd963p",
        },
      ],
    },
    {
      month: "August 2025",
      events: [
        {
          img: "/images/25-Aug.png",
          title: "AI in Education",
          date: "25 Aug 2025",
          link: "https://example.com/event6",
        },
        {
          img: "/images/Aug25.jpg",
          title: "August Event 2",
          date: "25 Aug 2025",
          link: "https://example.com/event7",
        },
      ],
    },
    {
      month: "July 2025",
      events: [
        {
          img: "/images/JUL31.jpg",
          title: "July Event",
          date: "31 July 2025",
          link: "https://example.com/event6",
        },
      ],
    },
    {
      month: "June 2025",
      events: [
        {
          img: "/images/June.jpg",
          title: "June Event",
          date: "30 June 2025",
          link: "https://example.com/event6",
        },
      ],
    },
  ];

  // Fetch upcoming events from backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/events`)
      .then((res) => setUpcomingEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div style={{ padding: "80px", fontFamily: "Garamond, serif" }}>
      {/* ================== UPCOMING EVENTS ================== */}
      <div
        style={{
          marginBottom: "80px",
          padding: "30px",
          background: "#fff7e6",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#ff6600",
            fontWeight: "bold",
            fontSize: "26px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          UPCOMING EVENTS
        </h2>

        {upcomingEvents.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>No upcoming events available.</p>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => event.link && window.open(event.link, "_blank")}
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "3px solid #ff6600",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  cursor: event.link ? "pointer" : "default",
                  transition: "transform 0.3s ease",
                  background: "white",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={
                    event.img?.startsWith("http")
                      ? event.img
                      : `${BASE_URL}${event.img}` // backend image path
                  }
                  alt={event.title || "Event Poster"}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px 6px 0 0",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "10px", textAlign: "center", fontSize: "13px", color: "#000" }}>
                  <b>{event.title}</b>
                  <br />
                  <span style={{ color: "#555" }}>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================== FINISHED EVENTS ================== */}
      <div
        style={{
          padding: "30px",
          background: "#fff7e6",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#333",
            fontWeight: "bold",
            fontSize: "26px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          FINISHED EVENTS
        </h2>

        {finishedEventsData.map((monthData, i) => (
          <div key={i} style={{ marginBottom: "60px" }}>
            <div
              style={{
                background: "#ff6600",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              {monthData.month}
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {monthData.events.map((event, index) => (
                <div
                  key={index}
                  onClick={() => event.link && window.open(event.link, "_blank")}
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    border: "3px solid #ff6600",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    cursor: event.link ? "pointer" : "default",
                    transition: "transform 0.3s ease",
                    background: "white",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={event.img}
                    alt={event.title || "Event Poster"}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "6px 6px 0 0",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "8px", textAlign: "center", fontSize: "12px", color: "#000" }}>
                    <b>{event.title}</b>
                    <br />
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
