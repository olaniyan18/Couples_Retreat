/** @format */

import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/vines.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import Slider from "react-slick";
import styles from "./style.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function First({ handleTicket }) {
  const images = [
    {
      image: image1,
      h3: "Couples Retreats: Reconnecting, Refreshing, and Growing Together",
      span: "In the rush of everyday life, it’s easy for couples to get caught up in work, family responsibilities, and endless to-do lists. A couples retreat offers the perfect opportunity to step away from the noise and focus on what matters most—each other.",
      p: "",
    },
    { image: image2, h3: "Like Vines On The Wall", span: "", p: "Psalm 128:3" },
    {
      image: image3,
      h3: "Seminar Location",
      span: "Golden Jubilee Conference Hotel. Beardmore St, Glasgow, Clydebank G81 4SA, United Kingdom",
      p: "",
    },
    {
      image: image5,
      h3: "Date And Time",
      span: "November 7th-8th, 2025 / 4pm",
      p: "",
    },
    {
      image: image6,
      h3: "Contact Omowaare for more information",
      span: "+44 7957 991374",
      p: "",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
  };

  return (
    <div>
      {/* Only one Slider */}
      <Slider {...settings} className={styles.slick}>
        {images.map((data, index) => (
          <div key={index}>
            <img className={styles.image} src={data.image} alt='' />
            <div className={styles.container}>
              <h3>{data.h3}</h3>
              <span>{data.span}</span>
              <p>{data.p}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Ticket Section */}
      <div className={styles.container2}>
        <button onClick={handleTicket}>Get a Ticket</button>
        <span>£220</span>
      </div>
    </div>
  );
}
