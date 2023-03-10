import React from "react";
import Navbar from "../components/Navbar"
import Add_recipe from "./Add_recipe";
import Find from "./Find";
import View_profile from "./View_profile";
import Home from "./Home";

function Pages() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Home":
      component = <Home />
      break
    case "/Find":
      component = <Find />
      break
    case "/View_profile":
      component = <View_profile />
      break
    case "/Add_recipe":
      component = <Add_recipe />
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

/*const Pages = () => (
  <div>
    <Home />
  </div>
);

export default Pages;
*/