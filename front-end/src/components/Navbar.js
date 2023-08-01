import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="topnav">
      <div className="nav-links">
        <CustomLink to="/Home">Home page</CustomLink>
        <CustomLink to="/Find_recipe">Find recipe</CustomLink>
        <CustomLink to="/Find_user">Find user</CustomLink>
        <CustomLink to="/View_profile">Your profile</CustomLink>
        <CustomLink to="/Favourite">Favourite</CustomLink>
        <CustomLink to="/Commented">Your comments</CustomLink>
        <CustomLink to="/Sources">Sources</CustomLink>
        <CustomLink to="/Login">Log out</CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();

  return (
    <div className={`nav-link ${location.pathname === to ? "active" : ""}`}>
      <Link to={to}>{children}</Link>
    </div>
  );
}
