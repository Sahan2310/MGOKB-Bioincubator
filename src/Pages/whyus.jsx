import React, { useState } from 'react';
import './whyUs.css';

// We define the data for our accordion here. This makes it easy to add or change items later.
const accordionData = [
  {
    title: 'Complete Ecosystem',
    imageSrc: '/images/ASR.jpg',
    content: 'Our diverse and impactful ecosystem is designed to nurture and propel early-stage ideas, startups, and entrepreneurs. Our support spans across key areas to ensure that your startup journey is seamless: mentoring expertise, funding, infrastructure support, and so much more!'
  },
  {
    title: 'Mentoring Expertise',
    imageSrc: '/images/mentoring.jpg',
    content: 'Gain access to a network of seasoned industry veterans, successful entrepreneurs, and subject matter experts. Our tailored mentoring programs provide strategic guidance and practical advice to accelerate your growth.'
  },
  {
    title: 'Track record',
    imageSrc: '/images/track-record.jpg',
    content: 'Our portfolio of successful startups speaks for itself. We have a proven history of helping founders transform brilliant ideas into market-leading companies. Join a community of innovators who have achieved remarkable success.'
  }
];

const WhyUs = () => {
  // useState hook to keep track of the currently active accordion item index.
  // We initialize it to 0, so the first item is open by default.
  const [activeIndex, setActiveIndex] = useState(0);

  // This function is called when an accordion header is clicked.
  const handleItemClick = (index) => {
    // We only update the state if a different item is clicked.
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // The active item's data can be easily accessed using the activeIndex.
  const activeImage = accordionData[activeIndex].imageSrc;

  return (
    <section className="why-us-container">
      <h1>Why Choose Us?</h1>
      <div className="why-us-content">
        
        {/* Image Column */}
        <div className="image-display">
          {/* The key prop helps React efficiently update the DOM. 
              Changing the key will cause the component to re-mount, creating a clean image transition. */}
          <img key={activeImage} src={activeImage} alt={accordionData[activeIndex].title} />
        </div>

        {/* Accordion Column */}
        <div className="accordion">
          {accordionData.map((item, index) => (
            // The main container for each accordion item.
            // We conditionally add the 'active' class based on the activeIndex.
            <div 
              key={index} 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="accordion-header" 
                onClick={() => handleItemClick(index)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="icon"></span>
              </button>
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;