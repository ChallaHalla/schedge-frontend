import React, { useContext, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { SchoolContext } from "../contexts/SchoolContext";

function SchoolContainer() {
  const schoolContext = useContext(SchoolContext);
  const { subjects, fetchingSubjects } = schoolContext;
  const params = useParams();
  const match = useRouteMatch();
  console.log(params);
  console.log(subjects);
  if (fetchingSubjects) {
    return <div class="loading">Loading</div>;
  }
  return (
    <div>
      <h3>Schools</h3>
      {subjects.map(subject => (
        <div>
          <Link to={`${match.url}/subject/${subject.code}`}>
            {subject.name}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default SchoolContainer;
