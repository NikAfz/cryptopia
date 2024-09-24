import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";

export default function SearchBar(props) {
  return (
    <div className="search--container">
      <input
        className="search--inp"
        type="text"
        placeholder="Search"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
    </div>
  );
}
