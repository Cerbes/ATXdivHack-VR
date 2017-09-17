import 'aframe';
import 'aframe-animation-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spider extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
        <Entity
          obj-model="obj: #spider-obj;"
          material="color: red;"
          position={{x: 0, y: 2, z: -1}} 
          scale={{ x: 15, y: 15, z: 15 }}
          animation__scale="property: position; dir: alternate; dur: 1000; loop: true; to: 5 0 5"
        />
    );
  }
}
