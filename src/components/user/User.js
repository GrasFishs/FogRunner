import React, {Component} from 'react';
import './user.css';
import Font from 'react-fontawesome';

const mockdata = {

  name:'用户名',
  birth:'2018,5,16',
  dayaim: 8000,
  title: '初级探险家'
}
class User extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="user">
        <div className="head">
          <div className="headname">探险者</div>
          <div>设置</div>
        </div>
        <div className="body">
        <div className="userinfor">
        <div><Font name="user-circle" style={{fontSize:'8em'}}/></div>
          <div className="infor">{mockdata.name}</div>
          <div className="infor">{mockdata.birth}</div>
        </div>
          <div className="dayaim">
          <div>每天的目标</div>
          <div className="dayaimdata">{mockdata.dayaim}</div>
          </div>
          <div className="title">
          <div>当前称号</div>
          <div className="titledata">{mockdata.title}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default User;