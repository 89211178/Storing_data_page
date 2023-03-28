import Search from "../components/Search";
import Navbar from "../components/Navbar";

function Find_recipe() {
    return (
      <div>
        <Navbar />
        <div className="body_2">
          <div className="relative">
            <h1>SEARCH YOUR OWN RECIPE:</h1>
            <br></br>
            <h2>INPUT INGREDIENTS:</h2>          
            <Search />
          </div>
        </div>
      </div>
    );
  }
  
  export default Find_recipe;
