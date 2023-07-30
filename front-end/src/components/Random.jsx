import { useEffect, useState } from "react";
import "../styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  // ${process.env.REACT_APP_API_KEY}
  // make you API hidden

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=fef7bde6dbcb48898e88261caf38dc5c&number=4`
    );
    const data = await api.json();
    setRandom(data.recipes);
    console.log(data.recipes);
  };

  if (!random.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
          <div className="wrapper">
            <h3>RANDOM RECPIES</h3>
            <Splide
              options={ {
                perPage: 3,
                pagination: false,
                arrows: false,
                drag: "free",
                gap: "1rem"
              } }>
            {random.map((recipe) => {
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
