import { useState } from "react";
import SignUp from "./SignUpForm";
import LoginForm from "./LogInForm";
import "./TheLog.css";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="landingpage">
      <div className="signups">
      <h2><span>T</span>heOrchid</h2>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <div />
            <p id="para">
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
    </div>
  );
}
export default Login;
