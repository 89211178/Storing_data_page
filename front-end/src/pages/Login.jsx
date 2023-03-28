import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

function Login() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate(); 

    async function logIn() {
        let item= {name,password}
        console.warn(item)
        console.log(item)

        navigate('/Home', { replace: true });

        let result = await fetch("http://88.200.63.148:3002/Login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })

        result = await result.json();
        localStorage.setItem("use-info",JSON.stringify(result)); 
        console.warn("result", result);
    }

    return (
        <div>
            <Navbar />
            <div className="body">
                <div className="relative_1">
            
                    <div className="relative_2">
                    <h1>CookSmart</h1>
                    </div>
                        
                    <form>
                    <div className="container_2">
                        <label for="uname"><b>Username:</b></label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="from-control" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="from-control" placeholder="Enter Password" name="psw" required></input>

                        <button onClick={logIn} type="log_in_btn">Login</button>
                    </div>

                    <div className="container_3">
                        <button className="sing_up_btn">Sing_up</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> 

                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Login;

/*

                    <div className="container_2">
                        <label for="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <button type="sing_up_btn">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me</input>
                        </label>
                    </div>

                    <div className="container_2">
                        <button className="sing_up_btn">Sing_up</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> 
*/