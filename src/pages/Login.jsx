import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export const Login = () => {

    const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {

        await signInWithEmailAndPassword(auth, email, password)
navigate("/reactchatapp/")
      
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="loginpage">
    <div className="login-box">
        <h2>Login</h2>
        {err && (
        <h4 style={{ color: "white" }}>
          Somthing went wrong, Please try again
        </h4>
      )}
        <form autoComplete='off'>
            <div className="user-box">
                <input type="email" name="" required onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">UserName</label>
            </div>

            <div className="user-box">
                <input type="password" name="" required onChange={(e) => setpassword(e.target.value)} />
                <label htmlFor="">Password</label>
            </div>
            <div>
                <a href="#" className="forgot-pass">Forgot Password?</a>
            </div>
            <a className="btn-submit" onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </a>

        </form>
        <p style={{color:"#03e9f4"}}>You do have account? <Link to="/reactchatapp/register" >Register</Link></p>
    </div>
    </div>
  )
}
