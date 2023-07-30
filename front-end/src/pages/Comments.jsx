import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Comments() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const recipe_id = searchParams.get("recipe_id");
  const user_mail = searchParams.get("user_mail");
  const recipe_title = searchParams.get("recipe_title"); 
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setErrors({});
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    if (rating === 0 || comment === "") {
      setErrors({ rating: rating === 0, comment: comment === "" });
      return;
    }

    const values = {
      user_mail,
      recipe_id,
      rating,
      comment,
      recipe_title, 
    };

    try {
      const response = await axios.post("http://88.200.63.148:3084/Comments", values);
      if (response.status === 200) {
        navigate("/Home");
      } else {
        alert("Failed to submit the comment. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the comment.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <div className="about">
            <h2>Write comment and grade this recipe:</h2>
            <div className="star_rating" style={{ display: "flex", alignItems: "center" }}>
              <h4>Input star rating:</h4>
              <Stars onChange={setRating} />
            </div>

            <textarea
              type="feedback"
              placeholder="What's your feedback?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            {errors.rating && <p className="error">Please select a star rating.</p>}
            {errors.comment && <p className="error">Please provide a comment.</p>}

            <br></br>
            <button
              type="submit"
              className="log_in_btn"
              onClick={handleSubmit}
              disabled={rating === 0 || comment === ""}
            >
              Submit comment and rating stars
            </button>

            <p>Thank you for giving us much appreciated feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;