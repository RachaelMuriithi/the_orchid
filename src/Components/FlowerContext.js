import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantContext = createContext();

function FlowerProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [flowersError, setFlowersError] = useState([]);
  const [flowerId, setFlowerId] = useState(1);
  const [flower, setFlower] = useState({});
  const [flowerError, setFlowerError] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState([]);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch("/flowers");

      const restaurants = await response.json();
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
      const restaurant = await response.json();
      if (response.ok) {
        localStorage.setItem("flowers", JSON.stringify(flower));
        setFlower(flower);
        setLoading(false);
      } else {
        setFlowerError(flower.errors);
      }
    };

    payload();
    // const localRestaurantJson = localStorage.getItem("restaurant");
    // const localRestaurant = localRestaurantJson
    //   ? JSON.parse(localRestaurantJson)
    //   : [];

    // setFoods(localFood);
  }, [flowerId]);

  useEffect(() => {
    const data = localStorage.getItem("flower");
    if (data) {
      setFlower(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const payload = async () => {
      const response = await fetch(`/flowers/${flowerId}/reviews`);

      const reviews = await response.json();
      if (response.ok) {
        setReviews(reviews);
      } else {
        setReviewsError(reviews.errors);
      }
    };

    payload();
  }, [flowerId]);

  // Create functionality for adding a new review
  const [newReview, setNewReview] = useState({
    star_rating: "",
    comment: "",
  });

  const [reviewError, setReviewError] = useState([]);

  function handleReviewChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewReview({ ...newReview, [name]: value });
  }

  async function handleSubmitReview(event) {
    event.preventDefault();

    const response = await fetch(`/flowers/${rflowerId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    const review = await response.json();
    if (response.ok) {
      setReviews([...reviews, review]);
      setNewReview({
        star_rating: "",
        comment: "",
      });
    } else {
      setReviewError(review.errors);
    }
  }

  // end of functionality
  function handleFlower(restaurant) {
    setFlowerId((prevstate) => (prevstate = flower.id));
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
  const [trigger, setTrigger] = useState(false);

  function handleAddReview() {
    setTrigger(true);
  }

  const values = {
    loading,
    flowersError,
    flowers,
    flower,
    rflowerError,
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

    //Add functionality for getting and setting reviews
    reviews,
    reviewsError,

    //Add functionality for getting and setting book
    trigger,
    setTrigger,
    handleAddReview,

    newReview,
    handleReviewChange,
    handleSubmitReview,
  };

  return (
    <FlowerContext.Provider value={values}>
      {children}
    </FlowerContext.Provider>
  );
}

export { FlowerContext, FlowerProvider };