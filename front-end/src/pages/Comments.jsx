import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import React from "react";
import { useNavigate } from "react-router-dom"; 

function Comments() {
    const navigate = useNavigate(); 

    async function submit() {
        navigate('/Home', { replace: true });
    }

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="relative">
          <div className="about">
              <h2>Write comment and grade this recipe:</h2>
              <div className="star_rating" style={{ display: 'flex', alignItems: 'center' }}>
                <h4>Input star rating:</h4>
                <Stars />
            </div>

            <textarea type="feedback" placeholder="What's your feedback?"/>

            <br></br>
            <button type="submit" className="log_in_btn" onClick={submit}>Subimt comment and rating stars</button>

            <p>Thank you for giving us much aprishiated feedback</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Comments;