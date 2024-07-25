import React from "react";
// import ReactDOM  from "react-dom";
import NavBar from "./NavBar";
import SearchBar from "./Search"
// import SearchInfo from "./SearchInfo";
import CoinListElements from "./coinListElements";
import PremiumList from "./SubscribeList";
import Footer from "./Footer";

function Home(props) {
  return (
    <>
      <SearchBar />
      {/* <SearchInfo /> */}
      <main>
        <CoinListElements />
        <PremiumList />
      </main>
    </>
  )
};

export default Home;
