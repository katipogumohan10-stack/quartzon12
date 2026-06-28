import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ImageSlider from "./Imageslider";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import ReadMore from "./Readmore";
function Home() {
  return (
    <>
      <ImageSlider />
      <About />
       <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/readmore" element={<ReadMore/>}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;