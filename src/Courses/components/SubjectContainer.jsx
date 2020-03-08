import React, { useContext, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { SubjectContext } from "../contexts/SubjectContext";

function SubjectContainer() {
  const subjectContext = useContext(SubjectContext);
  //console.log(subjectContext);
  const { courses, fetchingCourses } = subjectContext;
  //console.log(courses);
  const params = useParams();
  const match = useRouteMatch();
  if (fetchingCourses) {
    return <div class="loading">Loading</div>;
  }
  console.log(courses);
  return (
    <div>
      {courses.map(course => (
        <div>
          <h4>{course.name}</h4>
          <ul>
            {course.sections.map(section => (
              <li>{section.instructors}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SubjectContainer;
