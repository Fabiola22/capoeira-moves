import React, { Component } from 'react';
import "./App.css";
import Moves from './components/Moves/Moves';
import Move from './components/Move/Move';
import NotFound from './components/NotFound';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Switch>
            <Route path="/moves/:id" component={Move} />} />
            <Route path="/moves" component={Moves} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/moves" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
