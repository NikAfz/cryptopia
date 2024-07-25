import React from "react";
import ReactDOM  from "react-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FaqElement from "./FaqElement";
import data from "./faq-data";
function FAQ(){

  
  const faqData = data.map((data) =>{
    return(
      <FaqElement 
        key = {data.id}
        question = {data.q}
        answer = {data.a}
      />
    )
  })
  

  return(
    <>
    <main>

    <div className="faq--element-container">
      {faqData}
    </div>

    </main>
    </>
  )
}

export default FAQ;