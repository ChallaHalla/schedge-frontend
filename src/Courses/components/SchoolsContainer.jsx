import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function SchoolContainer() {
  const params = useParams();
  console.log(params);
  return <div>Schools container</div>;
}

export default SchoolContainer;
