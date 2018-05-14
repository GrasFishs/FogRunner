import React, {Component} from 'react';
import './process.css';
import Pie from './pie';
const mockdata = {
  month: 1,
  fullDay: 4,
  halfDay: 11,
  failDay: 2,
  averageSteps: 6062,
  maxSteps: 11216,
  thisMonthSteps: 62.8,
  thisYearSteps: 62.8
}

const option = {
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['rose1', 'rose2', 'rose3']
  },
  series: [
    {
      type: 'pie',
      radius: [
        '30%', '70%'
      ],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true,
          textStyle: {
            fontWeight: 'bold'
          }
        }
      },
      data: [
        {
          value: mockdata.failDay,
          name: `${mockdata.failDay}天`
        }, {
          value: mockdata.fullDay,
          name: `${mockdata.fullDay}天`
        }, {
          value: mockdata.halfDay,
          name: `${mockdata.halfDay}天`
        }
      ],
      itemStyle: {
        normal: {
          label: {
            position: 'inner',
            formatter: function (params) {
              return (params.percent - 0).toFixed(0) + '%'
            }
          },
          labelLine: {
            show: false
          },
          color: (item) => {
            switch (item.dataIndex) {
              case 0:
                return '#E52F36';
              case 1:
                return '#53BC53';
              case 2:
                return '#F6D100';
              default:
                return;
            }
          }
        }
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 300 * idx;
      }
    }
  ]
}
class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="process">
        <nav>进程</nav>
        <div className="stat">
          <div className="left">
            <div className="month">{mockdata.month}月份统计</div>
            <div>每日步数目标</div>
            <Pie data={option}/>
          </div>
          <div className="right">
            <div>步数</div>
            <div className="average steps">{mockdata.averageSteps}</div>
            <div>平均步数</div>
            <div className="max steps">{mockdata.maxSteps}</div>
            <div>最高步数</div>
          </div>
        </div>
        <div className="rank">
          <div>排行榜</div>
        </div>
        <div className="distance">
          <div>步行距离</div>
          <div className="data">
            <div className="thisMonth">
              <div>本月</div>
              <div className="steps">{mockdata.thisMonthSteps}</div>
            </div>
            <div className="thisYear">
              <div>本年</div>
              <div className="steps">{mockdata.thisYearSteps}</div>
            </div>
          </div>
          <div>以千米计，包括所有跑步和徒步旅行活动。</div>
        </div>
      </div>
    )
  }
}

export default Process;