/** @format */

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function MobileNav({ isSidebarVisible, onClose, logo }) {
  const [isOpen, setIsOpen] = useState(false);
  function mediaDropdown() {
    setIsOpen((prev) => !prev);
  }

  const [isEngage, setIsEngage] = useState(false);
  function engageDropdown() {
    setIsEngage((prev) => !prev);
  }
  return (
    <div
      className={`${styles.sidebar} ${
        isSidebarVisible ? styles.active : styles["fade-out"]
      }`}
    >
      <div className={styles.imageclose}>
        <Link
          to='/'
          onClick={() => {
            onClose();
          }}
        >
          <img src={logo} alt='' />{" "}
        </Link>
        <a className='dropdown-close' onClick={onClose}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
              stroke='#2B2B2B'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>

      <ul className={styles.sidebarmenu}>
        <Link to='/' onClick={onClose}>
          <li className={styles.sidebarlist}>About Us </li>
        </Link>
        <hr />
        <Link
          to='/programmes'
          onClick={() => {
            onClose();
          }}
        >
          <li className={styles.sidebarlist}>Programmes</li>
        </Link>
        <hr />
        <Link to='/givengo' onClick={onClose}>
          <li className={styles.sidebarlist}>Givengo </li>
        </Link>
        <hr />
        <li className={styles.sidebarlist} onClick={mediaDropdown}>
          Media{" "}
          <svg
            onClick={mediaDropdown}
            className={`${styles.dropDownIcon} ${isOpen ? styles.rotate : ""}`}
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 18.5L15 12.5L9 6.5'
              stroke='#2B2B2B'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </li>

        {isOpen && (
          <div className={styles.dropdown}>
            <span>
              <Link to='/partners' onClick={onClose}>
                {" "}
                Partners
              </Link>
            </span>
            <span>
              <Link to='/newsroom' onClick={onClose}>
                Newsroom
              </Link>
            </span>
            <span>
              <Link to='/gallery' onClick={onClose}>
                Gallery
              </Link>
            </span>
            <span>
              <Link to='/reports' onClick={onClose}>
                Featured Reports
              </Link>
            </span>
          </div>
        )}
        <hr />
        {/* <Link to='/contactus'> */}
        <li className={styles.sidebarlist} onClick={engageDropdown}>
          Engage
          <svg
            onClick={engageDropdown}
            className={`${styles.dropDownIcon} ${
              isEngage ? styles.rotate : ""
            }`}
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 18.5L15 12.5L9 6.5'
              stroke='#2B2B2B'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </li>

        {isEngage && (
          <div className={styles.dropdown}>
            <span>
              <Link to='/volunteer' onClick={onClose}>
                Volunteer
              </Link>
            </span>
            <span>
              <Link to='/refer' onClick={onClose}>
                Refer a Non-profit
              </Link>
            </span>

            <span>
              <Link
                to='/contactus'
                onClick={() => {
                  onClose();
                }}
              >
                Contact Us
              </Link>
            </span>
          </div>
        )}
        {/* </Link> */}
      </ul>
    </div>
  );
}
