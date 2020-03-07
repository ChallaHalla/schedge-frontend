import React, { useContext, useEffect} from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";
import '../styles/Schedule.css';
import Calendar from '@toast-ui/react-calendar';

function ScheduleContainer() {
  const scheduleContext = useContext(ScheduleContext);
  const {showSchedule, toggleScheduleWindow} = scheduleContext


  return (
  <div>
  <div className="schedule__toggle" onClick={toggleScheduleWindow}>
  Toggle schedule
  </div>
    <div className={showSchedule ?"schedule-window__visible" : "schedule-window__hidden"}>
    <Calendar />
    </div>
    </div>
  );
}

export default ScheduleContainer;
