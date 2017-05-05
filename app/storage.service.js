angular.module('myApp')
.service('storage',function($firebaseStorage){
  var storageRef = firebase.storage().ref();
  var storage = $firebaseStorage(storageRef);
  this.save = function(file){
    if(file){
      var ref = storageRef.child(file.fileName);
      return ref.put(file, {'type':'audio/ogg'}).then(function(snapshot){
        return snapshot;
      });
    }
  }

  this.load = function(fileName){
    var ref = storageRef.child(fileName);
    return ref.getDownloadURL().then(function(url){
      return url
    }).catch(function(e){
      console.log(e);
    })
  }

})
