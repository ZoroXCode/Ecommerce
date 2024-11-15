import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Pages/Store"; // Update the path based on your file structure
import Home from "./components/Pages/Home"; // Assuming you have a Home page
import About from "./components/Pages/About"; // Assuming you have an About page
import Contact from "./components/Pages/Contact"; // Assuming you have a Contact page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
