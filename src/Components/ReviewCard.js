import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import "./Review.css";
function ReviewCard({  reviewStarRating, reviewComment, reviewUser, setFlowerReviews, reviewId}) {

  function handleDelete(Id) {
    fetch(`reviews/id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>
        setFlowerReviews((prevState) =>
          prevState.filter((review) => review.id !== data.id)
        )
      )
      .catch((error) => console.log(error));
  }
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <h4>{reviewUser.username}</h4>
        <div className="btn-container">
            <button onClick={() => handleDelete()} className="">
              <FontAwesomeIcon icon={faTrash} className="btn-ic2" />
            </button>
          </div>
        <img src={reviewUser.image_url} alt={reviewUser.username} />
      </div>
      <p>
        {[...Array(reviewStarRating)].map((n, index) => (
          <FontAwesomeIcon icon={faStar} className="fa-star" key={index} />
        ))}
        </p>
      <p>{reviewComment}</p>
    </div>
  );
}

export default ReviewCard;