import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Singup_Validation from "../components/Singup_Validation";
import "../styles.css";

function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Singup_Validation(values));
    if (errors.mail === "" && errors.name === "" && errors.password === "") {
      axios.post("http://88.200.63.148:3061/Singup", values)
      .then (res => {
        navigate('/Login')
      })
      .catch (err => console.log(err));
  }
}

  return (
    <div>
      <div className="body">
        <div className="relative_1">
          <div className="relative_2">
            <h1>CookSmart</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="container_2">
              <label htmlFor="mail">
                <b>Mail:</b>
              </label>
              <input
                type="text"
                onChange={handleInput}
                placeholder="Enter Mail"
                name="mail"
                required
              />
              {errors.mail && <span className="text-danger"> {errors.mail} </span>}

              <br></br>

              <label htmlFor="name">
                <b>Username:</b>
              </label>
              <input
                type="text"
                onChange={handleInput}
                placeholder="Enter Username"
                name="name"
                required
              />
               {errors.name && <span className="text-danger"> {errors.name} </span>}

               <br></br>

              <label htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                type="password"
                onChange={handleInput}
                placeholder="Enter Password"
                name="password"
                required
              />
               {errors.password && <span className="text-danger"> {errors.password} </span>}

               <br></br>

              <button type="submit" className="sing_up_btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;