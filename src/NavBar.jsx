import React from "react";
import logo from "../public/logo/logo-transparent-png.png";
import { Link } from "react-router-dom";

export default function NavBar(){
  function book(params) {
    alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
  }
  return(
    <>
      <div className="Header--container">
        <Link className="logo--link" to="/cryptopia">
          <img className="logo--img" src={ logo } alt="logo"/>
        </Link>
        
        <div className="nav">
          <a href="#contact">Contact</a>
          <a className="m-d" href="#plan">Plans</a>
          <a className="m-d" href="#about">About</a>
          <Link to="/cryptopia/FAQ">FAQ</Link>
          <button 
            className="download--button m-d"
            onClick={book}
          >
            Download App
          </button>
        </div>

      </div>
    </>
  )
}


