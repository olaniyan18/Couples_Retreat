/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Program() {
  return (
    <div className={styles.program}>
      <h2>PROGRAM OUTLINE</h2>
      <div className={styles.grid}>
        <div>
          <label htmlFor=''>FRIDAY</label>
          <span> Registration: 4pm</span>
          <span>Red Carpet: 5pm</span>
          <span>
            Start off (Introduction, Welcome address, how well do you know?,
            Seminar 1, Games, Couple's Dance, Prize giving etc): 6pm
          </span>
          <span>Dinner: 7-8pm</span>
          <span> Then program continues till 11pm - Bed time</span>
        </div>

        <div>
          <label htmlFor=''> SATURDAY</label>
          <span> Exercise: 7am-8am</span>
          <span>Breakfast: 8am-9am</span>
          <span>Dress up: 9am-10am </span>
          <span>Seminar2: 10am-12pm </span>
          <span>Q&A: 12pm </span>
          <span>Closing</span>{" "}
        </div>
      </div>
    </div>
  );
}
