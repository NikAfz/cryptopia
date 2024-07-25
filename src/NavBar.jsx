import React from "react";
import logo from "../public/logo/logo-transparent-png.png";

export default function NavBar(){
  function book(params) {
    alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
  }
  return(
    <>
      <div className="Header--container">
        <img className="logo--img" src={ logo } alt="logo" />
        
        <div className="nav">
          <a href="#contact">Contact</a>
          <a className="m-d" href="#plan">Plans</a>
          <a className="m-d" href="#about">About</a>
          <a href="/FAQ.html">FAQ</a>
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


