import React from "react";
import inputValue from "./Search";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchInfo() {



  const searchRes = data.map((item)=>{
    return(
      <div className="SearchInfo">
        <div className="info--container">
          <div className="info--left">
            <div className="info--left-top">
              <img className="currency-logo" src="../icon/Bitcoin.svg.webp" alt="currency-logo" />
              <h1 className="currency--name">
                {item.name}
              </h1>
            </div>
            <div className="info--left-bottom">
              <h1 className="currency--perice">
                $ 25,999.47
              </h1>
              <small className="currency--percent">
                0.44 %
              </small>
            </div>
          </div>


          <div className="info--right">
            <div className="info--right-top">
              <h2 className="info--header">
                info :
              </h2>
              <p className="info--paragraph">
                Bitcoin (abbreviation: BTC or XBT; sign: ₿) is a decentralized digital currency.
                Bitcoin transactions are verified by network nodes through cryptography
                and recorded in a public distributed ledger called a blockchain.
              </p>
            </div>
            <div className="info--action-button">
              <button>sell / buy</button>
              <button>website</button>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return( 
    <div>
      {searchRes}
    </div>
  )
}