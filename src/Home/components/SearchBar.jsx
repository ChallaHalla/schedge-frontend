import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBarContext } from "../contexts/SearchBarContext";

function SearchBar() {
  const searchBarContext = useContext(SearchBarContext);
  const { inputVal, setInputVal } = useState("");
  return (
    <div>
      <input onChange={e => setInputVal(e.target.value)}></input>
      <button onClick={searchBarContext.search(inputVal)}></button>
    </div>
  );
}

export default SearchBar;
