import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

function Singup() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [mail,setMail] = useState("");
    const navigate = useNavigate();

    async function singUp() {
        let item= {name,password,mail}
        console.warn(item)
        console.log(item)

        navigate('/Home', { replace: true });

        let result = await fetch("http://88.200.63.148:3002/Singup", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })

        result = await result.json();
        localStorage.setItem("use-info",JSON.stringify(result)); 
        console.warn("result", result)
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
                        <label for="uname"><b>Mail:</b></label>
                        <input type="text" value={mail} onChange={(e)=>setMail(e.target.value)} className="from-control" placeholder="Enter Mail" name="mail" required></input>

                        <label for="uname"><b>Username:</b></label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="from-control" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="from-control" placeholder="Enter Password" name="psw" required></input>

                        <button onClick={singUp} className="sing_up_btn">Sing_up</button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Singup;