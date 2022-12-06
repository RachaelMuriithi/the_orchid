import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import FlowerCard from "./FlowerCard";
// import "./FlowerContainer.css";
import FlowerUpdate from "./FlowerUpdate";

function FlowerContainer() {
  const {flowers, flowersError, isPending, trigger } =
    useContext(FlowerContext);

  const flowerList = flowers.map ((flower) => (
    <FlowerCard
      key={flower.id}
      flowerName={flower.name}
      flowerImage={flower.image_url}
      flowerDescription={flower.description}
      flower={flower}
    />
  ));
  return (
    <div className="flower-container">
      {flowersError.length > 0
        ? flowersError.map((error) => (
            <span className="error-message" key={error}>
              {error}
            </span>
          ))
        : null}
      {isPending ? <h2>Loading...</h2> : flowerList}
    </div>
  );
}

export default FlowerContainer;