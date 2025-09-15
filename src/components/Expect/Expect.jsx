/** @format */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./style.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/expect1.png";
import image2 from "../../assets/expect1.webp";
import image3 from "../../assets/expect3.png";
import image4 from "../../assets/expect4.jpg";
import image5 from "../../assets/expect5.jpeg";

export default function Expect() {
  const info = [
    { image: image1, text: "Red Carpet" },
    { image: image2, text: "Games" },
    { image: image3, text: "Couple's Dance" },
    { image: image4, text: "Seminar" },
    { image: image5, text: "Prize giving" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.expect}>
      <h2>What to Expect</h2>

      {isMobile ? (
        <div className={styles.mobileList}>
          {info.map((data, index) => (
            <div key={index} className={styles.container}>
              <img src={data.image} alt='' />
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {info.map((data, index) => (
            <div key={index} className={styles.container}>
              <img src={data.image} alt='' />
              <span>{data.text}</span>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
