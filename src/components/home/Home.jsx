import React, {Component} from 'react';

const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={style}>起始画面</div>
    )
  }
}

export default Home;