import React from 'react'
import './css/Login.css'

export const Login = () => {
  return (
    <div className="loginpage">
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="user-box">
                <input type="text" name="" required/>
                <label for="">UserName</label>
            </div>

            <div className="user-box">
                <input type="password" name="" required/>
                <label for="">Password</label>
            </div>
            <div>
                <a href="#" className="forgot-pass">Forgot Password?</a>
            </div>
            <a className="btn-submit" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </a>

        </form>
        <p style={{color:"#03e9f4"}}>You do have account? Login</p>
    </div>
    </div>
  )
}
