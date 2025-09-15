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

  // function Media() {
  //   setisMedia((prev) => !prev);
  //   setIsEngage(false);
  // }

  // function Engage() {
  //   setIsEngage((prev) => !prev);
  //   setisMedia(false);
  // }

  // function closeMedia() {
  //   setisMedia(false);
  //   setIsEngage(false);
  // }

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       !event.target.closest(`.${styles.media}`) &&
  //       !event.target.closest(`.${styles.media2}`) &&
  //       !event.target.closest(`.${styles.lists}`)
  //     ) {
  //       closeMedia(); // Close both dropdowns
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/'>
          {/* <LogoNav /> */}
          <img src={Logo} alt='Logo' />
        </Link>

        {/* <ul className={styles.navul}>
          <Link to='/'>
            <li className={styles.lists}>About Us</li>
          </Link>
          <Link to='/programmes'>
            <li className={styles.lists}>Programmes</li>
          </Link>

          <Link to='/givengo'>
            <li className={styles.lists}>Givengo </li>
          </Link> */}

        {/* <Link to='/Articles'> */}
        {/* <li className={styles.lists}>
            Media{" "}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke='#2B2B2B'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>

          <li className={styles.lists}>
            Engage{" "}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke='#2B2B2B'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul> */}

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
