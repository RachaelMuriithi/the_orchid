import React, { useContext } from "react";
import "./Review.css";
import { Icon } from "@iconify/react";
import { FlowerContext } from "./FlowerContext";

function ReviewCard({ reviewName, reviewComment, reviewUser, reviewId, starRating }) {
  const { handleDeleteReview } = useContext(FlowerContext);
  return (
    <div className="review-card">
      <div className="review-info">
        <div className="reviewer-info">
          <h4>{reviewUser.username}</h4>
          <img src={reviewUser.image_url} alt={reviewUser.username} />
        </div>
        <Icon
          icon="ic:baseline-delete"
          className="delete-icon"
          onClick={() => handleDeleteReview(reviewId)}
        />
      </div>

      <h3> {reviewName}</h3>
      <p>{starRating}</p>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;