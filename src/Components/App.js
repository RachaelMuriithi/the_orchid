import { Route, Routes } from "react-router-dom";
// import Footer from "./Footer";
import Header from "./Header";
import ViewPage from "./viewPage";
import LoginForm from "./LogInForm";
import FlowerContainer from "./FlowerContainer";
import { FlowerProvider } from "./FlowerContext";
import SignUp from "./SignUpForm";
import FlowerPage from "./FlowerPage";
import ReviewContainer from "./ReviewContainer";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { FlowerContext } from "./FlowerContext";



function App() {

  // const { user, setUser } = useContext(FlowerContext);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((loggedUser) => setUser(loggedUser));
  //     }
  //   });
  // }, [setUser]);

  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">

      <FlowerProvider>
      <Header />
        <Routes>
          <Route path="/" element={ <ViewPage/>}/>
          <Route path="/flowers" element={<FlowerContainer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/flowers/:id" element={<FlowerPage />} />
          <Route
            path="/reviews"
            element={<ReviewContainer />}
          />
        </Routes>
      </FlowerProvider>
    
    </div>
     
  );
}

export default App;