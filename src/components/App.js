import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import BoardView from './BoardView';
import MainView from './MainView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/b/:id" component={BoardView} />
          <Route path="/" component={MainView} />
        </Switch>
      </Router>
    );
  }
}

export default App;