import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../styles.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=fef7bde6dbcb48898e88261caf38dc5c`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  //-------------------------------------------------
  const [link, setLink] = useState('');
  const [lastPart, setLastPart] = useState('');

  useEffect(() => {
    const currentLink = window.location.href;
    setLink(currentLink);
  }, []);

  useEffect(() => {
    const extractedPart = extract_id(link);
    setLastPart(extractedPart);
  }, [link]);

  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail"); 

  function comment() {
    const recipeId = extract_id(link);
    const recipeTitle = details.title; 
    navigate(`/Comments?recipe_id=${recipeId}&user_mail=${userEmail}&recipe_title=${recipeTitle}`, { replace: true });
  }

  function extract_id(link) {
    const parts = link.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart;
  }

  function comments() {
    const recipeId = extract_id(link);
    const recipeTitle = details.title; // Get the recipe title from the details state
    navigate(`/View_comments?recipe_title=${recipeTitle}`, { replace: true });
  }

  async function fav() {
    const recipeId = extract_id(link);
    const recipeTitle = details.title;

    try {
      const response = await fetch("http://88.200.63.148:3084/Save_favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          recipeId,
          userEmail,
          recipeTitle,
        }),
      });

      if (response.ok) {
        console.log("Recipe saved to favorites successfully!");
        alert("Recipe was saved to favorites")
      } else {
        console.error("Failed to save recipe to favorites.");
        alert("There was an error, recipe was not saved to favorites")
      }
    } catch (error) {
      console.error("Error occurred while saving recipe to favorites:", error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <Wrapper>
            <div>
              <h2>{details.title}</h2>
              <img className="loading_3" src={details.image} alt=""></img>
            </div>
            <div>
              <h3>About the:</h3>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>
            <div>
              <h3>Instructions:</h3>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {details && details.extendedIngredients && details.extendedIngredients.length > 0 ? (
                  details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))
                ) : (
                  <li>No ingredients found.</li>
                )}
              </ul>
            </div>
          </Wrapper>

          <button type="submit" className="save_changes_btn" onClick={comment}>Give star rating and comment</button>
          <button type="submit" className="submit_btn" onClick={comments}>View star ratings and comments</button>
          <button type="submit" className="save_changes_btn" onClick={fav}>Save recipe as favourite</button>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  column-gap: 1px;
  li {
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }`

export default Recipe;