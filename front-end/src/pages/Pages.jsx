import React from "react";
import Navbar from "../components/Navbar";

import Add_recipe from "./Add_recipe";
import Find_recipe from "./Find_recipe";
import View_profile from "./View_profile";
import Home from "./Home";
import Login from "./Login";
import Singup from "./Singup";

function Pages() {
  let component
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
  }
  return (
    <>
    <Navbar />
    {component}
    </>

  )
  }

  export default Pages;