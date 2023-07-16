import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Make_profile() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail"); // Retrieve user's email from local storage

  const [values, setValues] = useState({
    mail: userEmail,
    firstname: "",
    lastname: "",
    about: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { mail, firstname, lastname, about } = values;
      const profileExistsResponse = await axios.get(`http://88.200.63.148:3078/Get_profile/${encodeURIComponent(mail)}`);
  
      if (profileExistsResponse.status === 200) {
        // Profile already exists, perform update
        const response = await axios.put(`http://88.200.63.148:3078/Make_profile/${encodeURIComponent(mail)}`, {
          firstname,
          lastname,
          about,
        });
  
        if (response.data === "Success") {
          navigate("/View_profile");
          alert("Profile updated successfully.");
        } else {
          alert("Failed to update profile. Please try again later.");
        }
      } else if (profileExistsResponse.status === 404) {
        // Profile doesn't exist, perform insert
        const response = await axios.post(`http://88.200.63.148:3078/Make_profile/${encodeURIComponent(mail)}`, {
          mail,
          firstname,
          lastname,
          about,
        });
  
        if (response.data === "Success") {
          navigate("/View_profile");
          alert("Profile created successfully.");
        } else {
          alert("Failed to create profile. Please try again later.");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the profile. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://88.200.63.148:3078/Get_profile/${encodeURIComponent(userEmail)}`);

        if (response.status === 200) {
          const { firstname, lastname, about } = response.data;
          setValues((prev) => ({ ...prev, firstname, lastname, about }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [userEmail]);

  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <h3>MAKE YOUR PROFILE:</h3>
          <div className="container">
            <div className="box">
              <img src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt="" />

              <form onSubmit={handleSubmit}>
                <ul>
                  <label htmlFor="firstname">
                    <b>Firstname:</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleInput}
                    required
                  />

                  <label htmlFor="lastname">
                    <b>Lastname:</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleInput}
                    required
                  />

                  <label htmlFor="about">
                    <b>About me:</b>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Enter information about you"
                    name="about"
                    value={values.about}
                    onChange={handleInput}
                    required
                  />
                </ul>
                <button type="submit" className="sing_up_btn">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Make_profile;