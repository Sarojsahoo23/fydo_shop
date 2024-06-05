import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Nav.module.css";
import img from "../../images/img1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={img} className={style.logo} alt="Logo" />
        </NavLink>
        <div className={style.hamburger} onClick={toggleMenu}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <ul className={isOpen ? style.navMenu + " " + style.open : style.navMenu}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
