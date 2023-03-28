import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* import { FaSearch } from "react-icons/fa";
import styled from "styled-components"; */
import "../styles.css";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
            e.preventDefault();
            navigate('/Find_recipe/Searched/' + input);
        };

    return (
        <from onSubmit={submitHandler}>
            <div>
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input} />
            </div>
        </from>
    );
}

export default Search;