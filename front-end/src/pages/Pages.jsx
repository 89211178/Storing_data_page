import Add_recipe from "./Add_recipe";
import Find_recipe from "./Find_recipe";
import View_profile from "./View_profile";
import Home from "./Home";
import Login from "./Login";
import Singup from "./Singup";

import React from "react";
import Searched from "./Searched";
/* import { Route, Routes } from "react-router-dom"; */
import { Route, Routes } from "react-router-dom"
/* BrowserRouter as Router, */

function Pages() {
  return(
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Home" exact element={<Home />}/>
        <Route path="/Find_recipe" exact element={<Find_recipe />}/>
        <Route path="/View_profile" exact element={<View_profile />}/>
        <Route path="/Add_recipe" exact element={<Add_recipe />}/>
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/Singup" exact element={<Singup />}/>
        <Route path="/searched/:search" exact element={<Searched />}/>
      </Routes>
  );
  }

  export default Pages;
  
  /*let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Home":
      component = <Home />
      break
    case "/Find_recipe":
      component = <Find_recipe />
      break
    case "/View_profile":
      component = <View_profile />
      break
    case "/Add_recipe":
      component = <Add_recipe />
      break
    case "/Login":
      component = <Login />
      break
    case "/Singup":
      component = <Singup />
      break
    case "/Find_recipe/searched:search":
      component = <Searched />
      break
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  )
  }
  */