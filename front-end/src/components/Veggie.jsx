import React, { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  // ${process.env.REACT_APP_API_KEY}
  // make you API hidden

  const getVeggie = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=fef7bde6dbcb48898e88261caf38dc5c&number=4&tags=vegetarian`
      );
      const data = await api.json();
      setVeggie(data.recipes);
      console.log(data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  if (!veggie.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="wrapper">
        <h3>VEGETARIAN RECIPES</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "1rem"
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  <Link to={"/recipe/" + recipe.id}>
                    <p className="recipe_title">{recipe.title}</p>
                    <img className="style" src={recipe.image} alt={recipe.title} />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggie;