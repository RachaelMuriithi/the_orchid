import React from "react";
// import Logo from "./Logo";
import "./Header.css";
import { Link } from "react-router-dom";
import FlowerContainer from "./FlowerContainer";

export default function Header() {
  return (
    <header>
      <div className="header-div"> <Link to={"/"}>
        <h3 id="home"> Home</h3>
      </Link>
      <Link to={"/flowers"}>
      <h3 id="collection"> Our Collection</h3>
      </Link>
      <Link to={"/reviews"}>
      <h3 id="reviews"> Review Us</h3>
      </Link>
      <Link to={"/login"}>
        <button className="header-login">Login</button>
      </Link>
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link></div>
      
    </header>
  );
}