import React from "react";
import ReactDOM  from "react-dom";
import NavBar from "./NavBar";
import SearchBar from "./Search"
import SearchInfo from "./SearchInfo";
import CoinListElements from "./coinListElements";
import PremiumList from "./SubscribeList";
import Footer from "./Footer";

function Page() {
  return(
    <>
      <NavBar />
      <SearchBar />
      {/* <SearchInfo /> */}
      <main>
        <CoinListElements />
        <PremiumList />
      </main>
      <Footer />
    </>
  )
}
ReactDOM.render(<Page />, document.getElementById("root"));