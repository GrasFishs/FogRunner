import React, {Component} from "react";
import {Map} from "react-amap";
import {message} from 'antd';

export default class FogMap extends Component {
  constructor(props) {
    super(props);
    this.FOGLAYER = 2;
    this.oldRadius = 15;
    this.zooms = 20;
    this.steps = [];
  }

  clearCanvas = () => {
    const FOGCOLOR = "#00000080";
    this.context.clearRect(0, 0, this.cvs.width, this.cvs.height);
    this.context.fillStyle = FOGCOLOR;
    this.context.fillRect(0, 0, this.cvs.width, this.cvs.height);
    //this.context.globalCompositeOperation = "lighter";
  };

  canvasDraw = () => {
    this.cvs = document.createElement("canvas");
    this.cvs.width = this.map.getSize().width;
    this.cvs.height = this.map.getSize().height;
    this.context = this.cvs.getContext("2d");
    this.clearCanvas();
    // const img = new Image();
    // img.src = 'http://www.w3school.com.cn/i/eg_tulip.jpg';
    // img.onload = ()=>{
    //   this.context.drawImage(img,0,0,img.width,img.height);
    // }
  };
  draw = (x, y, radius) => {
    this.context.beginPath();
    this.context.shadowBlur = radius * 2;
    this.context.shadowColor = "#fff";
    this.context.globalAlpha = '0.5'
    this.context.arc(x, y, radius, 0, Math.PI * 2);
    this.context.fillStyle = "#fff";
    this.context.fill();
    this.context.closePath();
    this.context.globalAlpha = '1';
  };

  onFogRender = () => {
    this.clearCanvas();
    let radius = 0;
    radius = 2 * this.map.getZoom();
    for (let i = 0; i < this.steps.length; i++) {
      const pixel = this.map.lnglatTocontainer([this.steps[i].longitude, this.steps[i].latitude]);
      const [x,y] = [pixel.getX(),pixel.getY()];
      if (x > 0 && y > 0) {
        this.draw(x, y, radius);
      }
    }
    this.zooms = this.map.getZoom();
  };

  initGPS = () => {

    const successHandler = (pos) => {
      let {longitude, latitude} = pos.coords;
      //this.map.panTo(new window['AMap'].Lnglat(longitude, latitude));
      this.steps.push({longitude, latitude});
      this.fogLayer.render();
    }

    const errorHandler = (err) => {
      message.error(err.messsage ||'GPS无法开启');
    }
    window['navigator'].geolocation.watchPosition(successHandler, errorHandler);
    window['navigator'].geolocation.getCurrentPosition((pos) => {
        message.success(`你位于(${pos.coords.longitude},${pos.coords.latitude})`);
        let {longitude, latitude} = pos.coords;
        //this.map.panTo(new window['AMap'].Lnglat(longitude, latitude));
        this.steps.push({longitude, latitude});
        this.fogLayer.render();
      })
  }

  initMap = () => {
    window.setTimeout(()=>{
      const AMap = window["AMap"];
      this.map.setZoom(30);
      this.map.setFeatures(["bg", "building", "point", "roard"]);
      //console.log(this.map.indoorMap);
      // this.map.indoorMap.setOpacity(0); //不知道为什么hide()无效
      // this.map.setMapStyle("amap://styles/0c44bb0c0deb366c196a0d97dbbd852b");
      this.canvasDraw();
      this.fogLayer = new AMap.CustomLayer(this.cvs, {
        zooms: 20,
        zindex: this.FOGLAYER
      });
      this.fogLayer.render = this.onFogRender;
      this.fogLayer.setMap(this.map);
      this.initGPS();
    },500)
  };

  mapEvents = () => ({
    created: ins => {
      this.map = ins;
      this.initMap();
    },
    click: e => {
      let {lng, lat} = e.lnglat;
      this.steps.push({longitude: lng, latitude: lat});
      this.fogLayer.render();
    }
  });
  render() {
    const events = this.mapEvents();
    return (<Map events = {
      events
    }
    amapkey = {
      "2d787c9b07cb6ad79440ced144222179"
    } />);
  }
}