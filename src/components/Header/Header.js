import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const Logout = () => {
      signOut(auth);
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/orders"}>Order</Link>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to={"/about"}>About</Link>
        {user?.uid ? 
        <>
            <span style={{color:'white', margin:'0 8px'}}>{user.displayName}</span>
            <button style={{marginLeft:'10px'}} onClick={Logout}>Sign Out</button>
        </>
        
         : 
         <Link to={"/signin"}>Sign In</Link>}
      </div>
    </nav>
  );
};

export default Header;
