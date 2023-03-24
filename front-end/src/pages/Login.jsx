function Login() {
    return (
        <div>
            <div className="body">
                <div className="relative_1">
            
                    <div className="relative_2">
                    <h1>CookSmart</h1>
                    </div>
                        
                    <form action="/action_page.php" method="post">
                    <div className="container_2">
                        <label for="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <button type="sing_up_btn">Login</button>
                    </div>

                    <div className="container_3">
                        <button className="sing_up_btn">Sing_up</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> 

                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Login;

/*

                    <div className="container_2">
                        <label for="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <button type="sing_up_btn">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me</input>
                        </label>
                    </div>

                    <div className="container_2">
                        <button className="sing_up_btn">Sing_up</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> 
*/