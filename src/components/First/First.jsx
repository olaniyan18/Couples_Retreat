/** @format */

import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import Slider from "react-slick";
import styles from "./style.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function First({ handleTicket }) {
  const images = [image1, image2, image3, image5, image6];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings} className={styles.slick}>
        {images.map((image, index) => (
          <div key={index}>
            <img className={styles.image} src={image} alt='' />
          </div>
        ))}
      </Slider>

      <div className={styles.container}>
        <h3>
          Couples Retreats: Reconnecting, Refreshing, and Growing Together
        </h3>
        <span>
          In the rush of everyday life, it’s easy for couples to get caught up
          in work, family responsibilities, and endless to-do lists. A couples
          retreat offers the perfect opportunity to step away from the noise and
          focus on what matters most—each other.
        </span>
        <button onClick={handleTicket}>Get a Ticket</button>
      </div>
    </div>
  );
}
