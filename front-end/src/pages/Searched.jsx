import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fef7bde6dbcb48898e88261caf38dc5c&number=6&query=${name}`
    );
    const recipes = await api.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.results)
  };

  useEffect(() => {
    getSearched(params.search);
    console.log(params);
  }, [params.search]);

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h3>Searched recipes:</h3>
          <div className="wrapper2">
            <Grid>
              {searchedRecipes.map((item) => {
                return (
                  <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                      <h4>{item.title}</h4>
                      <img src={item.image} alt={item.title} />
                    </Link>
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
      h4 {
        text-align: center;
        padding: 1rem;
      }
    `;

export default Searched;