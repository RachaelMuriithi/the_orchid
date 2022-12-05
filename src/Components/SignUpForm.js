
import React, { useState } from "react";

function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  function handleSubmit(e, {setShowLogin}) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
       r.json().then(console.log(r)) 
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((errors) => setErrors(errors));
      }
    });
  }
  return (
    <form className="mainpage" onSubmit={handleSubmit}>
      <div className= "signup" >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="imageUrl">Profile Image</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      <div>
         {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
        </div>
       </div>
    </form>
  );
}


export default SignUp;