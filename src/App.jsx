import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Careers from "./Pages/Careers";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Rules from "./Pages/Rules";
import Goals from "./Pages/Goals";
import WhyChooseUs from "./Pages/WhyChooseUs";
import PR from "./Pages/PR";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/pr" element={<PR />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
