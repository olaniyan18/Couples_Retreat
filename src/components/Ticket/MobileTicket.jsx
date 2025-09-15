/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import cancel from "../../assets/cancel.svg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import copy from "../../assets/copy.svg";

export default function MobileTicket() {
  const [quantity, setQuantity] = useState(1);
  const price = 220;

  function ConfirmPay() {
    alert(`You selected ${quantity} ticket(s). Total: £${quantity * price}`);
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={styles.ticket}>
      <div className={styles.preview}>
        <span>Ticket Preview</span>
        <Link to={-1}>
          {" "}
          <img src={cancel} alt='' />
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.quantity}>
            <div>
              <span>Quantity</span>
              {/* Decrease */}
              <div onClick={handleDecrease}>
                <svg
                  style={{ cursor: "pointer" }}
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.7895 10C15.7895 10.2895 15.5526 10.5263 15.2632 10.5263H4.73684C4.44737 10.5263 4.21053 10.2895 4.21053 10C4.21053 9.71053 4.44737 9.47368 4.73684 9.47368H15.2632C15.5526 9.47368 15.7895 9.71053 15.7895 10ZM20 10C20 15.5263 15.5263 20 10 20C4.47368 20 0 15.5263 0 10C0 4.47368 4.47368 0 10 0C15.5263 0 20 4.47368 20 10ZM18.9474 10C18.9474 5.05263 14.9474 1.05263 10 1.05263C5.05263 1.05263 1.05263 5.05263 1.05263 10C1.05263 14.9474 5.05263 18.9474 10 18.9474C14.9474 18.9474 18.9474 14.9474 18.9474 10Z'
                    fill='#1D2E2E'
                  />
                </svg>
              </div>

              {/* Quantity */}
              <span>{quantity}</span>

              {/* Increase */}
              <svg
                style={{ cursor: "pointer" }}
                width='20'
                height='20'
                onClick={handleIncrease}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.7895 10C15.7895 10.2895 15.5526 10.5263 15.2632 10.5263H10.5263V15.2632C10.5263 15.5526 10.2895 15.7895 10 15.7895C9.71053 15.7895 9.47368 15.5526 9.47368 15.2632V10.5263H4.73684C4.44737 10.5263 4.21053 10.2895 4.21053 10C4.21053 9.71053 4.44737 9.47368 4.73684 9.47368H9.47368V4.73684C9.47368 4.44737 9.71053 4.21053 10 4.21053C10.2895 4.21053 10.5263 4.44737 10.5263 4.73684V9.47368H15.2632C15.5526 9.47368 15.7895 9.71053 15.7895 10ZM20 10C20 15.5263 15.5263 20 10 20C4.47368 20 0 15.5263 0 10C0 4.47368 4.47368 0 10 0C15.5263 0 20 4.47368 20 10ZM18.9474 10C18.9474 5.05263 14.9474 1.05263 10 1.05263C5.05263 1.05263 1.05263 5.05263 1.05263 10C1.05263 14.9474 5.05263 18.9474 10 18.9474C14.9474 18.9474 18.9474 14.9474 18.9474 10Z'
                  fill='#1D2E2E'
                />
              </svg>
            </div>

            {/* Description */}
            <span className={styles.more}>
              Unlimited food & drinks, souvenirs, raffle draw <br />
              and lots more...
            </span>

            {/* Dynamic price */}
            <span className={styles.amount}>£{quantity * price}</span>
          </div>

          {/* Bank Details */}
          <div className={styles.bank}>
            <div className={styles.name}>
              <label>Bank Name: </label>
              <span>Barclays</span>
            </div>
            <div className={styles.name}>
              <label>Account Number: </label>
              <span>
                53901742
                <img
                  src={copy}
                  onClick={() => {
                    navigator.clipboard.writeText("53901742");
                    toast.success("copied to clipboard");
                  }}
                  alt=''
                />
              </span>
            </div>
            <div className={styles.name}>
              <label>Sort code: </label>
              <span>
                20-25-96{" "}
                <img
                  src={copy}
                  onClick={() => {
                    navigator.clipboard.writeText("20-25-96");
                    toast.success("copied to clipboard");
                  }}
                  alt=''
                />
              </span>
            </div>
            <div className={styles.name}>
              <label>Account Name: </label>
              <span>Omowaare Olaniyan</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={styles.form}>
          <div className={styles.first}>
            <div className={styles.span}>
              <span>First Name</span>
              <input type='text' />
            </div>
            <div className={styles.span}>
              <span>Last Name</span>
              <input type='text' />
            </div>
          </div>
          <div className={styles.span}>
            <span>Email Address</span>
            <input type='email' />
          </div>
          <div className={styles.span}>
            <button onClick={ConfirmPay}>Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
