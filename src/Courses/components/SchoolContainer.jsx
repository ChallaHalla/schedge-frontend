import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function SchoolContainer() {
  const params = useParams();
  console.log(params);
  return <div>School container</div>;
}

export default SchoolContainer;
