import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function FlowerCard({ flowerImage, flowerName,flowerDescription, flower }) {
  const {setFlowers,} =
    useContext(FlowerContext);
    function handleDeleteFlower (flower){
      fetch(`flowers/:id`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {});
      setFlowers((prevFlowers) =>
        prevFlowers.filter((flower) => flower.id !== flower.id)
      );
    }
    
    
  return (
    <div className="flower-card">
      <div className="flower-img">
        <img src={flowerImage} alt={flowerName} 
        />
      </div>
      <div className="orchid-info">
        <h3 >{flowerName}</h3>
        <p>{flowerDescription}</p>
      </div>
      <div className="action-btn">
        <button className="delete-btn" onClick={() => handleDeleteFlower(flower)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default FlowerCard;