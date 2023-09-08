import React from "react";

export default function CoinList(props) {

  return(
    <>
      <section className="coin--list-container">


        <div>
          <div className="pic--name">
            <img src={props.img} alt="coin" />
            {/* ../icon/Bitcoin.svg.webp */}
            <p> 
              {props.name}
              <small>
                {props.short}
              </small>
            </p>
            
          </div>
        </div>

        <div className="prise" >
          <h3>
            ${props.price.toLocaleString()}
          </h3>

          {props.percent < 0 ? (
            <small className="red" >
              {props.percent.toFixed(2)}%
            </small>
          ):(
            <small className="green" >
              {props.percent.toFixed(2)}%
            </small>
          )}

          
        </div>
        {/* <div className="stats">
          <img src="./icon/line.svg" alt="stats" />
        </div> */}
      </section>

    </>
    
  )
}