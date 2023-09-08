import React, { useState } from "react";

export default function FaqElement({question, answer}) {
  const [isShown, setIsShown] = useState(false);


  return(

    <div className="faq--container">
      <div 
        className="faq--question" 
        onClick={() => setIsShown((prev) => !prev)}
      >
        <h2 className="faq--txt">{question}</h2>
        <p className="faq--txt">&darr;</p>
      </div>
      { isShown&& <p className="faq--txt faq--answer">{answer}</p>}
    </div>
  )
}