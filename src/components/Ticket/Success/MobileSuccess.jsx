/** @format */
import gif from "../../../assets/Success.gif";
import styles from "../style.module.css";

export default function MobileSuccess() {
  return (
    <div className={styles.mobile}>
      <img src={gif} alt='' />
      <p>
        Thank you for your interest in the Couples Retreat. You’ll receive an
        email shortly with your ticket details.
      </p>
    </div>
  );
}
