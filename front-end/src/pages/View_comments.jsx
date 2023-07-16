import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function View_comments() {
  const [recipes, setRecipes] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recipe_id from MySQL Komentar table
        const response = await fetch(`http://88.200.63.148:3078/api/getRecipe/${recipeId}`);
        const data = await response.json();

        // Fetch recipe information from Spoonacular API
        const recipeResponse = await fetch(
          `https://api.spoonacular.com/recipes/${data.recipe_id}/information?apiKey=a343dd3693c94a9389ac084809accae4`
        );
        const recipeData = await recipeResponse.json();

        setRecipes([recipeData]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [recipeId]);

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h3>Recipes with the same IDs:</h3>
          <div className="wrapper2">
            <Grid>
              {recipes.map((recipe) => (
                <Card key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                    <h4>{recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              ))}
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
  img {
    border-radius: 2rem;
    border: 5px solid rgb(9, 3, 85);
    width: 250px;
    height: 200px;
  }
  a {
    text-align: center;
    padding: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default View_comments;


    /*
import Navbar from "../components/Navbar";

function View_comments() {
  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <div className="about">
              <h2>VIEW RECIPES THAT HAVE RATING AND COMMENTS:</h2>
              
          </div>
          
          <div className="about">
              <h3>Spoštovani uporabnik,</h3>
              Najlepša hvala za uporabo naše aplikacije za iskanje receptov! Vaša podpora in zvestoba
              pomenita veliko za nas, in veseli nas, da smo vam lahko pomagali pri odkrivanju novih okusov
              in pripravi slastnih obrokov.
          </div>
          </div>
          </div>
    </div>
  );
}

export default View_comments;
    */