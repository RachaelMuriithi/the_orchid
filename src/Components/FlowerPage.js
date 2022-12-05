import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
// import "./FlowerPage.css";


export default function FlowerPage() {
  const { flower, flowerError } = useContext(FlowerContext);



  return (
    <>
      {flowerError.length > 0
        ? flowerError.map((error) => <span className="error">{error}</span>)
        : null}
      <div className="flower-page">
        <div className="flower-info">
          <img src={flower.image_url} alt={flower.name} />
          <h2> {flower.name} </h2> <p> {flower.description} </p>
        </div>
      </div>
    </>
  );
}