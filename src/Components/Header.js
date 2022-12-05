import React from "react";
// import Logo from "./Logo";
// import "./Header.css";
// import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h3> Home</h3>
      </Link>
      <Link to={"/flowers"}>
      <h3> Our Collection</h3>
      </Link>
      <Link to={"/reviews"}>
      <h3> Review Us</h3>
      </Link>
      <Link to={"/login"}>
        <button className="header-login">Login</button>
      </Link>
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link>
    </header>
  );
}