import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function Singup() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        mail: '',
        password: ''
    })

    const handelInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('https://88.200.63.148:3004/singup', values)
        .then(res => 
            {
                console.log(res)
                navigate('/Login')
            })
        .catch(err => console.log(err))
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
                        <label htmlFor ="mail"><b>Mail:</b></label>
                        <input type="text" onChange={handelInput} placeholder="Enter Mail" name="mail" required></input>

                        <label htmlFor ="name"><b>Username:</b></label>
                        <input type="text" onChange={handelInput} placeholder="Enter Username" name="name" required></input>

                        <label htmlFor ="password"><b>Password:</b></label>
                        <input type="password" onChange={handelInput} placeholder="Enter Password" name="password" required></input>

                        <button type="submit" className="sing_up_btn">Sing_up</button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Singup;

   /*

   http://88.200.63.148:3002/SISIII2023/SISIII2023_89211178


    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://88.200.63.148:3002/Signup/sing_up_btn', inputs);
        console.log(inputs);
    }
    */