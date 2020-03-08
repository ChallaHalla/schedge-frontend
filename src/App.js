import "./App.css";
import React from "react";
import {
  BrowserRouter as Router, Route, Switch, useRouteMatch, 
} from "react-router-dom";
import HomePageContainer from "./Home/components/HomePageContainer";
import HomePageProvider from "./Home/contexts/HomePageContext";
import SchoolsContainer from "./Courses/components/SchoolsContainer";
import SchoolsProvider from "./Courses/contexts/SchoolsContext";
import SchoolProvider from "./Courses/contexts/SchoolContext";
import SchoolContainer from "./Courses/components/SchoolContainer";
import SubjectContainer from "./Courses/components/SubjectContainer";
import ScheduleProvider from "./Schedule/contexts/ScheduleContext";
import ScheduleContainer from "./Schedule/components/ScheduleContainer";
import ScheduleSidebar from "./Schedule/components/ScheduleSidebar";
import SubjectProvider from "./Courses/contexts/SubjectContext";
import SearchBar from "./Home/components/SearchBar";
import SearchBarContext from "./Home/contexts/SearchBarContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <ScheduleProvider>
      <Router>
        <ScheduleSidebar />
        <Switch>
          <Route path="/semester/:year_id/:semester_id">
            <WithSearchBar />
          </Route>
          <Route path="/">
            <HomePageContainer />
          </Route>

        </Switch>
      </Router>
    </ScheduleProvider>
  );
}

function WithSearchBar() {
  const match = useRouteMatch();
  return (
    <>
      <SearchBarContext>
        <SearchBar />
      </SearchBarContext>

      <Switch>
        <Route path={`${match.url}/schedule`}>
          <ScheduleProvider>
            <ScheduleContainer />
          </ScheduleProvider>
        </Route>
        <Route
          path={`${match.url}/schools/:school_id/subject/:subject_id`}
          component={SubjectContainer}
        >
          <SubjectProvider>
            <SubjectContainer />
          </SubjectProvider>
        </Route>
        <Route 
          path={`${match.url}/schools/:school_id/`}
        >
          <SchoolProvider>
            <SchoolContainer />
          </SchoolProvider>
        </Route>
        <Route 
          path={`${match.url}/schools`}
        >
          <SchoolsProvider>
            <SchoolsContainer />
          </SchoolsProvider>
        </Route>
      
      </Switch>
    </>
  );
}

export default App;
