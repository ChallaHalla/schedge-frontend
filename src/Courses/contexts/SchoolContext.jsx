import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/api";

export const SchoolContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUBJECTS":
      return {
        ...state,
        subjects: [],
        fetchingSubjects: true,
      };
    case "STORE_SUBJECTS":
      return {
        ...state,
        subjects: action.schools,
        fetchingSubjects: false,
      };

    default:
      throw new Error();
  }
};

function SchoolProvider(props) {
  const { children } = props;
  const { school_id } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    subjects: false,
    schools: [],
  });

  useEffect(() => {
    dispatch({
      type: "FETCH_SUBJECTS",
    });
    api.getSchoolSubjects({ school_id }).then((res) => {
      console.log(res);
      dispatch({
        type: "FETCH_SUBJECTS",
        subjects: res,
      });
    });
  }, []);
  return (
    <SchoolContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}

export default SchoolProvider;
