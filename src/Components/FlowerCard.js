import React, { useContext } from "react";
// import { Icon } from "@iconify/react";
// import "./FlowerContainer.css";
import { FlowerContext } from "./FlowerContext";

function FlowerCard({
  flower,
  flowerName,
  flowerImage,
  flowerDescription
}) {
  const { handleFlower } = useContext(FlowerContext);

  return (
    <div className="flower-card">
      <div className="flower-img">
        <img src={flowerImage} alt={flowerName} />
      </div>
      <div className="orchid-info">
        <h3 onClick={() => handleFlower(flower)}>{flowerName}</h3>
        <p>{flowerDescription}</p>
      </div>
    </div>
  );
}

export default FlowerCard;