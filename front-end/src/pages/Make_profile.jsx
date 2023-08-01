import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Make_profile() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

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

      const response = await axios.post(`/Make_profile`, {
        mail,
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
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the profile. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/Get_profile/${encodeURIComponent(userEmail)}`);

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
      <div className="body">
        <div className="relative">
          <h3>MAKE YOUR PROFILE:</h3>
          <div className="container_4">
            <div className="box">
              <img src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt="" />

              <form onSubmit={handleSubmit}>
                <ul>
                  <label htmlFor="firstname">
                    <b>Firstname:</b>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter Firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleInput}
                    required
                  />

                  <br></br>

                  <label htmlFor="lastname">
                    <b>Lastname:</b>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter Lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleInput}
                    required
                  />

                  <br></br>

                  <label htmlFor="about">
                    <b>About me:</b>
                  </label>
                  <br></br>
                  <textarea
                    type="text"
                    placeholder="   Enter information about you"
                    name="about"
                    value={values.about}
                    onChange={handleInput}
                    required
                  />
                </ul>
                <button type="submit" className="submit_btn">
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