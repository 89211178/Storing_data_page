import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Favourite() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    fetch(`http://88.200.63.148:3084/Get_favourite?user_mail=${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setFavouriteRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching favourite recipes:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h2>Favourite Recipes:</h2>
            {favouriteRecipes.length > 0 ? (
              favouriteRecipes.map((recipe) => (
                <ul key={recipe.fav_id}>
                  <Link to={`/Fav_recipe/${encodeURIComponent(recipe.recipe_title)}`}>{recipe.recipe_title}</Link>
                </ul>
              ))
            ) : (
              <ul>No favourite recipes yet saved found.</ul>
            )}
        </div>
      </div>
    </div>
  );
}

export default Favourite;