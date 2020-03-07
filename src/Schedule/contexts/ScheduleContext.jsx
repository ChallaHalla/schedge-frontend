import React, { useReducer, useEffect} from "react";
import * as api from "../../services/api";
export const ScheduleContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "HIDE_SCHEDULE":
      return {
      ...state,
      showSchedule: false
    };
    case "SHOW_SCHEDULE":
      return {
        ...state,
      showSchedule: true
      };

    default:
      throw new Error();
  }
};


function ScheduleProvider(props) {
const {children} = props;
  const [state, dispatch] = useReducer(reducer, {
    showSchedule: false,
  });

  const toggleScheduleWindow = () => {
    if(state.showSchedule){
      dispatch({
        type:"HIDE_SCHEDULE"
      })
    return
    } 
    dispatch({
        type:"SHOW_SCHEDULE"
   })
  }

  return (
    <ScheduleContext.Provider
      value={{
        ...state,
        toggleScheduleWindow
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;
