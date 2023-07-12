import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; 
import "../styles.css";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import { useNavigate } from "react-router-dom"; 

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

    const navigate = useNavigate(); 

    async function comment() {
        navigate('/Comments', { replace: true });
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
                    <div className="star_rating" style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>Input star rating:</h4>
                        <Stars />
                    </div>

                    <h3>About the:</h3>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </div>
                <div>
                    <h3>Instructions:</h3>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
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

            <button type="submit" className="log_in_btn" onClick={comment}>Give star rating and comment</button>
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
