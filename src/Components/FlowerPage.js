import React, { useContext, useState } from "react";
import { FlowerContext } from "./FlowerContext";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "./ReviewForm";
// import "./FlowerPage.css";

export default function FlowerPage() {
  const { flowers, flowerError, trigger } = useContext(FlowerContext);
  
  return (
    <>
      {flowerError.length > 0
        ? flowerError.map((error, index) => (
            <span key={index} className="error">
              {error}
            </span>
          ))
        : null}
      <div className="flower-page">
        <div className="flower-info">
          <img src={flowers.image_url} alt={flowers.name} />
          <h2> {flowers.name} </h2> <p> {flowers.description} </p>
        </div>
        <ReviewContainer  />
        {trigger ? <ReviewForm /> : null}
      </div>
    </>
  );
}