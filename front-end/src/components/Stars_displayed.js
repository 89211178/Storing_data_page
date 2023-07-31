import React from 'react';
import { FaStar } from "react-icons/fa"
import "../styles.css";

const Stars_displayed = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <FaStar
              className="star"
              size={30}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars_displayed;
