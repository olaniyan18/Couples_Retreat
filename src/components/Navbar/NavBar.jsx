/** @format */

import React, { use, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/Logo.jpg";

import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function NavBar({ handleTicket }) {
  const location = useLocation();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [isMedia, setisMedia] = useState(false);

  const [isEngage, setIsEngage] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/'>
          {/* <LogoNav /> */}
          <img src={Logo} alt='Logo' />
          <span>Fountain of Living Water Ayr</span>
        </Link>

        <span className={styles.book} onClick={handleTicket}>
          Get a Ticket
        </span>

        <MobileNav
          onClose={onClose}
          isSidebarVisible={isSidebarVisible}
          logo={Logo}
        />
      </nav>
    </header>
  );
}
