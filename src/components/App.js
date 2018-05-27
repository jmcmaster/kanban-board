import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
// import BoardView from './BoardView';
// import MainView from './MainView';
import AllBoardsContainer from '../containers/AllBoardsContainer';
import CreateBoardContainer from '../containers/CreateBoardContainer';
import ActiveBoardContainer from '../containers/ActiveBoardContainer';

const MainView = () => (
  <div>
    <CreateBoardContainer />
    <AllBoardsContainer />
  </div>
);

const BoardView = ({match}) => (
  <ActiveBoardContainer id={match.params.id} />
);

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