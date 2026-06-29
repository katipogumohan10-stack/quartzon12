import Carousel from "react-bootstrap/Carousel";
import "./Imageslider.css";

import img1 from "./images/q1.png";
import img2 from "./images/q2.png";
import img3 from "./images/q3.png";
import img4 from "./images/q4.png";

function ImageSlider() {
  return (
    <div className="slider-page">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Premium Silica Quartz</h1>
            <p>Delivering High Quality Quartz Worldwide</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Trusted Mining Company</h1>
            <p>Reliable Supply • Premium Quality</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Industrial Quartz Solutions</h1>
            <p>Serving Glass, Ceramics & Construction Industries</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={img4}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Trusted Mining Company</h1>
            <p>Reliable Supply • Premium Quality</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default ImageSlider;