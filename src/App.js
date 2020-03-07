import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from './Home/components/HomePageContainer';
import HomePageProvider from "./Home/contexts/HomePageContext";

function App(props) {
  return (
  <Router>
      <Switch>
      <HomePageProvider>
      <Route path="/home" component={HomePageContainer}/> 

      </HomePageProvider>
      </Switch>

  </Router>

  );
}

export default App;
