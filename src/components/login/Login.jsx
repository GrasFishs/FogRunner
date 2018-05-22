import React, {Component} from 'react';
import './login.css'
import Back from './../tools/Back';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="login">
        <nav><Back/></nav>
        <div className="body">
          <div className="avatar"></div>
          <form>
            <div className="form-item">
              <label htmlFor="username">账号<input type="text"/></label>
            </div>
            <div className="form-item">
              <label htmlFor="password">密码<input type="password"/></label>
            </div>
          </form>
          <button>进入迷雾世界</button>
          <div className="forget">忘记密码？<a>找回</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;