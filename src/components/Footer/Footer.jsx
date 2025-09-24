/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      © Fountain of Living Water Ayr 2025. All rights reserved
      <span>
        {" "}
        if you have any complaint, kindly send a mail to{" "}
        <p>info@fountainoflivingwater.org.uk</p>
      </span>
    </div>
  );
}
