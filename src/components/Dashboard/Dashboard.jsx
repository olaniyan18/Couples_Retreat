/** @format */
import styles from "./style.module.css";
import image from "../../assets/Logo.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Dashboard() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "payments"));
        const allPayments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPayments(allPayments);
      } catch (error) {
        console.error("Error fetching payments: ", error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.div}>
        <img src={image} alt='' />
        <span>Fountain of Living Water Ayr</span>
      </div>

      <div>
        <div className={styles.grid}>
          <span>First Name</span>
          <span>Last Name</span>
          <span>Email Address</span>
          <span>Quantity</span>
          <span>Price(£)</span>
        </div>

        {payments.map((data, index) => (
          <div key={data.id || index} className={styles.grid2}>
            <span>{data.details.first_name}</span>
            <span>{data.details.last_name}</span>
            <span>{data.details.email_address}</span>
            <span>{data.quantity}</span>
            <span>{data.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
