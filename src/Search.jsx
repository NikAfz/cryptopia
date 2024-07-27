import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@mui/icons-material";

export default function SearchBar() {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return(
    <div className="search--container">
      <input className="search--inp"  type="text" placeholder="Search" onChange={handleInputChange} />
      <button className="search--button" >
        <Search fontSize="large"/>
      </button>
    </div>
  )
}