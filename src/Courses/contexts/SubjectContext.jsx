import React, { useReducer, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import * as api from "../../services/api";

export const SubjectContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return {
        ...state,
        courses: [],
        fetchingCourses: true,
      };
    case "STORE_COURSES":
      return {
        ...state,
        courses: action.courses,
        fetchingCourses: false,
      };

    default:
      throw new Error();
  }
};

function SubjectProvider(props) {
  const params = useParams();
  console.log(params);
  console.log(useRouteMatch());
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    fetchingCourses: false,
    courses: [],
  });

  useEffect(() => {
    dispatch({
      type: "FETCH_COURSES",
    });
    api.getSubjectCourses(params).then((res) => {
      console.log(res);
      dispatch({
        type: "STORE_COURSES",
        courses: res,
      });
    });
  }, []);
  return (
    <SubjectContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

export default SubjectProvider;
