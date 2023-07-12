import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles.css";
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
            e.preventDefault();
            navigate('/searched/' + input);
        };

    return (
        <FormStyle onSubmit={submitHandler} >
            <div>
                <FaSearch></FaSearch>
                <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    position: relative;
    width: 60%;
    left: 20%;
    input {
        border: none;
        background: linear-gradient(35deg, rgb(9, 3, 85), rgb(9, 3, 85));
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    `

export default Search;