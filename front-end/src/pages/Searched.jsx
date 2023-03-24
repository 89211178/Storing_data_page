import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; 
import "../styles.css";

function Searched() {

    const [searched_recipes, set_searched_recipes] = useState([]);
    let params = useParams();

        const getSearched = async (name) => {
            const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=a343dd3693c94a9389ac084809accae4&query=${name}`
            );
        const recipes = await api.json();
        set_searched_recipes(recipes.results);
      };

      useEffect(() => {
        getSearched(params.search);
      },[params.search]);

    return (
        <div>
          <div className="body">
            <div className="relative">
              <div className="wrapper">
                {searched_recipes.map((item) => {
                  return (
                    <Card key={item.id}>
                      <p className="recipe_title">{item.title}</p>
                      <img className="style" src={item.image} alt="" />
                    </Card>
                  );
                })} 
              </div>
            </div>
          </div>
      </div>
    );
    }

    const Card = styled.div`
      img {
        width: 100%;
        border-radius: 2rem
      }
      p {
        text-align: center;
        padding: 2rem
      }
    `;

  export default Searched;