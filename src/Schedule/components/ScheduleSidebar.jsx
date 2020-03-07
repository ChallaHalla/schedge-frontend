import '../styles/Schedule.css';
import React, { useContext, useEffect } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";
import CourseCartItem from './CourseCartItem';

function ScheduleSidebar() {
  const scheduleContext = useContext(ScheduleContext);
  const { showSchedule, toggleScheduleWindow } = scheduleContext;
  return (
    <div>
      <div className="schedule__toggle" onClick={toggleScheduleWindow}>
  Toggle schedule
      </div>
 
      <div className={showSchedule ? "schedule-window__visible" : "schedule-window__hidden"}>
        <span className="schedule-window__close" onClick={toggleScheduleWindow}> close sidebar </span>
        <div className="classes-cart">
          <CourseCartItem course={{ name: "test" }} />
        </div>
      </div>
    </div>
  );
}

export default ScheduleSidebar;
