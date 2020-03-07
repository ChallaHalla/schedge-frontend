import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageContainer from "./Home/components/HomePageContainer";
import HomePageProvider from "./Home/contexts/HomePageContext";
import SchoolsContainer from "./Courses/components/SchoolsContainer";
import SchoolContainer from "./Courses/components/SchoolContainer";
import SubjectContainer from "./Courses/components/SubjectContainer";
import ScheduleProvider from "./Schedule/contexts/ScheduleContext";
import ScheduleContainer from "./Schedule/components/ScheduleContainer";

function App(props) {
  return (
    <Router>
      <ScheduleProvider>
        <ScheduleContainer />
      </ScheduleProvider>
      <Switch>
        <Route
          path="year/:year_id/semester/:semester_id/schools/:school_id/subject/:subject_id"
          component={SubjectContainer}
        />
        <Route
          path="/semester/:semester_id/schools/:school_id/"
          component={SchoolContainer}
        />
        <Route
          path="/semester/:semesterid/schools"
          component={SchoolsContainer}
        />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  );
}

export default App;
