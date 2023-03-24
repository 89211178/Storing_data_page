import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import "../styles.css";

function Search() {
    const [input, setInput] = useState("");

    return (
        <form>
            <div>
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input} />
            </div>
        </form>
    );
}

export default Search;

/* onSubmit={submitHandler}

const navigate = useNavigate();

const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    };


*/