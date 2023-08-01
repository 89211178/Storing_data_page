import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Fav_recipe() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recipeTitle = getRecipeTitleFromURL();
    if (recipeTitle) {
      fetchDetails(recipeTitle);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchDetails = async (recipeTitle) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=fef7bde6dbcb48898e88261caf38dc5c&query=${encodeURIComponent(recipeTitle)}`
      );

      if (!response.ok) {
        console.error("Failed to fetch recipe details.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      if (data.results.length > 0) {
        const recipeId = data.results[0].id;
        const recipeDetailsResponse = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=fef7bde6dbcb48898e88261caf38dc5c`
        );

        if (!recipeDetailsResponse.ok) {
          console.error("Failed to fetch recipe details.");
          setLoading(false);
          return;
        }

        const recipeDetails = await recipeDetailsResponse.json();
        setDetails(recipeDetails);
      } else {
        console.error("Recipe not found.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setLoading(false);
    }
  };

  const getRecipeTitleFromURL = () => {
    const path = window.location.pathname;
    const parts = path.split("/");
    const recipeTitle = parts[parts.length - 1];
    return decodeURIComponent(recipeTitle);
  };

  async function back() {
    navigate("/Favourite", { replace: true });
  }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          {details.title ? (
            <>
              <Wrapper>
                <div>
                  <h2>{details.title}</h2>
                  <img className="loading_3" src={details.image} alt=""></img>
                </div>
                <div>
                  <h3>About the:</h3>
                  <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                </div>
                <div>
                  <h3>Instructions:</h3>
                  <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </div>
                <div>
                  <h3>Ingredients:</h3>
                  <ul>
                    {details.extendedIngredients && details.extendedIngredients.length > 0 ? (
                      details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                      ))
                    ) : (
                      <li>No ingredients found.</li>
                    )}
                  </ul>
                </div>
              </Wrapper>
            </>
          ) : (
            <div>We are sorry for inconvenience, but the recipe was not found.</div>
          )}
          <button type="submit" className="save_changes_btn" onClick={back}>
            Go back to favorites
          </button>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1px;
  li {
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
`;

export default Fav_recipe;