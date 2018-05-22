import React, {Component} from 'react';
import Font from 'react-fontawesome';
import {NavLink} from 'react-router-dom';
class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  clickHandler = e => {
    for (const key in this.props) {
      console.log(`${key}:${this.props[key]}`)
    }
  }
  render() {
    const fontStyle = {
      fontSize: '1.5em'
    }
    const {icon, routeTo} = this.props;
    const text = this.props.children;
    return (
      <NavLink
        to={routeTo}
        className="nav-item">
        <Font name={icon} style={fontStyle}/>
        <div>{text}</div>
      </NavLink>
    )
  }
}

export default NavItem;