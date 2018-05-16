import React, {Component} from 'react';
import './award.css';
import Font from 'react-fontawesome';
import {Carousel} from 'antd';

const awards = [
  {
    name: 'shopping-bag',
    text: '网店优惠券'
  }, {
    name: 'shopping-cart',
    text: '购物券'
  }, {
    name: 'envelope',
    text: '红包'
  }, {
    name: 'star-half-o',
    text: '门店消费券'
  }, {
    name: 'toggle-off',
    text: '兑换码'
  }, {
    name: 'money',
    text: '补签券'
  }, {
    name: 'ticket',
    text: '电影票'
  }
]
class Award extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="award">
        {/* 头部文字的显示位置！ */}
        <div className="head">
          <div className="awardword1">战利品</div>
          <div className="awardword2">相册</div>
        </div>
        <div className="body">
          <div className="awardpicture">
            <h2>破雾奖励</h2>
            <h3>最近获得</h3>
            {/* 滚动显示 */}
            {/* 显示内容为h3内容 */}
            <Carousel autoplay>
              <div>
                <h2>11111</h2>
              </div>
              <div>
                <h2>22222</h2>
              </div>
              <div>
                <h2>33333</h2>
              </div>
              <div>
                <h2>44444</h2>
              </div>
            </Carousel>
          </div>
          <div className="awardlist">
            {awards.map((item, index) => (
              <div className="item" key={index}>
                {/* 图标显示 使用i标签  fa-4x表示四倍大小*/}
                <Font
                  name={item.name}
                  style={{
                  fontSize: '3em'
                }}/>{item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Award;