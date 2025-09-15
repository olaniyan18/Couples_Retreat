/** @format */

import React, { useState } from "react";
import { toast } from "react-toastify";
import NavBar from "./Navbar/NavBar";
import First from "./First/First";
import About from "./About/About";
import Expect from "./Expect/Expect";
import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
import Ticket from "./Ticket/Ticket";
import MobileTicket from "./Ticket/MobileTicket";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [isMobileTicket, setIsMobileTicket] = useState(false);
  const [isTicket, setIsTicket] = useState(false);

  const navigate = useNavigate();
  function handleTicket() {
    if (window.innerWidth <= 768) {
      navigate("/ticket");
    } else {
      setIsTicket(true);
    }
  }

  function closeTicket() {
    setIsTicket(false);
    setIsMobileTicket(false);
  }
  return (
    <>
      <NavBar handleTicket={handleTicket} closeTicket={closeTicket} />
      <First handleTicket={handleTicket} />
      <About />
      <Expect />
      <Detail handleTicket={handleTicket} />
      <Footer />

      {isTicket && <Ticket closeTicket={closeTicket} />}
      {/* {isMobileTicket && (
        <MobileTicket handleTicket={handleTicket} closeTicket={closeTicket} />
      )} */}
    </>
  );
}
