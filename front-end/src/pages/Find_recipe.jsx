import Search from "../components/Search";
import Navbar from "../components/Navbar";

function Find_recipe() {
    return (
      <div>
        <Navbar />
        <div className="body_3">
          <div className="relative">
            <h2>SEARCH YOUR OWN RECIPE:</h2>
            <h3>Write what you are searching for:</h3>          
            <Search />
            <br></br>
            <img className="loading" src="https://64.media.tumblr.com/6810b430af2c641b74eec5d23e8071ab/tumblr_o6cpgdzwsh1vnqmpbo1_500.gif" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default Find_recipe;
