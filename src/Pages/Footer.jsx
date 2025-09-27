import React from "react";
import './whyUs.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Corporate Presentation</li>
            <li>Regulatory Services</li>
            <li>Intellectual Property Services</li>
            <li>Tenders</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Innovation Support</h4>
          <ul>
            <li>Technology Transfer Office</li>
            <li>Medtech Cleanroom</li>
            <li>Prototyping Facility & Support</li>
            <li>Venture Center Library</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Funding Database</li>
            <li>Center for Biopharma Analysis</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Manipal-GOK Bioincubator</p>
          <p>Manipal Academy of Higher Education Manipal, Karnataka- 576104</p>
          <p>📞 0820-2937724</p>
          <p>📧manipal.gokbioincubator@gmail.com</p>
          <p>📧bioincubator@manipal.edu</p>
          <p>🌍 bioincubator.manipal.edu</p>

          <div className="newsletter">
            <h4>Newsletter Signup</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" required />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="https://www.instagram.com/manipal.gok.bioincubator/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="https://www.linkedin.com/company/manipal-gok-bioincubator/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="https://www.youtube.com/@manipal-gokbioincubator7187">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
