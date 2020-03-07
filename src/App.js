import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import HomePageContainer from './Home/components/HomePageContainer';
import HomePageProvider from "./Home/contexts/HomePageContext";
import ScheduleContainer from "./Schedule/components/ScheduleContainer";
import ScheduleProvider from "./Schedule/contexts/ScheduleContext";
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

function App(props) {
  return (
  <Router>
    <ScheduleProvider>
      <ScheduleContainer />
    </ScheduleProvider>
      <Switch>
      <HomePageProvider>
      <Route path="/home" component={HomePageContainer}/> 

      </HomePageProvider>
      </Switch>

  </Router>

  );
}

export default App;
