import React from "react";
import Login from './TheLog';
import { useEffect, useState } from 'react';


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
  if (!user) return <Login onLogin={setUser}/>;
  
  return (
    <div className="App">
      <Login/> 
    </div>
  );
}

export default App;
