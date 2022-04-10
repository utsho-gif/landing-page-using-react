import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleConPass = (event) => {
    setConfPass(event.target.value);
  };

  const [createUserWithEmailAndPassword,  user] =
    useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/');
    }
    

  const [singInWithGoogle] = useSignInWithGoogle(auth);
  const handleSignIn = () => {
    singInWithGoogle()
    .then(() => {})
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confPass) {
      setError("Password aint matching");
      return;
    }
    if (password < 6) {
      setError("Password must be six character or more");
      return;
    }
    createUserWithEmailAndPassword(email, password)
    .then(result => {
        const users = result.user;
        console.log(users);
    })
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePass}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConPass}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p>{user?.displayname}</p>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="SingUp" />
        </form>
        <p>
          Already Have an Account?{" "}
          <Link className="form-link" to={"/signin"}>
            Sign In
          </Link>
        </p>
        <div className="oreo">
          <div>_____</div>
          <p style={{ margin: "0 10px", marginBottom: "5px" }}>or</p>
          <div>_____</div>
        </div>
        <button onClick={() => handleSignIn()} className="google-btn" type="submit">
          <FcGoogle
            style={{ fontSize: "20px", marginRight: "5px", marginTop: "3px" }}
          ></FcGoogle>{" "}
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
