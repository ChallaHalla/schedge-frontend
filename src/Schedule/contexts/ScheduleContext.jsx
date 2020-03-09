import React, { useReducer, useEffect } from "react";
import * as api from "../../services/api";

export const ScheduleContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "HIDE_SCHEDULE":
      return {
        ...state,
        showSchedule: false,
      };
    case "SHOW_SCHEDULE":
      return {
        ...state,
        showSchedule: true,
      };
    case "UPDATE_SCHEDULE":
      return {
        ...state,
        schedule: action.schedule,
      };

    default:
      throw new Error();
  }
};


function ScheduleProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    showSchedule: false,
    schedule: {},
  });

  const toggleScheduleWindow = () => {
    if (state.showSchedule) {
      dispatch({
        type: "HIDE_SCHEDULE",
      });
      return;
    } 
    dispatch({
      type: "SHOW_SCHEDULE",
    });
  };

  const addToSchedule = (course, section) => {
    // shedule will only allow you to add sectons, not courses
    const { schedule } = state;
    
    const key = section.registrationNumber;
    schedule[key] = {
      section,
      course,
    };
    dispatch({
      type: "UPDATE_SCHEDULE",
      schedule,
    });
  };

  return (
    <ScheduleContext.Provider
      value={{
        ...state,
        toggleScheduleWindow,
        addToSchedule,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;
