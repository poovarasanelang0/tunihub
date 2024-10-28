import React, { useState, useEffect } from "react";
import "./Home.css";
import logo1 from "./Assets/men2.webp";
import logo2 from "./Assets/1img.jpg";
import logo3 from "./Assets/2ndimg.jpeg";
import logo4 from "./Assets/3img.jpeg";
import wholesaleVideo from "./Assets/wholevideos.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import brand1 from "./Assets/barnd1.jpeg";
import brand2 from "./Assets/barnd2.png";
import brand3 from "./Assets/brand3.png";
import brand4 from "./Assets/barnd4.png";
import brand5 from "./Assets/brand5.png";
import brand6 from "./Assets/brand6.png";
import brand7 from "./Assets/barnd7.jpeg";
import brand8 from "./Assets/barnd8.png";
import brand9 from "./Assets/barnd9.png";

import Marquee from "react-fast-marquee";

















const ProductList = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    {
      id: 1,
      image: logo1,
      description: "Product 1 Description",
      price: "$29.99",
    },
    {
      id: 2,
      image: logo2,
      description: "Product 2 Description",
      price: "$39.99",
    },
    {
      id: 3,
      image: logo3,
      description: "Product 3 Description",
      price: "$49.99",
    },
    {
      id: 4,
      image: logo4,
      description: "Product 4 Description",
      price: "$59.99",
    },
    {
      id: 5,
      image: logo1,
      description: "Product 5 Description",
      price: "$29.99",
    },
    {
      id: 6,
      image: logo4,
      description: "Product 6 Description",
      price: "$59.99",
    },
  ];

  return (
    <>
      <div
        className="hero-section"
        style={{
          position: "relative",
          height: "60vh",
          overflow: "hidden",
          marginTop: "20vh",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            zIndex: "-1",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        >
          <source src={wholesaleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container h-100 d-flex flex-column justify-content-center text-white">
          <h1 className="display-4 text-center text_heading">
            Welcome to Our{" "}
            <span className="wholesale">
              {" "}
              <ReactTyped
                strings={["Wholesale Clothing TUNi"]}
                loop
                typeSpeed={40}
              />
            </span>
          </h1>
          <p className="lead text-center p_tag_contant">
            High-quality clothing at unbeatable prices. Discover the latest
            trends and styles!
          </p>
          <div className="text-center shop_button">
            <button className="btn ">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="container-fluid my-2 mt-lg-5">
        <div className="row my-2 mt-lg-5">
          <h3 className="headingproduct">Our Products</h3>
          {isSmallScreen ? (
            <Carousel>
              {products.map((product) => (
                <Carousel.Item key={product.id}>
                  <div
                    className="card text-center product-card mt-3"
                    style={{ height: "50vh" }}
                  >
                    <img
                      src={product.image}
                      alt={`card${product.id}`}
                      className="img-fluid card-img-top"
                      style={{ height: "35vh" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.description}</h5>
                      <p className="card-text">{product.price}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">View Number</button>
                        <button className="btn btn-success">
                          Get Best Price
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            products.map((product) => (
              <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                <div
                  className="card product-card mt-5"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                  style={{ height: "75vh" }}
                >
                  <img
                    src={product.image}
                    alt={`card${product.id}`}
                    className="img-fluid card-img-top"
                    style={{ height: "50vh" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.description}</h5>
                    <p className="card-text">{product.price}</p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary buttonall">
                        View Number
                      </button>
                      <button className="btn btn-success buttonall">
                        Get Best Price
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row ">
          <h3>Explore related products from Premium Brands
</h3>
          <div className="col">
            <div className="d-flex  justify-content-evenly">
            <Marquee>

           
            <img src={brand9} className="img-fluid px-5" alt="" />
            <img src={brand2} className="img-fluid px-5" alt="" />

            <img src={brand3} className="img-fluid px-5" alt="" />

            <img src={brand4} className="img-fluid px-5" alt="" />

            <img src={brand5} className="img-fluid px-5" alt="" />

            <img src={brand6} className="img-fluid px-5" alt="" />

            <img src={brand7} className="img-fluid px-5" alt="" />

            <img src={brand8} className="img-fluid px-5" alt="" />
            </Marquee>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductList;
