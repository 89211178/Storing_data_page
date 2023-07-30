import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Add_recipe() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const [values, setValues] = useState({
    mail: userEmail,
    name: "",
    about: "",
    instructions: "",
    ingredients: "",
  });

  useEffect(() => {
    setValues((prev) => ({ ...prev, mail: userEmail }));
  }, [userEmail]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { name, about, instructions, ingredients } = values;
      const recipe_id = uuidv4(); 

      const response = await axios.post("http://88.200.63.148:3084/Add_Recipes", {
        user_mail: userEmail,
        name,
        about,
        instructions,
        ingredients,
        recipe_id,
      });

      if (response.status === 200 && response.data.message === "Recipe saved successfully") {
        navigate("/Home");
        alert("Recipe saved successfully.");
      } else {
        alert("Failed to save recipe. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the recipe. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <h3>ADD YOUR RECIPE:</h3>

          <div className="container_5">
            <div className="box">
              <img src="https://i.pinimg.com/474x/78/8b/ca/788bca142caf95ea3fa370639206a6fe.jpg" alt="" />

              <form onSubmit={handleSubmit}>
                <ul>
                  <label htmlFor="name">
                    <b>Name of the recipe:</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter name of your recipe"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </ul>
                <ul>
                  <label htmlFor="about">
                    <b>About the:</b>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Enter information about your recipe"
                    name="about"
                    value={values.about}
                    onChange={handleChange}
                    required
                  />
                </ul>
                <ul>
                  <label htmlFor="instructions">
                    <b>Instructions:</b>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Add all of the ingredients ..."
                    name="instructions"
                    value={values.instructions}
                    onChange={handleChange}
                    required
                  />
                </ul>
                <ul>
                  <label htmlFor="ingredients">
                    <b>Ingredients:</b>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Write your recipe ..."
                    name="ingredients"
                    value={values.ingredients}
                    onChange={handleChange}
                    required
                  />
                </ul>
                <button type="submit" className="submit_btn">
                  Add recipe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_recipe;