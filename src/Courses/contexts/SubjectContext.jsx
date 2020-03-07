import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";
import { useParams } from "react-router-dom";
export const SubjectContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return {
        ...state,
        courses: [],
        fetchingCourses: true
      };
    case "STORE_COURSES":
      return {
        ...state,
        courses: action.courses,
        fetchingCourses: false
      };

    default:
      throw new Error();
  }
};

function SubjectProvider(props) {
  const params = useParams();
  console.log(params);
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingCourses: false,
    courses: []
  });

  useEffect(() => {
    console.log("POOP");
    api.getSubjectCourses(params).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <SubjectContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

export default SubjectProvider;
