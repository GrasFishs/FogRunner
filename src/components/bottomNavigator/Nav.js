import React, {Component} from 'react';
import './nav.css';
import NavItem from './NavItem';

const navTabs = [
  {
    icon: 'globe',
    routeTo: '/sport',
    text: '运动'
  }, {
    icon: 'bar-chart',
    routeTo: '/process',
    text: '进程'
  }, {
    icon: 'calendar-o',
    routeTo: '/activity',
    text: '活动'
  }, {
    icon: 'smile-o',
    routeTo: '/award',
    text: '物资'
  }, {
    icon: 'user-circle',
    routeTo: '/settings',
    text: '我的'
  }
]
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="navbar">
        {navTabs.map((tab, indx) => (
          <NavItem routeTo={tab.routeTo} key={indx} icon={tab.icon}>{tab.text}</NavItem>
        ))}
      </div>
    )
  }
}

export default Nav;