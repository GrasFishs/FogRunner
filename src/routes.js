import Login from "./components/login/Login";
import Register from './components/register/Register';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/Home";
import Activity from "./components/activity/Activity";
import Process from './components/processs/Process';
import FogMap from './components/FogMap';
import Setting from './components/setting/Setting';
import Award from "./components/award/Award";
import User from "./components/user/User";
import More from './components/processs/More';

import React, {Component} from 'react';
class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main style={{
        width: '100%',
        height: '100%'
      }}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/process" component={Process}/>
          <Route path="/register" component={Register}/>
          <Route path="/activity" component={Activity}/>
          <Route path="/sport" component={FogMap}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/user" component={User}/>
          <Route path="/award" component={Award}/>
          <Route path="/more" component={More}/>
        </Switch>
      </main>
    )
  }
}

export default RouteList;