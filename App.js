/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import RNTesseractOcr from 'react-native-tesseract-ocr';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[SPARDE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then(data => {
        let { path } = data;
        console.log("Hey there", data, path.slice(8))
        RNTesseractOcr.startOcr(path.slice(7), 'LANG_ENGLISH')
          .then(result => {
            console.log('RESULT: ', typeof(result), result)
          })
          .catch(err => {
            console.log("error tess: ", err)
          })
          .done();
      })
      .catch(err => console.error("error cam: ", err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
});

AppRegistry.registerComponent('App', () => App);
