import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';

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

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  setData = (data) => {
    option.series[0].data = data;
    this
      .pie
      .setOption(option);
  }
  componentDidMount() {
    this.pie = echarts.init(this.refs.pie);
    this.setData(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.setData(nextProps.data);
  }

  render() {
    return (
      <div
        ref="pie"
        style={{
        height: this.props.height || 200,
        width: this.props.width || 200
      }}></div>
    )
  }
}

export default Pie;