import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ImageSlider from "./Imageslider";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
import ReadMore from "./Readmore";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

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

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <div className="inner-page">
              <About />
            </div>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <div className="inner-page">
              <Services />
            </div>
          }
        />

        {/* Read More Page */}
        <Route
          path="/readmore"
          element={
            <div className="inner-page">
              <ReadMore />
            </div>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <div className="inner-page">
              <Contact />
            </div>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;