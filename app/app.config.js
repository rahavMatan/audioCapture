angular.module('myApp',['firebase'])
.config(function(){
  var config = {
    apiKey: "AIzaSyA0ac4TWE1DGP1C2zyIaEnUrDGUROyfp_8",
    authDomain: "audiofiles-cb878.firebaseapp.com",
    databaseURL: "https://audiofiles-cb878.firebaseio.com",
    projectId: "audiofiles-cb878",
    storageBucket: "audiofiles-cb878.appspot.com",
    messagingSenderId: "335316310825"
  };
  firebase.initializeApp(config);
})
