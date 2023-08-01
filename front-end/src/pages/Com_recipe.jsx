import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Stars_displayed from "../components/Stars_displayed";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Com_recipe() {
  const navigate = useNavigate();
  const { recipe_title } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments?recipe_title=${encodeURIComponent(recipe_title)}`);
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching comments. Please try again later.");
        setLoading(false);
      }
    };

    fetchComments();
  }, [recipe_title]);

  async function back() {
    navigate('/Commented', { replace: true });
  }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <div className="about">
            <h2>
              Comments for recipe: <br /> {recipe_title}
            </h2>
            {comments.length === 0 ? (
              <h4>No comments for this recipe were yet made.</h4>
            ) : (
              <>
                {comments.map((comment) => (
                  <ul key={comment.rating}>
                    <h4>User Mail: {comment.user_mail}</h4>
                    <h4>User rating and comment:</h4>
                    <Stars_displayed rating={comment.rating} hover={hover} readOnly />
                    <p>{comment.comment}</p>
                  </ul>
                ))}
              </>
            )}
            <button type="submit" onClick={back} className="submit_btn">
              Go back to Commented recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Com_recipe;