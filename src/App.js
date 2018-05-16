import React from "react";
import Nav from './components/bottomNavigator/Nav';
import Login from "./components/login/Login";
import Register from './components/register/Register';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Activity from "./components/activity/Activity";
import Process from './components/processs/Process';
import FogMap from './components/FogMap';
import Setting from './components/setting/Setting';
import Award from "./components/award/Award";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{
          width: '100%',
          height: '100%'
        }}>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/process" component={Process}/>
          <Route path="/register" component={Register}/>
          <Route path="/activity" component={Activity}/>
          <Route path="/sport" component={FogMap}/>
          <Route path="/settings" component={Setting}/>
          <Route path="/award" component={Award}/>
          <Nav/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;