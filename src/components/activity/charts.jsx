import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const data = this.props.data;
    const bar = echarts.init(this.refs.bar);
    bar.setOption(data);
  }
  render() {
    return (
      <div ref="bar" style={{
        height: '50%',
        width: '100%'
      }}></div>
    )
  }
}

export default Bar;