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
  const info = false;
  if (fetchingCourses) {
    return <div class="loading">Loading</div>;
  }
  console.log(courses);
  return (
    <div>
      {courses.map(course => (
        <div>
          <h4>{course.name}</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Open</th>
                <th scope="col">Instructor(s)</th>
                <th scope="col">Location</th>
                <th scope="col">Day(s)</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {course.sections.map(section => (
                <tr>
                  <td>{section.status}</td>
                  <td>{section.instructors} </td>
                  <td>{section.location}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default SubjectContainer;
