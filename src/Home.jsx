import React, { useState } from "react";
// import ReactDOM  from "react-dom";
import NavBar from "./NavBar";
import SearchBar from "./Search";
// import SearchInfo from "./SearchInfo";
import CoinListElements from "./coinListElements";
import PremiumList from "./SubscribeList";
import Footer from "./Footer";

function Home(props) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      {/* <SearchInfo /> */}
      <main>
        <CoinListElements inputValue={inputValue} />
        <PremiumList />
      </main>
    </>
  );
}

export default Home;
