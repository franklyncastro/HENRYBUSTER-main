import React from "react";
import style from "../Styles/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link className={style.link} to="/home">Home</Link>
      <Link className={style.link} to="/movies">Detail</Link>
      <Link className={style.link} to="/">Salir</Link>
    </nav>
  );
};

export default Nav;
