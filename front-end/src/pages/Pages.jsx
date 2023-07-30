import Add_recipe from "./Add_recipe";
import Find_recipe from "./Find_recipe";
import View_profile from "./View_profile";
import Home from "./Home";
import Login from "./Login";
import Singup from "./Singup";
import Remember from "./Remember";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Comments from "./Comments";
import View_comments from "./View_comments";
import Make_profile from "./Make_profile";
import Find_user from "./Find_user";
import User_profile from "./User_profile";
import Sources from "./Sources";
import Favourite from "./Favourite";
import Fav_recipe from "./Fav_recipe";
import Commented from "./Commented";
import Com_recipe from "./Com_recipe";

import React from "react";
import { Route, Routes } from "react-router-dom"

function Pages() {
  return(
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/Home" exact element={<Home />}/>
        <Route path="/Find_recipe" exact element={<Find_recipe />}/>
        <Route path="/View_profile" exact element={<View_profile />}/>
        <Route path="/Add_recipe" exact element={<Add_recipe />}/>
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/Singup" exact element={<Singup />}/>
        <Route path="/Remember" exact element={<Remember />}/>
        <Route path="/searched/:search" exact element={<Searched />}/>
        <Route path="/recipe/:name" exact element={<Recipe />}/>
        <Route path="/Comments" exact element={<Comments />}/>
        <Route path="/View_comments" exact element={<View_comments />}/>
        <Route path="/Make_profile" exact element={<Make_profile />}/>
        <Route path="/Find_user" exact element={<Find_user />}/>
        <Route path="/User_profile/*" element={<User_profile />} />
        <Route path="/Sources" element={<Sources />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Fav_recipe/:name" element={<Fav_recipe />} />
        <Route path="/Commented" element={<Commented />} />
        <Route path="/Com_recipe/:recipe_title" element={<Com_recipe />} />
      </Routes>
  );
  }

  export default Pages;