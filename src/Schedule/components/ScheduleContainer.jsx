import React, { useContext, useEffect } from "react";
import '../styles/Schedule.css';
import Calendar from '@toast-ui/react-calendar';

import { ScheduleContext } from "../contexts/ScheduleContext";
import ClassCartItem from './ClassCartItem';
import ScheduleSidebar from './ScheduleSidebar';

function ScheduleContainer() {
  const scheduleContext = useContext(ScheduleContext);
  const { showSchedule, toggleScheduleWindow } = scheduleContext;

  // <Calendar style={{width:"100%"}} className="test"/>
  return (
    <div>
      <div className="schedule__toggle" onClick={toggleScheduleWindow}>
  Toggle schedule
      </div>
      <ScheduleSidebar />
    </div>
  );
}

export default ScheduleContainer;
