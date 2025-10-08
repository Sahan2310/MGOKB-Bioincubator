import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./Components/NavBar";
import Homepage from "./Pages/HomePage";
import Graduated from "./Pages/Graduated";
import Incubated from "./Pages/Incubated";
import About from "./Pages/About";
import Events from "./Pages/Events";
import WhyUs from "./Pages/whyus";
import TeamPage from "./Pages/TeamPage"; 
import CMSLogin from "./Pages/CMSLogin";
import CMSDashboard from "./Pages/CMSDashboard";
import EditEvents from "./Pages/EditEvents"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Show Navbar only if not on admin dashboard */}
      {!window.location.pathname.startsWith("/admin") && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/graduated" element={<Graduated />} />
        <Route path="/incubated" element={<Incubated />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/team" element={<TeamPage />} />

        {/* CMS Login */}
        <Route
          path="/admin"
          element={<CMSLogin onLogin={() => setIsLoggedIn(true)} />}
        />

        {/* CMS Dashboard (protected) */}
        <Route
          path="/admin/dashboard"
          element={
            isLoggedIn ? (
              <CMSDashboard />
            ) : (
              <Navigate to="/admin" replace /> // redirect to login if not logged in
            )
          }
        />
        <Route
  path="/admin/edit-events"
  element={
    isLoggedIn ? <EditEvents /> : <Navigate to="/admin" replace />
  }
  />

        {/* Extra pages */}
        <Route path="/trust-area" element={<div>Trust Area Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
