/** @format */

import React from "react";
import Payment from "./components/payment";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import styles from "./components/payment.module.css";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import MobileTicket from "./components/Ticket/MobileTicket";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Payment />} />
        <Route path='/ticket' element={<MobileTicket />} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        icon={false}
        transition={Zoom}
        closeButton={false}
        className={styles.toast}
      />
    </HashRouter>
  );
}
