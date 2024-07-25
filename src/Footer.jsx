import React from "react";
import logo from "../public/logo/logo-transparent-png.png";

export default function Footer() {
  return(

    <div className="footer">

      <div className="footer--left">
        <div className="site--info" id="about">
          <img src={logo} alt="logo" />
          <div className="site--info-txt">
            <div className="side--line"></div>
            <p>
              Cryptopia is a live crypto market created via React.js.
              the crypto values are imported using <strong>Coin Gecko</strong> API.
              click <strong><a href="https://www.coingecko.com/" target="_blank" >here</a></strong> for the API.
            </p>
          </div>
        </div>
        
        
        <small>&copy; NikAfz, All Rights Reserved</small>
        
      </div>


      <div className="site--info-txt">
        <div className="side--line-form"></div>
        <div className="footer--form">
          <h2 id="contact">contact dev</h2>

          <h4> <a href="https://github.com/NikAfz">GitHub</a></h4>
          <h4><a href="">Linked in</a></h4>
          <h4><a href="mailto:nikafz980@gmail.com">E-mail</a></h4>
        </div>
      </div>
      <div className="site--info-txt m-d">
        <div className="side--line-form"></div>
        <div className="footer--form">
          <h2>About</h2>

          <h4><a href="">About us</a></h4>
          <h4><a href="">Terms of Service</a></h4>
          <h4><a href="">Ad Policy</a></h4>
          <h4><a href="">Privacy Policy</a></h4>
          <h4><a href="">Join Us</a></h4>
        </div>
      </div>
      <div className="site--info-txt m-d">
        <div className="side--line-form"></div>
        <div className="footer--form">
          <h2>Community</h2>

          <h4><a href="">Reddit</a></h4>
          <h4><a href="">Facebook</a></h4>
          <h4><a href="">Youtube</a></h4>
          <h4><a href="">TikTok</a></h4>
        </div>
      </div>
      

    </div>
  )
}