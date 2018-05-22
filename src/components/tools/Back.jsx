import React, {Component} from 'react';
import Font from 'react-fontawesome';
import {Link} from 'react-router-dom';
class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const ARROW = 'chevron-left';
    const to = this.props.to || '/';
    return (
      <Link to={to} style={{
        color: 'white'
      }}><Font name={ARROW} style={{
        fontSize: this.props.size
      }}/></Link>
    )
  }
}

export default Back;