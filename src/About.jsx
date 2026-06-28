import React from "react";
import "./About.css";
import aboutImg from "./images/q5.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
           <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={aboutImg}
              alt="Quartz"
              className="img-fluid about-image"
            />
          </div> 

          {/* Right Content */}
          <div className="col-lg-6">
            <h5 className="about-subtitle">ABOUT US</h5>

            <h2 className="about-title">
              Premium Quality Quartz Raw Materials
            </h2>

            <p className="about-text">
              Quarzon is one of the trusted suppliers of premium quartz raw
              materials. We specialize in providing high-quality quartz
              boulders, lumps, grits, and powder for ceramic, glass,
              engineered stone, foundry, and construction industries.
            </p>

            <p className="about-text">
              Our commitment to quality, timely delivery, and customer
              satisfaction has made us a preferred partner for clients across
              India. Every product is carefully selected to ensure purity,
              durability, and consistent performance.
            </p>

            <div className="row mt-4">

              <div className="col-6">
                <div className="about-box">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-box">
                  <h3>500+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-6 mt-4">
                <div className="about-box">
                  <h3>100%</h3>
                  <p>Quality Products</p>
                </div>
              </div>

              <div className="col-6 mt-4">
                <div className="about-box">
                  <h3>24/7</h3>
                  <p>Customer Support</p>
                </div>
              </div>

            </div>

            <button className="about-btn mt-4" onClick={() => navigate("/readmore")}>
              Read More
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;