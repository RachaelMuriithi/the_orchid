import React, { useContext } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { FlowerContext } from "./FlowerContext";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ReviewCard({  reviewComment, reviewUser, reviewId, reviewStar }) {
  const { handleDeleteReview, user } = useContext(FlowerContext);
  return (
    <div className="review-card">
      <div className="review-info">
        <div className="reviewer-info">
          <h4>{reviewUser.username}</h4>
          <img src={reviewUser.image_url} alt={reviewUser.username} />
        </div>
        {user ? (
        <Icon
          icon="ic:baseline-delete"
          className="delete-icon"
          onClick={() => handleDeleteReview(reviewId)}
        />
        ) : null}
      </div>

      <p> {[...Array(reviewStar)].map((n, index) => (
          <FontAwesomeIcon icon={faStar} className="fa-star" key={index} />
        ))}</p>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;