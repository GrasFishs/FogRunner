import React, {Component} from 'react';
import './register.css';
import Font from 'react-fontawesome';
import Back from './../tools/Back';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="register">
        <nav>
          <div><Back/></div>
          <div>注册</div>
          <div>服务条例</div>
        </nav>
        <div className="body">
          <div className="top">
            <div className="camera"></div>
            <input type="text" className="username" placeholder="用户名"/>
          </div>
          {/*需要改*/}
          <div className="center">
            <div id="male"><Font name="male" style={{
        fontSize: '2em'
      }}/>男生</div>
            <div id="female"><Font name="female" style={{
        fontSize: '2em'
      }}/>女生</div>
          </div>
          <div className="bottom">
            <form>
              <div className="form-item">
                <label htmlFor="mail">邮箱<input type="text"/></label>
              </div>
              <div className="form-item">
                <label htmlFor="password">密码<input type="password"/></label>
              </div>
              <div className="form-item">
                <label htmlFor="birthday">生日<input type="date"/></label>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <button>注册</button>
        </footer>
      </div>
    )
  }
}

export default Register;