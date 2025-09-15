/** @format */

import React from "react";
import image from "../../assets/about.png";
import styles from "./style.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2>About Couples Retreat</h2>
        <span>
          Couples Retreats are specially designed getaways that give partners
          the space to reconnect, strengthen their bond, and rediscover
          intimacy. These retreats often include activities such as guided
          therapy sessions, communication workshops, mindfulness practices,
          adventure experiences, or simply quiet moments together in a serene
          setting. Whether you’re looking to heal, grow, or just enjoy
          uninterrupted time with your partner, a couples retreat offers the
          perfect balance of relaxation and renewal.
        </span>
      </div>

      <img src={image} alt='' />
    </div>
  );
}
