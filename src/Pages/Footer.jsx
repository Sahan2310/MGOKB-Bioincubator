import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "black",
    color: "#ffffff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  };

  const columnStyle = {
    flex: "1 1 220px",
  };

  const columnHeaderStyle = {
    marginBottom: "10px",
    color: "#ffffff",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    lineHeight: 1.8,
  };

  const pStyle = {
    margin: "4px 0",
  };

  const newsletterStyle = {
    marginTop: "20px",
    color: "#ccc",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    color: "#ccc",
  };

  const inputStyle = {
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "8px",
    backgroundColor: "#F54927",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const socialIconsStyle = {
    marginTop: "20px",
  };

  const socialLinkStyle = {
    marginRight: "10px",
    fontSize: "20px",
    color: "#ffffff",
    transition: "color 0.3s ease",
  };

  const footerBottomStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    color: "#fefefe",
  };

  const mediaQuery = `
    @media (max-width: 768px) {
      .footer-container {
        flex-direction: column;
      }
    }
  `;

  return (
    <footer style={footerStyle}>
      <style>{mediaQuery}</style>
      <div className="footer-container" style={containerStyle}>
        {/* Column 1 */}
        <div className="footer-column" style={columnStyle}>
          <h4 style={columnHeaderStyle}>Services</h4>
          <ul style={ulStyle}>
            <li>Corporate Presentation</li>
            <li>Regulatory Services</li>
            <li>Intellectual Property Services</li>
            <li>Tenders</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column" style={columnStyle}>
          <h4 style={columnHeaderStyle}>Innovation Support</h4>
          <ul style={ulStyle}>
            <li>Technology Transfer Office</li>
            <li>Medtech Cleanroom</li>
            <li>Prototyping Facility & Support</li>
            <li>Venture Center Library</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column" style={columnStyle}>
          <h4 style={columnHeaderStyle}>Resources</h4>
          <ul style={ulStyle}>
            <li>Funding Database</li>
            <li>Center for Biopharma Analysis</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column" style={columnStyle}>
          <h4 style={columnHeaderStyle}>Contact</h4>
          <p style={pStyle}>Manipal-GOK Bioincubator</p>
          <p style={pStyle}>Manipal Academy of Higher Education Manipal, Karnataka- 576104</p>
          <p style={pStyle}>📞 0820-2937724</p>
          <p style={pStyle}>📧 manipal.gokbioincubator@gmail.com</p>
          <p style={pStyle}>📧 bioincubator@manipal.edu</p>
          <p style={pStyle}>🌍 bioincubator.manipal.edu</p>

          <div className="newsletter" style={newsletterStyle}>
            <h4>Newsletter Signup</h4>
            <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" required style={inputStyle} />
              <button type="submit" style={buttonStyle}>Submit</button>
            </form>
          </div>

          <div className="social-icons" style={socialIconsStyle}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        © {new Date().getFullYear()} Manipal-GOK Bioincubator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
