import '../styles/Schedule.css';
import React, { useContext, useEffect } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";
import ClassCartItem from './ClassCartItem';

function ScheduleSidebar() {
  const scheduleContext = useContext(ScheduleContext);
  const { showSchedule, toggleScheduleWindow } = scheduleContext;
  return (

    <div className={showSchedule ? "schedule-window__visible" : "schedule-window__hidden"}>
      <span className="schedule-window__close" onClick={toggleScheduleWindow}> close sidebar </span>
      <div className="classes-cart">
        <ClassCartItem />

      </div>
    </div>
  );
}

export default ScheduleSidebar;
