import React, { useContext, useEffect, useState } from "react";
import '../styles/Schedule.css';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { ScheduleContext } from "../contexts/ScheduleContext";
import ScheduleSidebar from './ScheduleSidebar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function ScheduleContainer() {
  const scheduleContext = useContext(ScheduleContext);
  const { showSchedule, toggleScheduleWindow } = scheduleContext;
  const localizer = momentLocalizer(moment);

  const allViews = Object.keys(Views).map((k) => Views[k]);
  const [events, setEvents] = useState([]);

  const addEvent = () => setEvents((curr) => {
    curr.push(
      {
        title: "TEST EVENT",
        start: new Date('3/6/2020'),
        end: new Date('3/7/2020'),
      },
    );
    return curr;
  });
  

  return (
    <div> 
      <button onClick={() => { console.log("ASdsad"); addEvent(); }}> test </button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={allViews}
        view={Views.WEEK}
      />
    </div>
  );
}

export default ScheduleContainer;
