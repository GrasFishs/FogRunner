import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const data = this.props.data;
    const pie = echarts.init(this.refs.pie);
    pie.setOption(data);
  }
  render() {
    return (
      <div
        ref="pie"
        style={{
        height: '200px',
        width: '200px'
      }}></div>
    )
  }
}

export default Pie;