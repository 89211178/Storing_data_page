import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Stars_displayed from "../components/Stars_displayed";
import { useNavigate } from "react-router-dom";

function View_comments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recipeTitleParam = new URLSearchParams(window.location.search).get("recipe_title");
  const recipeTitle = recipeTitleParam ? decodeURIComponent(recipeTitleParam) : "";
  const [hover, setHover] = useState(null);

  useEffect(() => {  
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://88.200.63.148:3084/api/comments?recipe_title=${encodeURIComponent(recipeTitle)}`);
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching comments. Please try again later.");
        setLoading(false);
      }
    };

    fetchComments();
  }, [recipeTitle]);

  async function back() {
    navigate("/Commented", { replace: true });
  }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <div className="about">
            <h2>Comments for recipe:
              <br /> {recipeTitle}</h2>
            {comments.length === 0 ? (
              <h4>No comments for this recipe were yet made.</h4>
            ) : (
              <>
                {comments.map((comment) => (
                  <ul key={comment.com_id}>
                    <h4>User Mail: {comment.user_mail}</h4>
                    <h4>User rating and comment:</h4>
                    <Stars_displayed rating={comment.rating} hover={hover} readOnly />
                    <p>{comment.comment}</p>
                  </ul>
                ))}
              </>
            )}
            <button type="submit" onClick={back} className="save_changes_btn">Go look at your own comments</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_comments;