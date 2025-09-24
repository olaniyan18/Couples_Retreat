/** @format */

import React from "react";
import Payment from "./components/Payment";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import styles from "./components/payment.module.css";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import MobileTicket from "./components/Ticket/MobileTicket";
import MobileSuccess from "./components/Ticket/Success/MobileSuccess";
import Dashboard from "./components/Dashboard/Dashboard";
import Context from "./components/Context";

export default function App() {
  return (
    <Context>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Payment />} />
          <Route path='/ticket' element={<MobileTicket />} />
          <Route path='/success' element={<MobileSuccess />} />
          <Route path='/dashboard' element={<Dashboard />} />
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
    </Context>
  );
}
