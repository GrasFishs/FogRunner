import React, {Component} from 'react';
import Bar from './charts';
import './activity.css'

const mockdata = {
  date: '今天',
  steps: 1425,
  remain: 6735,
  distance: 0.92,
  cal: 784,
  activeTime: 11
}

const options = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: [
      "周四",
      "周五",
      "周六",
      "周天",
      "周一",
      "周二",
      "周三"
    ]
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: '步数',
      type: 'bar',
      data: [
        6302,
        6881,
        3208,
        11216,
        5190,
        5253,
        1425
      ],
      label: {
        show: true,
        position: 'top'
      },
      itemStyle: {
        color: (params) => {
          const STEPS = 8000;
          const val = params.value;
          const [FULL,
            HALF,
            FAIL] = ['#53BC53', '#F6D100', '#990033']
          if (val > STEPS) {
            return FULL;
          } else if (val > STEPS / 2 && val <= STEPS) {
            return HALF;
          } else if (val <= STEPS / 2) {
            return FAIL;
          }
        }
      }
    }
  ]
}
class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="activity">
        <header>
          <div className="date">{mockdata.date}</div>
          <div className="steps">{mockdata.steps}</div>
          <div className="remain">还差{mockdata.remain}步到达目标</div>
        </header>
        <div className="info">
          <div className="distance">
            <div className="data">{mockdata.distance}</div>
            <div className="text">步行距离</div>
          </div>
          <div className="cal">
            <div className="data">{mockdata.cal}</div>
            <div className="text">卡路里</div>
          </div>
          <div className="activeTime">
            <div className="data">{mockdata.activeTime}</div>
            <div className="text">活跃时长</div>
          </div>
        </div>
        <Bar data={options}/>
      </div>
    )
  }
}

export default Activity;