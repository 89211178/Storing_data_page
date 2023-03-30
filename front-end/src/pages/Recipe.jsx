import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; 
import "../styles.css";
import Navbar from "../components/Navbar";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/${params.name}/information?apiKey=a343dd3693c94a9389ac084809accae4
        `)
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return (
      <div>
        <Navbar />
        <div className="body_2">
          <div className="relative_5">
            <Wrapper>
                <div>
                    <h2>{details.title}</h2>
                    <img className="loading_3" src={details.image} alt=""></img>
                </div>
                <div>
                    <h4>About the:</h4>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </div>
            </Wrapper>
            <div>
                <h4>Instructions:</h4>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            <h4>Ingredients:</h4>
          </div>
        </div>
      </div>
    );
  }

  const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr ;
    column-gap: 1px;
    li {
        font-site: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    h2 {
        margin-bottom: 2rem;
    }
  `
  export default Recipe;

  /* 
            <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}> {ingredient.original} </li>
                ))}
            </ul>
  */