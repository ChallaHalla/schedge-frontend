import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function SubjectContainer() {
  const params = useParams();
  console.log(params);
  return <div>Subject container</div>;
}

export default SubjectContainer;
