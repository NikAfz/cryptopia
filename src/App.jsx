import React from "react";
// import ReactDOM  from "react-dom";
import NavBar from "./NavBar";

import Footer from "./Footer";
import Home from "./Home";
import FAQ from "./FAQ"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App(props) {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>


        <Route path="/cryptopia" element={<Home/>}/>
        <Route path="/cryptopia/FAQ" element={<FAQ/>}/>
    
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
};

export default App;