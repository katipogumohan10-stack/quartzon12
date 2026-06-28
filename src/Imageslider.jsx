import Carousel from "react-bootstrap/Carousel";
import "./Imageslider.css";

import img1 from "./images/q1.png";
import img2 from "./images/q2.png";
import img3 from "./images/q3.png";
import img4 from "./images/q4.png";

function ImageSlider() {
  return (
    <Carousel fade interval={3000} controls indicators pause={false}>
      <Carousel.Item>
        <img className="slider-img" src={img1} alt="Quartz 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="slider-img" src={img2} alt="Quartz 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="slider-img" src={img3} alt="Quartz 3" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="slider-img" src={img4} alt="Quartz 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;