import React from "react";
import { useNavigate } from "react-router-dom"; 

function Remember() {
    const navigate2 = useNavigate(); 
       
        async function back_login() {
            navigate2('/Login', { replace: true });
        }

    return (
        <div>
            <div className="body">
                <div className="relative_1">
            
                    <div className="relative_2">
                    <h1>CookSmart</h1>
                    </div>

                    <img className="loading_2" src="https://media.tenor.com/Tca53SnqO8IAAAAM/we-bare-bears-believe.gif" alt=""></img>
                        
                    <form>
                    <div className="container_2">
                        <button onClick={back_login} type="log_in_btn">I've remebered my password</button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Remember;