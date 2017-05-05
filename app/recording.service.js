angular.module('myApp')
.service('mediaRecorder',function(){
  var self=this;
  this.init=function(){
    var constraints = { audio: true };
    var mediaRecorder;
    return navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream){
      var options = {mimeType: 'video/webm', audioBitsPerSecond:128000};
      var mediaRecorder = new MediaRecorder(mediaStream, options);
      return mediaRecorder;
    })
  }
})
