/** @format */

import React from "react";
import image from "../../assets/couples.jpg";
import cal from "../../assets/calendar.svg";
import time from "../../assets/time.svg";
import location from "../../assets/location.svg";

import styles from "./style.module.css";

export default function Detail({ handleTicket }) {
  return (
    <div className={styles.about}>
      <img src={image} alt='' />

      <div className={styles.container}>
        <h2>Event Details</h2>
        <span>
          Join us for an exclusive Couples Retreat designed to strengthen bonds,
          spark intimacy, and create lasting memories. From{" "}
          <b>4:00 PM Friday to 12:00 PM Saturday</b>, enjoy guided workshops,
          romantic settings, and shared adventures — all in a serene getaway
          made just for you. Reserve your spot today!
        </span>

        <div className={styles.date}>
          <span>
            <img src={cal} alt='' />
            November 7th-8th, 2025
          </span>
          <div>
            {" "}
            <img src={time} alt='' />
            <span> 4pm</span>
          </div>
        </div>

        <div className={styles.place}>
          <span>
            <img src={location} alt='' />
            Golden Jubilee Conference Hotel. Beardmore St, Glasgow, Clydebank
            G81 4SA, United Kingdom
          </span>
        </div>

        <div className={styles.event}>
          <span>£220</span>
          <button onClick={handleTicket}>Get Your Ticket</button>
        </div>
      </div>
    </div>
  );
}
