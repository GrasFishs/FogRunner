import React, {Component} from 'react';
import './setting.css';
import Font from 'react-fontawesome';
import Back from './../tools/Back';
import {Modal} from 'antd';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  showModal = () => {
    this.setState({visible: true});
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({visible: false});
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({visible: false});
  }

  render() {
    return (
      <div className="setting">
        <nav>
          <div><Back/></div>
          <div>设置</div>
        </nav>
        <div className="body">
          <div className="user">
            <Font name="user-circle" style={{
              fontSize: '5em'
            }}/>
            <div className="userinfor">
              <div>
                <h2>用户名</h2>
              </div>
              <div>邮箱</div>
            </div>
          </div>
          <div className="list">
            <div className="listitem">我的资料</div>
            <div className="listitem">账户与安全</div>
            <div className="listitem">音效与通知</div>
            <div className="listitem">隐私</div>
            <div className="listitem">通用</div>
          </div>
        </div>
        <footer>
          <button onClick={this.showModal}>退出当前用户</button>
          <Modal
            title="提示"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
            <p>确定退出当前用户？</p>
          </Modal>
        </footer>
      </div>
    )
  }
}

export default Setting;