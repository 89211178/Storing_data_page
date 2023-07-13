import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Vegan() {
  const [vegan, setVegan] = useState([]);

  useEffect(() => {
    getVegan();
  }, []);

  // ${process.env.REACT_APP_API_KEY}
  // make you API hidden

  const getVegan = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a343dd3693c94a9389ac084809accae4&number=1&tags=vegan`
    );
    const data = await api.json();
    setVegan(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
          <div className="wrapper">
            <h3>VEGAN RECIPES</h3>
            <Splide
              options={ {
                perPage: 3,
                pagination: false,
                arrows: false,
                drag: "free",
                gap: "1rem"
              } }>
            {vegan.map((recipe) => {
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