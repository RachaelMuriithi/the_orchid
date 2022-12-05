import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ViewPage from "./viewPage";
import LoginForm from "./LogInForm";
import FlowerContainer from "./FlowerContainer";
import { FlowerProvider } from "./FlowerContext";
import SignUp from "./SignUpForm";
import FlowerPage from "./FlowerPage";
import ReviewContainer from "./ReviewContainer";



function App() {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

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
            path="/flowers/:id"
            element={<ReviewContainer />}
          />
        </Routes>
      </FlowerProvider>
      <Footer />
    </div>
     
  );
}

export default App;