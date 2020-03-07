import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SchoolsContext } from "../contexts/SchoolsContext";

function SchoolsContainer() {
  const params = useParams();
  console.log(params);
  return <div>Schools container</div>;
}

export default SchoolsContainer;
