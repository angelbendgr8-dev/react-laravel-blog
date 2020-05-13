import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Index from './pages/Index'
import Details from './pages/Details';


export default class Router extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Index}/>
          <Route  path='/read/:category/:name' component={Details}/>
      </Switch>
    );
  }
}
