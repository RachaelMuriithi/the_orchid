import React from "react";
// import "./Review.css";
function ReviewCard({  reviewStarRating, reviewComment, reviewUser }) {
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <h4>{reviewUser.username}</h4>
        <img src={reviewUser.image_url} alt={reviewUser.username} />
      </div>
      <p>{reviewStarRating}</p>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;