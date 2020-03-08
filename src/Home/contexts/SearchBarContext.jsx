import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";

export const SearchBarContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RESULTS":
      return {
        ...state,
        searchResults: [],
        fetchingResults: false
      };
    case "STORE_RESULTS":
      return {
        ...state,
        searchResults: action.courses,
        fetchingResults: true
      };
    default:
      throw new Error();
  }
};

function SearchBarProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingResults: false,
    courses: []
  });

  function search(query) {
    api.getSearch(query).then(res => {
      dispatch({
        type: "STORE_RESULTS",
        courses: res
      });
    });
  }
  return (
    <SearchBarContext.Provider
      value={{
        ...state,
        search
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
}

export default SearchBarProvider;
