import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";
export const HomePageContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SCHOOLS":
      return {
        ...state,
        schools: [],
        fetchingSchools: true
      };
    case "STORE_SCHOOLS":
      return {
        ...state,
        schools: action.schools,
        fetchingSchools: false
      };

    default:
      throw new Error();
  }
};

function HomePageProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingSchools: false,
    schools: []
  });

  useEffect(() => {
    api.getSchools().then(res => {
      console.log(res);
    });
    api.getSubjects().then(res => {
      console.log(res);
    });
  }, []);
  return (
    <HomePageContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export default HomePageProvider;
