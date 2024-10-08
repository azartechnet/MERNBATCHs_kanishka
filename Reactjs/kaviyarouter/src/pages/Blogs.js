const Blogs=()=>{
    return(
        <>
          <form>
            <label>Username:</label>
            <input type="text" id="username" name="username" required/>
            <br/>
            <label>Password:</label>
            <input type="password" id="password" name="password" required/>
            <br/>
            <label>Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </>
    )
}
export default Blogs;