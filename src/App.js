import './App.css';
import Header from "./Components/header"
import Footer from "./Components/footer"
import Home from './Pages/Landing_page/Home'
import About from './Pages/About-page/about-page'
import Faq from './Pages/FAQ/faq'
import Timeline from './Pages/Timeline/Timeline';
import ContactUs from './Pages/Contact-Us/contact-us';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
