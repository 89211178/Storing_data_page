import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"
import "../styles.css";

const Stars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
    <div>
        {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;

            return ( 
                <label>
                    <input 
                    type="radio" 
                    name="rating" 
                    value="{ratingValue}" 
                    onClick={() => setRating(ratingValue)} 
                    />
                    <FaStar 
                    className="star" 
                    size={30} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            );
        })}
    </div>
    );
};

export default Stars

// <p>Your star rating is: {rating}</p>