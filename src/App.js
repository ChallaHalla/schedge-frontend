import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePageContainer from './HomePageContainer';

function App(props) {
  return (
  <Router>
      <Switch>
      <Route path="/home" component={HomePageContainer}/> 
      </Switch>

  </Router>

  );
}

export default App;
