import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPasword(event.target.value);
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/shop');
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign in</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePassword} type="password" name="password" id="" required/>
          </div>
          <p>{error?.message}</p>
          {
              loading && <p>Loading...</p>
          }
          <input className="form-submit" type="submit" value="Sign in" />
        </form>
        <p>New to Ema-John? <Link className="form-link" to={'/signup'}>Create An Acccount</Link></p>
        <div className="oreo">
            <div>_____</div>
            <p style={{margin:'0 10px', marginBottom:'5px'}}>or</p>
            <div>_____</div>
        </div>
        <button className="google-btn" type="submit"><FcGoogle style={{fontSize:'20px', marginRight:'5px', marginTop:'3px'}}></FcGoogle> Sign in With Google</button>
      </div>
    </div>
  );
};

export default Login;
