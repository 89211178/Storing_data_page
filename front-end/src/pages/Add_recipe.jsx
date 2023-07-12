import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 


function Add_recipe() {
    const navigate = useNavigate(); 

    async function submit() {
        navigate('/Home', { replace: true });
    }

    return (
      <div>
        <Navbar />
        <div className="body_2">
          <div className="relative">
              <h3>ADD YOUR RECIPE:</h3>
            
              <div className="container">
                <div className="box">
                <img src="https://i.pinimg.com/474x/78/8b/ca/788bca142caf95ea3fa370639206a6fe.jpg" alt=""></img>
                <ul>
                  <label for="name"><b>Name of the recipe:</b></label>
                    <input type="text" placeholder="Enter name of your recipe" name="name" required></input>
                </ul>
                </div>
                
                <div className="About">
                  <ul>
                    <label for="info"><b>About the:</b></label>
                    <textarea type="text" placeholder="Enter information about your recipe" name="info" required />
                  </ul>
                  <ul>
                    <label for="added"><b>Instructions:</b></label>
                    <textarea type="text" placeholder="Add all of the ingredients ... :)" name="added" required />
                  </ul>
                  <ul>
                    <label for="comm"><b>Ingredients:</b></label>
                    <textarea type="text" placeholder="Write your recpie ... :)" name="comm" required />
                 </ul>
                 <button type="submit" className="log_in_btn" onClick={submit}>Add recpie</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Add_recipe;