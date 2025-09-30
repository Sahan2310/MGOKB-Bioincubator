import React from "react";

// Original upcoming events data
const upcomingEventsData = [
  {
    img: "/images/upcoming1.jpg",
    title: "Startup Pitch Day",
    date: "5 Oct 2025",
    link: "https://example.com/upcoming1",
  },
  {
    img: "/images/upcoming2.jpg",
    title: "Innovation Hackathon",
    date: "10 Oct 2025",
    link: "https://example.com/upcoming2",
  },
  {
    img: "/images/upcoming3.jpg",
    title: "Green Energy Workshop",
    date: "15 Oct 2025",
    link: "https://example.com/upcoming3",
  },
];

// Original monthly events data
const monthlyEventsData = [
  {
    month: "September 2025",
    events: [
      {
        img: "/images/event1.jpg",
        date: "20 Sept 2025",
        title: "September Event 1", // Added title for clarity
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfT_lamMdppPIMMo8MnGS4mtCrPGzhlkYeMn96RJzZlzxeTaw/viewform?usp=dialog",
      },
      {
        img: "/images/event2.png",
        date: "23 Sept 2025",
        title: "September Event 2", // Added title for clarity
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
        title: "August Event 2", // Added title for clarity
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
        title: "July Event", // Added title for clarity
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
        title: "June Event", // Added title for clarity
        date: "31 June 2025", // Note: June only has 30 days, this might be a typo in original data.
        link: "https://example.com/event6",
      },
    ],
  },
];

const Events = () => {
  // Create a new "Upcoming Events" section in the same format as monthly events
  const upcomingEventsSection = {
    month: "Upcoming Events",
    events: upcomingEventsData,
  };

  // Combine the new upcoming section with the rest of the monthly events
  const allEvents = [upcomingEventsSection, ...monthlyEventsData];

  return (
    <div style={{ padding: "80px", fontFamily: "Garamond, serif" }}>
      {/* Unified Events Layout */}
      {allEvents.map((monthData, i) => (
        <div
          key={i}
          style={{
            marginBottom: "60px",
            padding: "20px",
            background: "#e8e8e8", // alternate row background
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            fontSize:"15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
            {/* Month Name or "Upcoming Events" Title */}
            <div
              style={{
                flex: "0 0 200px",
                background: "#ff6600",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {monthData.month}
            </div>

            {/* Events */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {monthData.events.map((event, index) => (
                <div
                  key={index}
                  onClick={() => window.open(event.link, "_blank")}
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    border: "3px solid #ff6600",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    background: "white", // Added background for consistency
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {/* Poster */}
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
                  {/* Date below poster */}
                  <div
                    style={{
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#000000ff",
                      fontWeight: "bold",
                    }}
                  >
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;