import './App.css';
import React from 'react';
import HomePageContainer from './HomePageContainer';
import {
  Switch, Route, useRouteMatch, useParams,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
      <Route path=""> 
      <HomePageContainer />
      </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
