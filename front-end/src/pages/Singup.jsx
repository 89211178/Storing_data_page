function Singup() {
    return (
        <div>
            <div className="body">
                <div className="relative_1">

                    <div className="relative_2">
                    <h1>CookSmart</h1>
                    </div>

                    <form action="/action_page.php" method="post">

                    <div className="container_2">
                        <label for="uname"><b>Mail:</b></label>
                        <input type="text" placeholder="Enter Mail" name="mail" required></input>

                        <label for="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <label for="psw"><b>Confirm password:</b></label>
                        <input type="password" placeholder="Repeat Password" name="r_psw" required></input>

                        <button className="sing_up_btn">Sing_up</button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
  }
  
  export default Singup;