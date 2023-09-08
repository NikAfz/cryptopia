import React, { useState } from "react";

export default function SearchBar() {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return(
    <div className="search--container">
      <input className="search--inp"  type="text" placeholder="Search" onChange={handleInputChange} />
      <button className="search--button" >
        <img className="search--icon" src="../icon/magnifyingglass.png" alt="search" />
      </button>
    </div>
  )
}