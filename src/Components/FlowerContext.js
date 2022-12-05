import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FlowerContext = createContext();

function FlowerProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [flowersError, setFlowersError] = useState([]);
  const [flowerId, setFlowerId] = useState(1);
  const [flower, setFlower] = useState({});
  const [flowerError, setFlowerError] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch("/flowers");

      const flowers = await response.json();
      if (response.ok) {
        setFlowers(flowers);
        setLoading(false);
      } else {
        setFlowersError(flowers.errors);
      }
    };

    // Function call
    payload();
  }, []);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(`/flowers/${flowerId}`);
      const flower = await response.json();
      if (response.ok) {
        localStorage.setItem("flower", JSON.stringify(flower));
        setFlower(flower);
        setLoading(false);
      } else {
        setFlowerError(flower.errors);
      }
    };
    payload();
  }, [flowerId]);

  useEffect(() => {
    const payload = async () => {
      const response = await fetch(`/flowers/${flowerId}`);

      const reviews = await response.json();
      if (response.ok) {
       setReviews(reviews);
      }
    };

    payload();
  }, [flowerId]);

  // const localRestaurantJson = localStorage.getItem("restaurant");
  // const localRestaurant = localRestaurantJson
  //   ? JSON.parse(localRestaurantJson)
  //   : [];

  function handleFlower(flower) {
    setFlowerId(flower.id);
    navigate(`/flowers/${flower.id}`);
  }

  // start of sign up functionality
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    image_url: "",
    password_confirmation: "",
    bio: "",
  });

  const [signupError, setSignupError] = useState([]);
  const [signupLoading, setSignupLoading] = useState(false);

  function handleSignupChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData({ ...signupData, [name]: value });
  }

  async function handleSubmitSignupDetails(event) {
    event.preventDefault();
    setSignupLoading(true);
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });

    const userData = await response.json();
    if (response.ok) {
      setSignupData(userData);
      setSignupError([]);
      setSignupLoading(false);
      navigate("/");
      setSignupData({
        username: "",
        password: "",
        image_url: "",
        password_confirmation: "",
        bio: "",
      });
    } else {
      setSignupError(userData.errors);
      setSignupLoading(false);
    }
  }
  // end of sign up functionality

  // Start of adding Login functionality
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleSubmitLoginDetails(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const userData = await response.json();

    if (response.ok) {
      setIsLoading(false);
      setUser(userData);
      setLoginError([]);
      setLoginData({
        username: "",
        password: "",
      });
      navigate("/");
    } else {
      setLoginError(userData.errors);
    }
  }
  // End of Login functionality

  const values = {
    loading,
    flowersError,
    flowers,
    flower,
    flowerError,
    handleFlower,
    // State and functions for login
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    loginData,
    isLoading,
    // State and functions for sign up
    handleSignupChange,
    handleSubmitSignupDetails,
    signupData,
    signupError,
    signupLoading,
  };
  return (
    <FlowerContext.Provider value={values}>
      {children}
    </FlowerContext.Provider>
  );
}

export { FlowerContext, FlowerProvider };