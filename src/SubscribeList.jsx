import React from "react";

export default function PremiumList() {
  return(
    <div className="PremiumList m-d">


      <div className="premium--element" id="plan">

        <div className="plans--list-name">
          <div className="name">
            <div>Live Data</div>
            <div>List Leng</div>
            <div>FAQ Support</div>
            <div>Coin Historical Data</div>
            <div>API Access</div>
          </div>
        </div>

        <div className="plans">
          <div className="container">
            <h1 className="plan--h1">$00.0<small>/m</small></h1>
            <div className="plan--ditails">
              <p> &#x2713;</p>
              <p>30</p>
              <p> &#x2713;</p>
              <p>X</p>
              <p>X</p>
            </div>
          </div>
          <div className="container border-g">
            <p className="Popular--tag">Most Popular</p>
            <h1 className="plan--h1">$4.99<small>/m</small></h1>
            <div className="plan--ditails">
              <p> &#x2713;</p>
              <p>100</p>
              <p> &#x2713;</p>
              <p> &#x2713;</p>
              <p>X</p>
            </div>
          </div>
          <div className="container">
            <h1 className="plan--h1">$19.99<small>/m</small></h1>
            <div className="plan--ditails">
              <p>&#x2713;</p>
              <p>500+</p>
              <p>&#x2713;</p>
              <p>&#x2713;</p>
              <p>&#x2713;</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}