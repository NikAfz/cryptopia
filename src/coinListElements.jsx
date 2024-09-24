import React from "react";
import CoinList from "./CoinList";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonList from "./Skeleton";

export default function CoinListElements(props) {
  const [data, setdata] = useState(null);

  const ApiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(ApiUrl)
      .then((resalt) => {
        setdata(resalt.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return <SkeletonList />;

  const filteredCoins = data.filter((coin) => {
    return !props.inputValue
      ? true
      : coin.name.toLowerCase().includes(props.inputValue.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(props.inputValue.toLowerCase());
  });

  if (filteredCoins.length === 0) {
    // console.error("no coin");
    return (
      <h1 className="no-coin--text">
        <strong>{props.inputValue}</strong> was not found in the top 30 coins
      </h1>
    );
  }

  const elements = filteredCoins.map((coin) => {
    return (
      <CoinList
        key={coin.id}
        name={coin.name}
        short={coin.symbol}
        price={coin.current_price}
        percent={coin.price_change_percentage_24h}
        img={coin.image}
      />
    );
  });

  return <div className="coin--list">{elements}</div>;
}
