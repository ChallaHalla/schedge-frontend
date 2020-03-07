import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";

export const HomePageContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

function HomePageProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingSchools: false,
    schools: [],
  });

  return (
    <HomePageContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export default HomePageProvider;
