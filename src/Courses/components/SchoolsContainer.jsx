import React, { useContext, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { SchoolsContext } from "../contexts/SchoolsContext";

function SchoolsContainer() {
  const schoolsContext = useContext(SchoolsContext);
  const { fetchingSchools, schools } = schoolsContext;
  useEffect(() => {
    console.log(schoolsContext);
  }, []);
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);
  console.log(params);
  if (fetchingSchools) {
    return <div className="loading">Loading</div>;
  }
  return (
    <div>
      <h3>Schools</h3>
      {schools.map((school) => (
        <div>
          <Link to={`${match.url}/${school.code}`}>{school.name}</Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default SchoolsContainer;
