import React, { useContext, useEffect, useState } from "react";
import { FlowerContext } from "./FlowerContext";
// import "./BookPage.css";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "./ReviewForm";

function FlowerPage() {
  const { flowerId} =
    useContext(FlowerContext);
  const [flower, setFlower] = useState([]);
  const [flowerReviews, setFlowerReviews] = useState([]);
  const {  flowerError, trigger } =
  useContext(FlowerContext);



  useEffect(() => {
    fetch(`/flowers/${flowerId}`)
      .then((response) => response.json())
      .then((data) => {
        setFlower(data);
        setFlowerReviews(data.reviews);
      })
      .catch((err) => console.log(err));
  }, [flowerId]);

  return (
    <>
     {flowerError.length > 0
        ? flowerError.map((error, index) => (
            <span key={index} className="error">
              {error}
            </span>
          ))
        : null}
      <div className="book-row">
        <div id="book-image">
          <img src={flower.image_url} alt={flower.name} />
        </div>
        <div id="book-body">
          <h2> {flower.name} </h2>
          <p> {flower.description} </p>
        </div>
      </div>
      <ReviewContainer />
        {trigger ? <ReviewForm /> : null}
    </>
  );
}

export default FlowerPage;
