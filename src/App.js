import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./Components/NavBar";
import Homepage from "./Pages/HomePage";
import Graduated from "./Pages/Graduated";
import Incubated from "./Pages/Incubated";
import About from "./Pages/About";
import Events from "./Pages/Events";
import WhyUs from "./Pages/whyus";


function App() {
  return (
    <Router>
      {/* Navbar always present */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/graduated" element={<Graduated />} />
        <Route path="/incubated" element={<Incubated />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/whyus" element={<WhyUs />} />
        {/* add more routes */}
      </Routes>
    </Router>
  );
}

export default App;
