import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SchoolContext } from "../contexts/SchoolContext";

function SchoolContainer() {
  const schoolContext = useContext(SchoolContext);
  const { courses } = schoolContext;
  const params = useParams();
  console.log(params);

  return <div>School container</div>;
}

export default SchoolContainer;
