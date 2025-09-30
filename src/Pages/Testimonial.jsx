import React from "react";

// Move the data inside the file and remove props
const testimonialsData = [
  {
    name: "Shruti Acharya",
    company: "EikonaX Innovative Solutions Pvt.Ltd",
    image: "/images/T1.png",
    review:
      "MAHE Bioincubator has been a game-changer for our startup journey. The supportive ecosystem fosters innovation and collaboration effortlessly. Access to state-of-the-art infrastructure has accelerated our R&D. Mentorship and guidance from industry experts have been invaluable. Networking opportunities here opened doors to key partnerships. Their team is always proactive and approachable. We’re proud to grow under MAHE Bioincubator’s nurturing environment.",
    rating: 5,
  },
  {
    name: "Shruti Acharya",
    company: "EikonaX Innovative Solutions Pvt.Ltd",
    image: "/images/T1.png",
    review:
      "MAHE Bioincubator has been a game-changer for our startup journey. The supportive ecosystem fosters innovation and collaboration effortlessly. Access to state-of-the-art infrastructure has accelerated our R&D. Mentorship and guidance from industry experts have been invaluable. Networking opportunities here opened doors to key partnerships. Their team is always proactive and approachable. We’re proud to grow under MAHE Bioincubator’s nurturing environment.",
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>

      <div className="testimonials-section">
        {/* Inline CSS */}
        <style>{`
          .testimonials-container {
            text-align: center;
          }

          .testimonials-title {
            font-size: 30px;
            font-weight: bold;
            color: #ffffffff;
            margin-bottom: 30px;
            font-family: Garamond, serif;
            background-color: #ff6600;
            display: inline-block;
            padding: 10px 20px;
            border-radius: 8px;
          }

          .testimonials-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
            padding: 20px;
          }

          .testimonial-card {
            background-color: #fff;
            padding: 10px;
            width: 300px;
            height: 400px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          .testimonial-image-wrapper {
            width: 33%;
            margin: 0 auto;
            height: 33%;
            object-fit: cover;
          }

          .testimonial-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }

          .testimonial-name {
            margin: 10px 0 5px;
            font-weight: bold;
            color: #000000ff;
            font-size: 20px;
          }

          .testimonial-company {
            margin: 10px 0 5px;
            color: #ff6600;
            font-size: 15px;
          }

          .testimonial-stars {
            color: #000000ff;
            margin-bottom: 10px;
          }

          .testimonial-review {
            font-size: 14px;
            color: #000000ff;
          }
        `}</style>

        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <h3 className="testimonial-company">{testimonial.company}</h3>
            <div className="testimonial-stars">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
