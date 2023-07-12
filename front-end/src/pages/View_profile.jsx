import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 

function View_profile() {
    const navigate = useNavigate(); 

    async function submit() {
        navigate('/Home', { replace: true });
    }

    return (
        <div>
          <Navbar />
          <div className="body_2">
            <div className="relative">
              <h3>MAKE YOUR PROFILE:</h3>
            
              <div className="container">
                <div className="box">
                <img src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt=""></img>
                  <ul>
                      <label for="gender"><b>Gender:</b></label>
                      <input type="radio" id="male" name="gender" value="MALE"></input>
                      <label for="male">MALE</label>
                      <input type="radio" id="female" name="gender" value="FEMALE"></input>
                      <label for="female">FEMALE</label>
                      
                      <br></br>
                      <br></br>

                      <label for="name"><b>Firstname:</b></label>
                      <input type="text" placeholder="Enter Firstname" name="name" required></input>

                      <label for="lastname"><b>Lastname:</b></label>
                      <input type="text" placeholder="Enter Lastname" name="lastname" required></input>
                  </ul>
                </div>

                <div className="About">
                    <ul>
                        <label for="info"><b>About me:</b></label>
                        <textarea type="text" placeholder="Enter information about you" name="info" required />
                    </ul>
                    <ul>
                        <label for="added"><b>Added recpies:</b></label>
                        <textarea type="text" placeholder="Your recipes ... :)" name="added" required />
                    </ul>
                    <ul>
                        <label for="comm"><b>Comments and grades:</b></label>
                        <textarea type="text" placeholder="Your comments and grades ... :)" name="comm" required />
                    </ul>
                    <button type="submit" className="log_in_btn" onClick={submit}>Change profile</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
  
  export default View_profile;