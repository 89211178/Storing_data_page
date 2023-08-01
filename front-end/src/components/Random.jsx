import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Random() {
  const [random, setRandom] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=fef7bde6dbcb48898e88261caf38dc5c&number=5`
      );
      if (api.status === 429) {
        setError(true);
      } else {
        const data = await api.json();
        setRandom(data.recipes || []);
      }
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="wrapper">
        <h3>RANDOM RECIPES</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "1rem"
          }}>
          {random && random.map((recipe) => {
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
    );
  }

  return (
    <div>
      <div className="wrapper">
        <h3>RANDOM RECIPES</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "1rem"
          }}>
          {random && random.map((recipe) => {
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

export default Random;