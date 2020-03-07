import React, { useContext, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { SubjectContext } from "../contexts/SubjectContext";

function SubjectContainer() {
  const subjectContext = useContext(SubjectContext);
  //const {} = subjectContext;
  const params = useParams();
  const match = useRouteMatch();
  console.log(params);
  return <div>Subject container</div>;
}

export default SubjectContainer;
