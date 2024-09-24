import React from "react";

export default function CoinList(props) {
  return (
    <>
      <section className="coin--list-container">
        <div className="pic--name">
          <img src={props.img} alt="coin" />
          <p>
            {props.name}
            <small>{props.short}</small>
          </p>
        </div>

        <div className="prise">
          <h3>${props.price.toLocaleString()}</h3>
          <small className={props.percent < 0 ? "red" : "green"}>
            {props.percent.toFixed(2)}%
          </small>
        </div>
        {/* <div className="stats">
          <img src="./icon/line.svg" alt="stats" />
        </div> */}
      </section>
    </>
  );
}
