import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faOutdent,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const navRef = useRef(null);

  const handleClick = (name) => {
    setActiveLink(name);
    handleClose(); 
  };

  const handleOpen = () => {
    navRef.current.classList.add(styles.active);
  };

  const handleClose = () => {
    navRef.current.classList.remove(styles.active);
  };

  return (
    <section id={styles.header}>
      <NavLink to="/">
        <img src="/img/logo.png" className={styles.logo} alt="" />
      </NavLink>

      <div>
        <ul id={styles.navbar} ref={navRef}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("Shop")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("Blog")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("About")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </NavLink>
          </li>
          <li id={styles["lg-bag"]}>
            <NavLink
              to="/Card"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleClick("Card")}
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </NavLink>
          </li>
          <a href="#" id={styles.close} onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </ul>
      </div>

      <div id={styles.mobile}>
        <NavLink
          to="/Card"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => handleClick("Card")}
        >
          <FontAwesomeIcon className={styles.i} icon={faBagShopping} />
        </NavLink>
        <FontAwesomeIcon
          id={styles.bar}
          onClick={handleOpen}
          className={styles.i}
          icon={faOutdent}
        />
      </div>
    </section>
  );
};

export default Header;
