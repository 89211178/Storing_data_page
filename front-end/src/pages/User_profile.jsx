import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function User_profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [searchedEmail, setSearchedEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const emailFromPath = location.pathname.split("/").pop(); 
    const userEmail = decodeURIComponent(emailFromPath).replace(/%40/g, "@");
    setSearchedEmail(userEmail); 
    fetchProfile(userEmail);
  }, [location]);

  const fetchProfile = async (email) => {
    try {
      const response = await axios.get(
        `http://88.200.63.148:3084/Get_profile/${encodeURIComponent(email)}`
      );
      setProfile(response.data);
    } catch (error) {
      console.error(error);
      setProfile(null);
    }
  };

  async function back() {
    navigate('/Find_user', { replace: true });
  }

  if (!profile) {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="relative">
            <h3>USER PROFILE:</h3>
            <p>No profile for this email was yet made.</p>
            <button type="submit" onClick={back} className="submit_btn">Go back to Searching profiles</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h3>USER PROFILE:</h3>
          {profile ? (
            <>
              <div className="container">
                <div className="box">
                  <img src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt="" />
                  <ul>
                    <label htmlFor="mail">
                      <b>User Mail:</b>
                    </label>
                    <h5>{searchedEmail}</h5>
                  </ul>
                </div>
                <div className="About">
                  <ul>
                    <label htmlFor="firstname">
                      <b>Firstname:</b>
                    </label>
                    <input
                      type="text"
                      placeholder="No information given yet"
                      name="firstname"
                      value={profile.firstname || ""}
                      readOnly
                    />
                  </ul>
                  <ul>
                    <label htmlFor="lastname">
                      <b>Lastname:</b>
                    </label>
                    <input
                      type="text"
                      placeholder="No information given yet"
                      name="lastname"
                      value={profile.lastname || ""}
                      readOnly
                    />
                  </ul>
                  <ul>
                    <label htmlFor="about">
                      <b>About user:</b>
                    </label>
                    <textarea
                      placeholder="No information given yet"
                      name="about"
                      value={profile.about || ""}
                      readOnly
                    />
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <p>No profile for this email was yet made.</p>
          )}
          <button type="submit" onClick={back} className="submit_btn">Go back to Searching profiles</button>
        </div>
      </div>
    </div>
  );
}


export default User_profile;