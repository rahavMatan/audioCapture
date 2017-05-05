angular.module('myApp')
.controller('recordingCtrl',function($scope,storage, mediaRecorder){
  mediaRecorder.init().then(function(rec){
    var chunks = [];
    rec.onstop = function(e) {
        console.log("MediaRecorder.stop() called.");
        $scope.file = new Blob(chunks,{ 'type' : 'audio/ogg' });
        chunks = [];
    }
    rec.ondataavailable = function(e) {
      chunks.push(e.data);
    }
    recorder=rec;
  })

  $scope.start = function(){
    recorder.start();
    console.log(recorder.state);
  }
  $scope.stop=function(){
    recorder.stop();
    console.log(recorder.state);
  }

  $scope.loadFile=function(){
    var fileName = prompt('enter a file name');
    storage.load(fileName).then(function(url){
      if(url){
        var player = document.getElementById('player');
        player.controls=true;
        player.src=url;
      }
    })
  }
  $scope.save = function(){
    if($scope.file){
      $scope.file.fileName = prompt('enter name');
      storage.save($scope.file).then(function(snapshot){
        console.log('upload succeful');
        $scope.file = null;
      })
    }
  }

})
