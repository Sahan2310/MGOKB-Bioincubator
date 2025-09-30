import React from 'react';

// Team data (same as your previous code)
const teamMembers = [
  { name: 'Dr.Maneesh Thomas', role: 'CEO of MGoKB, holds a Ph.D. in Microbiology with 12 years of incubation management and 8 years of research experience. He specializes in administration, technical mentoring in life sciences, and has expertise in regulatory, financial, investment, and business strategy aspects.', img: "/images/Maneesh.png" },
  { name: 'Mr.Krishna P Bhat', role: 'Operations Manager at MGoKB, holds an M.Tech in Mechanical Machine Design with 6 years in operations and 3 years in incubation. He specializes in business development, start-up support, funding strategies, operations management, and regulatory compliance.', img: "/images/Krishna.png" },
  { name: 'Dr.Komal Rana', role: 'Technical Manager at MGoKB, holds a Ph.D. in Biophysics with experience in incubation, teaching, and ICMR JRF research. She specializes in project management, regulatory support, grant writing, ISO standards, cell culture, nanobiotechnology, and drug delivery techniques.', img: "/images/Komal.png" },
  { name: 'Dr.Clavian Miranda', role: 'BioNEST Manager at MGoKB, holds a Ph.D. in Physics with 2 years of incubation experience and prior work as a Project Assistant on a DAE-BRNS project. His expertise includes optics, electronics, material characterization, ISO 13485, grant writing, and start-up consultancy.', img: "/images/Clavian.png" },
  { name: 'Mr.Dheeraj Poojary', role: 'BioNEST Technical Manager at MGoKB, holds an M.Tech in Mechanical Machine Design with 6 years of incubation and 3 years of private sector experience. He specializes in engineering and prototyping, 3D printing, medical and dental solutions, start-up consulting, and the design and fabrication of surgical tools.', img: "/images/Dheeraj.png" },
  { name: 'Mrs.Akshatha Shetty', role: 'Admin Associate at MGoKB, holds an M.Sc. in Microbiology with 1 year of incubation, 6 years of teaching, and 3 years of research experience. She is skilled in molecular and cellular biology, biochemistry, data and facilities management, event coordination, and ISO quality standards.', img: "/images/Akshatha.png" },
  { name: 'Mr.Sudeep Shetty', role: 'Office Accountant at MGoKB, holds a BBM and has 3 years of incubation experience alongside 3 years in accounting. He specializes in financial management, compliance, tax planning, audits, payroll, and financial analysis.', img: "/images/Sudeep.png" },
];

const TeamPage = () => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

    .team-page-container {
      font-family: Garamond, serif;
      background: linear-gradient(to bottom, rgba(255, 136, 0, 1), rgba(247, 247, 247, 0.7));
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      min-height: 100vh;
    }

    .flyer {
      background-color: #f2f2f2ff;
      width: 100%;
      max-width: 850px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      padding: 50px;
      position: relative;
      overflow: hidden;
    }

    .flyer::before {
      content: '';
      position: absolute;
      top: -20%;
      right: -20%;
      width: 450px;
      height: 450px;
      background: #ffe055ff;
      border-radius: 50%;
      z-index: 0;
    }

    .flyer::after {
      content: '';
      position: absolute;
      top: -10%;
      right: -25%;
      width: 450px;
      height: 450px;
      background: #F54927;
      border-radius: 50%;
      z-index: 1;
    }

    .flyer-content {
      position: relative;
      z-index: 2;
    }

    .title-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
    }

    .title-section h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 0;
      line-height: 1.1;
      color: #000000ff;
    }

    .title-section .highlight {
      color: #ff6600;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 100px 100px;
      margin-bottom: 50px;
    }

    /* Center the last row if it has only one item */
    .team-grid .team-member:last-child {
      grid-column: 1 / -1;
      justify-self: center;
      margin-left:200px;
      margin-right:200px;
    }

    .team-member {
      background-color: #Ff6600;
      color: white;
      border-radius: 20px;
      padding: 20px;
      padding-top: 70px;
      text-align: center;
      position: relative;
    }

    .member-photo-wrapper {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 130px;
      height: 130px;
      border-radius: 60%;
      background: conic-gradient(#F54927 0, #F54927 150deg, transparent 150deg, transparent 210deg, #F54927 210deg);
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%) rotate(15deg);
    }

    .member-photo-bg {
      background: white;
      padding: 5px;
      border-radius: 50%;
      transform: rotate(-15deg);
    }

    .member-photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }

    .member-name {
      margin: 10px 0 5px;
      font-weight: 700;
      font-size: 1.1rem;
      text-transform: uppercase;
    }

    .member-role {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 400;
      color: #ffffffff;
    }

    @media (max-width: 768px) {
      .team-grid {
        grid-template-columns: 1fr;
        gap: 70px;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="team-page-container">
        <div className="flyer">
          <div className="flyer-content">
            <section className="title-section">
              <div>
                <h1>Meet Our</h1>
                <h1><span className="highlight">Expert Team</span></h1>
              </div>
            </section>

            <main className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-member" key={index}>
                  <div className="member-photo-wrapper">
                    <div className="member-photo-bg">
                      <img src={member.img} alt={member.name} className="member-photo" />
                    </div>
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
