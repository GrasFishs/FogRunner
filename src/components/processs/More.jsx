import React, {Component} from 'react';
import Back from './../tools/Back';
import './more.css';
import {Select} from 'antd';
import Pie from './pie';
const Option = Select.Option;

const data = [];
for (let i = 0; i < 12; i++) {
  data.push({
    option: `2018年${i + 1}月`,
    avgSteps: Math.floor(Math.random() * 3000 + 3000),
    heighestSteps: Math.floor(Math.random() * 5000 + 8000),
    totalSteps: Math.floor(Math.random() * 5000 + 15000),
    reched: Math.floor(Math.random() * 10),
    almostReched: Math.floor(Math.random() * 20),
    unreched: Math.floor(Math.random() * 10)
  })
}

const dates = data.map((date, index) => <Option key={index} value={date.option}>{date.option}</Option>);

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        avgSteps: data[0].avgSteps,
        heighestSteps: data[0].heighestSteps,
        totalSteps: data[0].totalSteps
      },
      pieData: [
        {
          value: data[0].unreched,
          name: `${data[0].unreched}天`
        }, {
          value: data[0].reched,
          name: `${data[0].reched}天`
        }, {
          value: data[0].almostReched,
          name: `${data[0].almostReched}天`
        }
      ]
    }
  }

  handleSelect = (val) => {
    const valData = data.find(v => {
      //console.log(v);
      return v.option === val;
    });
    const newPiedata = [
      {
        value: valData.unreched,
        name: `${valData.unreched}天`
      }, {
        value: valData.reched,
        name: `${valData.reched}天`
      }, {
        value: valData.almostReched,
        name: `${valData.almostReched}天`
      }
    ];
    this.setState({data: valData, pieData: newPiedata})
  }

  handleFocus = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="more">
        <nav><Back to="/process"/></nav>
        <div className="body">
          <Select
            showSearch
            style={{
            width: 300
          }}
            defaultValue={data[0].option}
            placeholder="Select a date time"
            optionFilterProp="children"
            onSelect={this.handleSelect}
            onFocus={this.handleFocus}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
            {dates}
          </Select>
          <div className="steps-list">
            <div className="steps">
              <div>平均步数</div>
              <div>{this.state.data.avgSteps}</div>
            </div>
            <div className="steps">
              <div>最高步数</div>
              <div>{this.state.data.heighestSteps}</div>
            </div>
            <div className="steps">
              <div>总步数</div>
              <div>{this.state.data.totalSteps}</div>
            </div>
          </div>
          <Pie data={this.state.pieData} width={300} height={300}/>
        </div>
      </div>
    )
  }
}

export default More;