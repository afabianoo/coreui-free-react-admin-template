import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { DefaultLayout } from './containers';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Início" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
