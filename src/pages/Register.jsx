import React from "react";
import { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            // console.log("File available at", downloadURL);
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid:res.user.uid,
              displayName,
              email,
              photoURL:downloadURL,
            })
            await setDoc(doc(db,"userChats",res.user.uid),{});

            navigate("/reactchatapp/");
          });
        }
      );


    } catch {
      setErr(true);
    }
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      {err && (
        <h4 style={{ color: "white" }}>
          Somthing went wrong, Please try again
        </h4>
      )}
      <form autoComplete='off'>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            onChange={(e) => setDisplayName(e.target.value)}
            
          />
          <label htmlFor="">Display Name</label>
        </div>

        <div className="user-box">
          <input
            type="email"
            name=""
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" list="autocompleteOff"
          />
          <label htmlFor="">Email</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            name=""
            required
            onChange={(e) => setpassword(e.target.value)}
            
          />
          <label htmlFor="">Password</label>
        </div>

        <div className="add_avatar">
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file" className="add_avatar">
            <img src={Add} alt="" />
            <span style={{ color: "white" }}>Add an avatar</span>
          </label>
        </div>

        <div>
          <a href="#" className="forgot-pass">
            Forgot Password?
          </a>
        </div>
        <a className="btn-submit" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </a>
      </form>
      <p style={{ color: "#03e9f4" }}>You do have account? <Link to="/reactchatapp/login" >Login</Link></p>
    </div>
  );
};
