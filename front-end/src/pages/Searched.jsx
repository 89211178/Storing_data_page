import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; 
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

        const getSearched = async (name) => {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=a343dd3693c94a9389ac084809accae4&number=1&query=${name}`
            );
        const recipes = await api.json();
        setSearchedRecipes(recipes.results);
        console.log(recipes.results)
      };

      useEffect(() => {
        getSearched(params.search);
        console.log(params);
      },[params.search]);

    return (
        <div>
          <Navbar />
          <div className="body">
            <div className="relative3">
              <h3>Searched recipes:</h3>
              <div className="wrapper2">
                <Grid>
                {searchedRecipes.map((item) => {
                  return (
                    <Card key={item.id}>
                      <h4>{item.title}</h4>
                      <img src={item.image} alt={item.title}  />
                    </Card>
                  );
                })} 
                </Grid>
              </div>
            </div>
          </div>
      </div>
    );
    }

    const Grid = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
        padding: 2rem
      }
      h4 {
        text-align: center;
        padding: 1rem;
      }
    `; 

  export default Searched;

  /* position: absolute; left: 10%;
        object-fit: cover;  */