import { useState } from "react";
import SignUp from "./SignUp/Signupform";
import LoginForm from "./LogIn/Login";

function Login({ onLogin }) {
const [showLogin, setShowLogin] = useState(true);
  
    return (
      <div>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <div />
            <p>
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUp onLogin={onLogin} />
            <div />
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
        </div>
    );
  }
  export default Login;