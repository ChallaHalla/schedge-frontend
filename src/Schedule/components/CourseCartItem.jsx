import React, { useContext, useEffect } from "react";

function CourseCartItem(props) {
  const { course } = props;
  return (
    <div className="sidebar__item">
      <h2> {course.name} </h2>

    </div>
  );
}

export default CourseCartItem;
