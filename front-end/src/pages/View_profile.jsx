import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function View_profile() {
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    about: "",
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail"); // Retrieve user's email from local storage

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://88.200.63.148:3078/Get_profile/${encodeURIComponent(userEmail)}`);
        const { firstname, lastname, about } = response.data;
        setProfile({ firstname, lastname, about });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const navigate = useNavigate();

  const changeProfile = () => {
    navigate("/Make_profile", { replace: true });
  };

  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <h3>VIEW YOUR PROFILE:</h3>
          <div className="container">
            <div className="box">
              <img src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt="" />
              <ul>
                <label htmlFor="firstname">
                  <b>Firstname:</b>
                </label>
                <input type="text" placeholder="No information given yet" name="firstname" value={profile.firstname} readOnly />

                <label htmlFor="lastname">
                  <b>Lastname:</b>
                </label>
                <input type="text" placeholder="No information given yet" name="lastname" value={profile.lastname} readOnly />
              </ul>
            </div>
            <div className="About">
              <ul>
                <label htmlFor="about">
                  <b>About me:</b>
                </label>
                <textarea placeholder="No information given yet" name="about" value={profile.about} readOnly />
              </ul>
              <button type="button" className="log_in_btn" onClick={changeProfile}>
                Change profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_profile;

/*
<ul>
  <label htmlFor="comm"><b>Comments and grades:</b></label>
  <textarea placeholder="Your comments and grades ... :)" name="comm" required />
</ul>
*/