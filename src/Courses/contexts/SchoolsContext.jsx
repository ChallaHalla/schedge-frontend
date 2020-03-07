import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";

export const SchoolsContext = React.createContext();

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

function SchoolsProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingSchools: false,
    schools: []
  });

  useEffect(() => {
    dispatch({
      type: "FETCH_SCHOOLS"
    });
    api.getSchools().then(res => {
      console.log(res);
      dispatch({
        type: "STORE_SCHOOLS",
        schools: res
      });
    });
  }, []);
  return (
    <SchoolsContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </SchoolsContext.Provider>
  );
}

export default SchoolsProvider;
