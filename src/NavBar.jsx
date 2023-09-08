import React from "react";

export default function NavBar(){
  return(
    <>
      <div className="Header--container">
        <img className="logo--img" src="../logo/logo-transparent-svg.svg" alt="logo" onclick="location.href='http://www.google.com';" />
        
        <div className="nav">
          <a href="#contact">Contact</a>
          <a className="m-d" href="/index.html/#plan">Plans</a>
          <a className="m-d" href="#about">About</a>
          <a href="/FAQ.html">FAQ</a>
          <button className="download--button m-d">
            Download App
          </button>
        </div>

      </div>
    </>
  )
}


