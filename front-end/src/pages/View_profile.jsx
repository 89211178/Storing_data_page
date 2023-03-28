import Navbar from "../components/Navbar";

function View_profile() {
    return (
        <div>
          <Navbar />
          <div className="body_2">
            <div className="relative">
          
              <div className="relative_2">
              <h2>MAKE YOUR PROFILE</h2>
              </div>
              <div className="container">
                <div className="box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU" alt=""></img>
                  <ul>
                      <label for="gender"><b>Gender:</b></label>
                      <input type="radio" id="male" name="gender" value="MALE"></input>
                      <label for="male">MALE</label>
                      <input type="radio" id="female" name="gender" value="FEMALE"></input>
                      <label for="female">FEMALE</label>
                      
                      <br></br>
                      <br></br>

                      <label for="name"><b>Firstname:</b></label>
                      <input type="text" placeholder="Enter Firstname" name="name" required></input>

                      <label for="lastname"><b>Lastname:</b></label>
                      <input type="text" placeholder="Enter Lastname" name="lastname" required></input>
                  </ul>
                </div>

                <div className="About">
                    <ul>
                        <label for="info"><b>About me:</b></label>
                        <input type="text" placeholder="Enter information about you" name="info" required></input>
                    </ul>
                    <ul>
                        <label for="added"><b>Added recpies:</b></label>
                        <input type="text" placeholder="Your recipes ... :)" name="added" required></input>
                    </ul>
                    <ul>
                        <label for="comm"><b>Comments and grades:</b></label>
                        <input type="text" placeholder="Your comments and grades ... :)" name="comm" required></input>
                    </ul>
                    <button type="change_profile_btn">Change profile</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
  
  export default View_profile;