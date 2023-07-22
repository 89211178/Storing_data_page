import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Stars_displayed from "../components/Stars_displayed";

function View_comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recipeTitleParam = new URLSearchParams(window.location.search).get("recipe_title");
  const recipeTitle = recipeTitleParam ? decodeURIComponent(recipeTitleParam) : "";
  const [hover, setHover] = useState(null); // New state to manage hover

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://88.200.63.148:3082/api/comments?recipe_title=${encodeURIComponent(recipeTitle)}`);
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
              <ul>
                {comments.map((comment) => (
                  <li key={comment.com_id}>
                    <h4>User Mail: {comment.user_mail}</h4>
                    <h4>User rating and comment:</h4>
                    <Stars_displayed rating={comment.rating} hover={hover} readOnly />
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_comments;


/*
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Stars from "../components/Stars";

function View_comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recipeTitleParam = new URLSearchParams(window.location.search).get("recipe_title");
  const recipeTitle = recipeTitleParam ? decodeURIComponent(recipeTitleParam) : "";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://88.200.63.148:3082/api/comments?recipe_title=${encodeURIComponent(recipeTitle)}`);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <div className="about">
            <h2>Comments for {recipeTitle}</h2>
            {comments.length === 0 ? (
              <p>No comments for this recipe.</p>
            ) : (
              <ul>
                {comments.map((comment) => (
                  <li key={comment.com_id}>
                    <h4>User Mail: {comment.user_mail}</h4>
                    <h4>Rating:</h4>
                    <Stars value={comment.rating} readOnly />
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_comments;
*/