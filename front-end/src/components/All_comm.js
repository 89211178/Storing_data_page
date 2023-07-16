import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"
import "../styles.css";

const All_comm = ({ onChange }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleRating = (ratingValue) => {
        setRating(ratingValue);
        onChange(ratingValue);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            size={30}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default All_comm;