import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function Recipe_comment() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=a343dd3693c94a9389ac084809accae4`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }

        const data = await response.json();
        console.log("Fetched recipe data:", data); // Debugging statement

        setRecipeDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  console.log("Recipe ID:", recipeId); // Debugging statement
  console.log("Recipe details:", recipeDetails); // Debugging statement

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <Wrapper>
            <div>
              <h2>{recipeDetails.title}</h2>
              <img className="loading_3" src={recipeDetails.image} alt="" />
            </div>
            <div>
              <h3>About the:</h3>
              <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
            </div>
            <div>
              <h3>Instructions:</h3>
              <p dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></p>
            </div>
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipeDetails &&
                recipeDetails.extendedIngredients &&
                recipeDetails.extendedIngredients.length > 0 ? (
                  recipeDetails.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))
                ) : (
                  <li>No ingredients found.</li>
                )}
              </ul>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr ;
  column-gap: 1px;
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
`
export default Recipe_comment;
