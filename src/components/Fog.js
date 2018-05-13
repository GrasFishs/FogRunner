import { AMap } from "react-amap";
import React, { Component } from "react";

const FOGCOLOR = "#000000E0";

export class Fog extends Component {
  constructor(props) {
    super(props);
    this.map = props.__map__;
    this.AMap = window['AMap'];
    this.canvasDraw = this.canvasDraw.bind(this);
  }

  canvasDraw(cvs) {
    const context = cvs.getContext("2d");
    this.cvs = cvs;
    context.rect(0, 0, cvs.width, cvs.height);
    context.fillStyle = FOGCOLOR;
    context.fill();
    context.globalCompositeOperation = "destination-out";
    let x = this.cvs.width / 2;
    let y = this.cvs.height / 2;
    this.drawCircle(context, x, y);
  }
  clickCanvas(ev) {
    console.log(ev)
  }

  drawCircle(context, x, y) {
    context.beginPath();
    context.shadowBlur = 20;
    context.shadowColor = "#fff";
    context.lineWidth = 10;
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  render() {
    return (
      <canvas
        width={document.body.clientWidth}
        height={400}
        onClick={this.clickCanvas.bind(this)}
        ref={this.canvasDraw}
        style={styles.cvs}
      />
    );
  }
}

const styles = {
  cvs: {
    width: document.body.clientWidth,
    height: "100%",
    position: "absolute",
    top: 0
  }
};
