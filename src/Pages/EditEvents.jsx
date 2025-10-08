import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:5000"; // backend URL

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/events`)
      .then((res) => setEventsData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (value, index, key) => {
    const newEvents = [...eventsData];
    newEvents[index][key] = value;
    setEventsData(newEvents);
  };

  const handleImageUpload = (file, index) => {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${BASE_URL}/api/upload`, formData)
      .then((res) => {
        handleChange(res.data.path, index, "img"); // store relative path
      })
      .catch((err) => console.error(err));
  };

  const handleAddEvent = () =>
    setEventsData([...eventsData, { title: "", date: "", img: "", link: "" }]);

  const handleRemoveEvent = (index) =>
    setEventsData(eventsData.filter((_, i) => i !== index));

  const handleSubmit = () => {
    axios
      .put(`${BASE_URL}/api/events`, eventsData)
      .then(() => {
        alert("Events Updated!");
        navigate("/events"); // go to Events page
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff7e6, #ffe0b3)",
        padding: "50px",
        fontFamily: "Garamond, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          border: "3px solid #ff6600",
          padding: "40px 50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff6600",
            marginBottom: "30px",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          Edit Events
        </h2>

        {eventsData.map((event, index) => (
          <div
            key={index}
            style={{
              marginBottom: "25px",
              padding: "20px",
              borderRadius: "12px",
              border: "2px solid #ff6600",
              background: "#fff7f0",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <input
                type="text"
                value={event.title}
                onChange={(e) => handleChange(e.target.value, index, "title")}
                placeholder="Title"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "2px solid #ff6600",
                  fontSize: "16px",
                }}
              />

              <label style={{ fontWeight: "bold", color: "#cc5200" }}>
                Select Date of the Event:
              </label>
              <input
                type="date"
                value={event.date}
                onChange={(e) => handleChange(e.target.value, index, "date")}
                placeholder="Date"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "2px solid #ff6600",
                  fontSize: "16px",
                }}
              />

              <label style={{ fontWeight: "bold", color: "#cc5200" }}>
                Enter Link of the Event:
              </label>
              <input
                type="text"
                value={event.link}
                onChange={(e) => handleChange(e.target.value, index, "link")}
                placeholder="Event Link"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "2px solid #ff6600",
                  fontSize: "16px",
                }}
              />

              <label style={{ fontWeight: "bold", color: "#cc5200" }}>
                Upload Poster or Flyer of the Event:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files[0], index)}
                style={{ marginTop: "5px" }}
              />

              {event.img && (
                <img
                  src={`${BASE_URL}${event.img}`}
                  alt="preview"
                  width="120"
                  style={{
                    marginTop: "10px",
                    borderRadius: "8px",
                    border: "2px solid #ff6600",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                />
              )}

              <button
                onClick={() => handleRemoveEvent(index)}
                style={{
                  marginTop: "10px",
                  background: "#cc0000",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#990000")}
                onMouseLeave={(e) => (e.target.style.background = "#cc0000")}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={handleAddEvent}
            style={{
              background: "#ff6600",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "15px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#cc5200")}
            onMouseLeave={(e) => (e.target.style.background = "#ff6600")}
          >
            + Add Event
          </button>

          <button
            onClick={handleSubmit}
            style={{
              background: "#ff6600",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#cc5200")}
            onMouseLeave={(e) => (e.target.style.background = "#ff6600")}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEvents;
