import React from "react";
import Add from "../img/addAvatar.png";

export const Register = () => {
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label for="">Display Name</label>
        </div>

        <div className="user-box">
          <input type="text" name="" required />
          <label for="">Email</label>
        </div>

        <div className="user-box">
          <input type="password" name="" required />
          <label for="">Password</label>
        </div>

        <div className="add_avatar">
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            required
          />
          <label for="file" className="add_avatar" >
            <img src={Add} alt="" />
            <span style={{color:"white"}}>Add an avatar</span>
          </label>
        </div>

        <div>
          <a href="#" className="forgot-pass">
            Forgot Password?
          </a>
        </div>
        <a className="btn-submit" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </a>
      </form>
      <p style={{color:"#03e9f4"}}>You do have account? Login</p>
    </div>
  );
};
