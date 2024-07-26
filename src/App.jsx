import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import Home from "./Home";
import FAQ from "./FAQ"
import Page404 from "./page404";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App(props) {
return(
    <BrowserRouter>
      <NavBar/>
      <Routes>


        <Route path="/cryptopia" element={<Home/>}/>
        <Route path="/cryptopia/FAQ" element={<FAQ/>}/>
        <Route path="*" element={<Page404/>}/>

    
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
};

export default App;