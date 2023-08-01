import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Vegan() {
  const [vegan, setVegan] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=fef7bde6dbcb48898e88261caf38dc5c&number=5&tags=vegan`
      );
      if (api.status === 429) {
        setError(true);
      } else {
        const data = await api.json();
        setVegan(data.recipes || []);
      }
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="wrapper">
        <h3>VEGAN RECIPES</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "1rem"
          }}>
          {vegan && vegan.map((recipe) => {
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
        <h3>VEGAN RECIPES</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "1rem"
          }}>
          {vegan && vegan.map((recipe) => {
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

export default Vegan;
