import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  // ${process.env.REACT_APP_API_KEY}
  // make you API hidden

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a343dd3693c94a9389ac084809accae4&number=4`
    );
    const data = await api.json();
    setRandom(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
          <div className="wrapper">
            <h3>RANDOM RECPIES</h3>
            <Splide
              options={ {
                perPage: 4,
                pagination: false,
                arrows: false,
                drag: "free",
                gap: "1rem"
              } }>
            {random.map((recipe) => {
              return (
                <SplideSlide>
                  <div className="card">
                  <p className="recipe_title">{recipe.title}</p>
                  <img className="style" src={recipe.image} alt={recipe.title} />
                  <p className="recipe_title">{recipe.maxReadyTime}</p>
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
