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
      </Routes>
  );
  }

  export default Pages;