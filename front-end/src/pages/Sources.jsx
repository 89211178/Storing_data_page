import React from 'react';
import Navbar from "../components/Navbar";

function Sources() {
  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <div className="about">
              <h2>THANKS GO TO:</h2>
                Dear Spoonacular, your site has been an absolute lifesaver for my cooking adventures.
                The vast collection of recipes and the accompanying images have made meal planning and 
                preparation a joy. Your platform has truly elevated my culinary experience, and I'm 
                grateful for the convenience and inspiration it provides.
                Thank you once again for your fantastic website!
                <br></br>
                <a href="https://spoonacular.com/food-api" target="_blank">Visit Spoonacular Website</a>
          </div>

          <div className="about">
                <h3>All images links:</h3>
                <img className="loading" src="https://64.media.tumblr.com/6810b430af2c641b74eec5d23e8071ab/tumblr_o6cpgdzwsh1vnqmpbo1_500.gif" alt=""></img>
                https://64.media.tumblr.com/6810b430af2c641b74eec5d23e8071ab/tumblr_o6cpgdzwsh1vnqmpbo1_500.gif
                <br></br>
                <img className="loading" src="https://media.tenor.com/d3HwOIP8L5cAAAAC/da-bears.gif" alt=""></img>
                https://media.tenor.com/d3HwOIP8L5cAAAAC/da-bears.gif
                <br></br>
                <img className="loading" src="https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg" alt="" />
                https://i.pinimg.com/474x/55/df/36/55df36e7333026e57effca3ca5eec77a.jpg
                <br></br>
                <img className="loading_2" src="https://media.tenor.com/Tca53SnqO8IAAAAM/we-bare-bears-believe.gif" alt=""></img>
                https://media.tenor.com/Tca53SnqO8IAAAAM/we-bare-bears-believe.gif
          </div>

          <div className="about">
              <h3>Dear user,</h3>
              Thank you so much for using our recipe search application! Your support and loyalty mean 
              a lot to us, and we are delighted to have helped you discover new flavors and create 
              delicious meals.
          </div>
          </div>
          </div>
    </div>
  );
}

export default Sources;