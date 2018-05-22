import React from "react";
import RouteList from './routes';
import Nav from './components/bottomNavigator/Nav';
class App extends React.Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <RouteList/>
        <Nav/>
      </div>
    )
  }
}
export default App;