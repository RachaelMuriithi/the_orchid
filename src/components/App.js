import React, { useEffect, useState } from "react";
// import ReactDOM from'react-dom';
// import './App.css';
import SignUp from "./SignUp/Signupform";
import LoginForm from "./LogIn/Login";
import Login from './LogIn/loginform';



function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
     <SignUp/>
      <LoginForm/>
    </div>
  );
}

export default App;
