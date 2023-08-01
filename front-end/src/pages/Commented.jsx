import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Commented() {
  const [commentedRecipeTitles, setCommentedRecipeTitles] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    fetch(`/Commented?user_mail=${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setCommentedRecipeTitles(data.map((recipe) => recipe.recipe_title));
      })
      .catch((error) => {
        console.error("Error fetching commented recipes:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h2>Your Commented Recipes:</h2>
          {commentedRecipeTitles.length > 0 ? (
            commentedRecipeTitles.map((recipeTitle) => (
              <ul key={recipeTitle}>
                <Link to={`/Com_recipe/${encodeURIComponent(recipeTitle)}`}>
                  {recipeTitle}
                </Link>
              </ul>
            ))
          ) : (
            <ul>No commented recipes yet found.</ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Commented;