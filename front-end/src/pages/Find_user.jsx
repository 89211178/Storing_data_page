import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search_mail from "../components/Search_mail";

function Find_user() {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProfiles();
  }, []);

  const fetchAllProfiles = async () => {
    try {
      const response = await axios.get("/Get_profile");
      setAllProfiles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    const filtered = allProfiles.filter((profile) =>
      profile.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const handleProfileClick = (email) => {
    const emailWithAt = email.replace(/@/g, "%40");
    navigate(`/User_profile?user_mail=${encodeURIComponent(emailWithAt)}`);
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <h2>SEARCH UP USER:</h2>
          <h3>Write mail of the user you are searching for:</h3>
          <Search_mail onSearch={handleSearch} />
          <br></br>
          <img className="loading" src="https://media.tenor.com/d3HwOIP8L5cAAAAC/da-bears.gif" alt=""></img>
          <ul>
            {filteredProfiles.map((profile) => (
              <li
                key={profile.email}
                onClick={() => handleProfileClick(profile.email)}
              >
                {profile.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Find_user;