import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import Homepage from "./Pages/HomePage";
import Graduated from "./Pages/Graduated";
import Incubated from "./Pages/Incubated";



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
        {/* add more routes */}
      </Routes>
    </Router>
  );
}

export default App;
