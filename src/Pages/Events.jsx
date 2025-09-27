import React from "react";

const upcomingEvents = [
  {
    img: "/images/upcoming1.jpg",
    title: "Startup Pitch Day",
    date: "5 Sept 2025",
    link: "https://example.com/upcoming1",
  },
  {
    img: "/images/upcoming2.jpg",
    title: "Innovation Hackathon",
    date: "10 Sept 2025",
    link: "https://example.com/upcoming2",
  },
  {
    img: "/images/upcoming3.jpg",
    title: "Green Energy Workshop",
    date: "15 Sept 2025",
    link: "https://example.com/upcoming3",
  },
];

const monthlyEvents = [
  {
    month: "September 2025",
    events: [
      {
        img: "/images/event1.jpg",
        date: "20 Sept 2025",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfT_lamMdppPIMMo8MnGS4mtCrPGzhlkYeMn96RJzZlzxeTaw/viewform?usp=dialog",
      },
      {
        img: "/images/event2.png",
        date: "23 Sept 2025",
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
        date: "31 June 2025",
        link: "https://example.com/event6",
      },
    ],
  },
];

const Events = () => {
  return (
    <div style={{ padding: "40px" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          color: "#0b2c61",
          marginBottom: "30px",
        }}
      >
        Upcoming Events
      </h2>

      {/* Top Row - 3 Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => window.open(event.link, "_blank")}
            style={{
              width: "300px",
              borderRadius: "10px",
              border: "4px solid #0b2c61",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* Poster Image */}
            <img
              src={event.img}
              alt={event.title}
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
                padding: "10px",
                textAlign: "center",
                fontSize: "14px",
                color: "#0b2c61",
                fontWeight: "bold",
              }}
            >
              {event.date}
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Events with alternating backgrounds */}
      {monthlyEvents.map((monthData, i) => (
        <div
          key={i}
          style={{
            marginBottom: "60px",
            padding: "20px",
            background: i % 2 === 0 ? "#f0f8ff" : "#e8e8e8", // alternate row background
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
            {/* Month Name */}
            <div
              style={{
                flex: "0 0 200px",
                background: "#0b2c61",
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
                    border: "3px solid #0b2c61",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
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
                    alt={event.title}
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
                      color: "#0b2c61",
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
