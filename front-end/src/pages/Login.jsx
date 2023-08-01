import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login_Validation from "../components/Login_Validation";
import "../styles.css";

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        mail: "",
        password: "",
    });

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Login_Validation(values));
        if (errors.mail === "" && errors.password === "") {
            axios.post("/Login", values)
                .then(res => {
                    if (res.data === "Success") {
                        localStorage.setItem("userEmail", values.mail);
                        navigate('/Home');
                        alert("Welcome back to CookSmart")
                    }
                    else {
                        alert("Mail and password are incorrect");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    async function sing_up() {
        navigate('/Singup', { replace: true });
    }

    async function remember() {
        navigate('/Remember', { replace: true });
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
                            <br></br>

                            <button type="submit" className="btn">Login</button>
                        </div>

                        <div className="container_3">
                            <button onClick={sing_up} className="btn">Sing_up</button>
                            <button onClick={remember} className="btn">Forgot_password?</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
