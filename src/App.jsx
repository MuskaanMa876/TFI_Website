import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ABOUT (has Why Us, Team, Rules, Missions inside this page) */}
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;
