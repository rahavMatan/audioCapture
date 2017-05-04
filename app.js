angular.module('myApp',[])
.controller('myCtrl',function($scope){
  var stream;
  var constraints = { audio: true };
  var chunks = [];
  var mediaRecorder;
  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream){
    stream = mediaStream;
    var options = {mimeType: 'video/webm', audioBitsPerSecond:128000};
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.onstop = function(e) {
        console.log("MediaRecorder.stop() called.");
        var player = document.getElementById('player');
        player.controls = true;
        var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
        chunks = [];
        var audioURL = URL.createObjectURL(blob);
        player.src = audioURL;
    }
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  })

  $scope.start = function(){
    mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
  }
  $scope.stop=function(){
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
  }


})
