import React from "react";
import Nav from './components/bottomNavigator/Nav';
import Login from "./components/login/Login";
import Register from './components/register/Register';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Activity from "./components/activity/Activity";
import Process from './components/processs/Process';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{
          width: '100%',
          height: '100%'
        }}>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/process" component={Process}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/activity" component={Activity}></Route>
          <Nav/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;