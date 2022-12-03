import React from "react";
import "./LogIn.css";

export default function LoginForm() {
  return (
    <div className="login-div">
      <form className="login-form">
        <label htmlFor="username"> Username</label>
        <br />
        <input
          type="text"
          name="username"
          className="login-input"
          autoComplete="off"
        />
        <br />
        <label htmlFor="password"> Password</label>
        <br />
        <input
          type="password"
          name="password"
          className="login-input"
          autoComplete="current-password"
        />
        <br />
        <button type="submit" className="login-btn">
          Login
        </button>
        <span id="signup-section"> Don't have an account? SignUp</span>
      </form>
    </div>
  );
}