import 'aframe';
import 'aframe-animation-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Spider from "./spider.js"

const API_SERVER = 'http://localhost:3000'

export default class VR extends React.Component {
  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="/src/assets/floor.jpg"/>
          <img id="skyTexture" src="/src/assets/sky.jpg"/>
	        <a-asset-item id="spider-obj" src="/src/assets/spider.obj"></a-asset-item>
	        <a-asset-item id="spider-mtl" src="/src/assets/spider.mtl"></a-asset-item>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="3" position="0 10 0"/>
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
	<Spider/>
      </Scene>
    );
  }
}
