'use strict';

var { RNAudioPlayer } = require('react-native').NativeModules;
var { Platform } = require('react-native');

var AudioPlayer = {
  play(fileName: string) {
    if (fileName === undefined) {
      RNAudioPlayer.play(null);
    } else {
      fileName = Platform.OS === 'ios' ? fileName : fileName.replace(/\.[^/.]+$/, "");
      RNAudioPlayer.play(fileName);
    }
  },
  pause() {
    RNAudioPlayer.pause();
  },
  stop() {
    RNAudioPlayer.stop();
  }
};

module.exports = AudioPlayer;
