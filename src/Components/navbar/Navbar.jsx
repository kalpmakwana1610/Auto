import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
 

const Navbar = () => {
  
  return (
     
      
      <div className="navbar">
        
        <div className="home" >
        <FontAwesomeIcon icon={faHouse} />
       <a href="/">Home</a>
        </div>
        <div className="options">
          <a href="/about">About</a>
          <a href="/signup">signup</a>
          <a href="/signin">signin</a>
        </div>
       
      </div>
    
  
);
};
export default Navbar;
