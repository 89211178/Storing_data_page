import Veggie from "../components/Veggie";
import Random from "../components/Random";
import Vegan from "../components/Vegan";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="body_2">
        <div className="relative">
          <div className="about">
              <h2>ABOUT COOKSMART:</h2>
              Many people encounter fear in front of the kitchen every day. They often underestimate the 
              potential of creating delicious meals with leftovers or limited ingredients they have at 
              home. As a result, they tend to opt for fast and unhealthy food options, which may not be 
              beneficial for their overall well-being. Ordering quickly prepared meals regularly can lead 
              to an unsatisfactory diet and negatively impact their health over time. I believe that an 
              informational system could significantly contribute to improving people's health and 
              potentially even change their lifestyle, especially for those who lack the time to cook or 
              are not well-versed in recipes, seeking a more convenient choice. Such a system could 
              provide helpful tips and creative ways to use available ingredients, encouraging healthier 
              meal choices and ultimately promoting better health outcomes for its users.
          </div>
          <Random />
          <Veggie />
          <Vegan />

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

export default Home;
