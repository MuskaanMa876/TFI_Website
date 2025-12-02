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
import ServiceDetails from "./pages/ServiceDetails";
import JobApplication from "./pages/JobApplication";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply/:id" element={<JobApplication />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
