function Add_recipe() {
    return (
      <div>
        <div className="body_2">
          <div className="relative">

          <div className="relative_2">
              <h2>ADD YOUR RECIPE</h2>
              </div>
              <div className="container">
                <div className="box">
                <img src="https://cdn-icons-png.flaticon.com/512/8141/8141732.png" alt=""></img>
                  <ul>
                      <label for="name"><b>Name of the recipe:</b></label>
                      <input type="text" placeholder="Enter name of your recipe" name="name" required></input>

                      <label for="lastname"><b>Preperation time:</b></label>
                      <input type="text" placeholder="Enter time needed to make the recipe" name="lastname" required></input>
                  </ul>
                </div>

                <div className="About">
                    <ul>
                        <label for="info"><b>Description of the recipe:</b></label>
                        <input type="text" placeholder="Enter information about your recipe" name="info" required></input>
                    </ul>
                    <ul>
                        <label for="added"><b>All of the ingredients:</b></label>
                        <input type="text" placeholder="Add all of the ingredients ... :)" name="added" required></input>
                    </ul>
                    <ul>
                        <label for="comm"><b>Write recipe:</b></label>
                        <input type="text" placeholder="Write your recpie ... :)" name="comm" required></input>
                    </ul>
                    <button type="change_profile_btn">Add recpie</button>
                </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Add_recipe;