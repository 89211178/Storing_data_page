import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function View_comments() {
  const [recipes, setRecipes] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://88.200.63.148:3082/api/getCommentsWithTitles/${recipeId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch comments and recipe titles.");
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Debugging statement

        // Extract the unique recipe titles from the comments
        const uniqueRecipeTitles = [...new Set(data.map((comment) => comment.recipe_title))];

        // Fetch recipes based on the unique recipe titles
        const recipePromises = uniqueRecipeTitles.map(async (title) => {
          const recipeResponse = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=a343dd3693c94a9389ac084809accae4&title=${encodeURIComponent(
              title
            )}`
          );
          const recipeData = await recipeResponse.json();
          return recipeData.results[0];
        });

        const recipeData = await Promise.all(recipePromises);
        setRecipes(recipeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [recipeId]);

  console.log("Recipe ID:", recipeId); // Debugging statement
  console.log("Recipes state:", recipes); // Debugging statement

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h3>VIEW ALL RECIPES THAT HAVE COMMENTS:</h3>
          <div className="wrapper2">
            <Grid>
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <Card key={recipe.id}>
                    <Link to={`/Recipe_comment/${recipe.id}`}>
                      <h4>{recipe.title}</h4>
                      <img src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Card>
                ))
              ) : (
                <p>No recipes found.</p>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

export default View_comments;


/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function View_comments() {
  const [recipes, setRecipes] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://88.200.63.148:3082/api/getCommentsWithTitles/${recipeId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch comments and recipe titles.");
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Debugging statement

        // Extract the unique recipe titles from the comments
        const uniqueRecipeTitles = [...new Set(data.map((comment) => comment.recipe_title))];

        // Fetch recipes based on the unique recipe titles
        const recipePromises = uniqueRecipeTitles.map(async (title) => {
          const recipeResponse = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=a343dd3693c94a9389ac084809accae4&title=${encodeURIComponent(
              title
            )}`
          );
          const recipeData = await recipeResponse.json();
          return recipeData.results[0];
        });

        const recipeData = await Promise.all(recipePromises);
        setRecipes(recipeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [recipeId]);

  console.log("Recipe ID:", recipeId); // Debugging statement
  console.log("Recipes state:", recipes); // Debugging statement

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h3>VIEW ALL RECIPES:</h3>
          <div className="wrapper2">
            <Grid>
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <Card key={recipe.id}>
                    <h4>Recipe Title: {recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                ))
              ) : (
                <p>No recipes found.</p>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

export default View_comments;
    */