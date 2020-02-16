
var firebaseConfig = {
    apiKey: "AIzaSyAmPXGEFSY5mET3LsT6qQBw_-BVcLhqbTY",
    authDomain: "maxapp-db8e1.firebaseapp.com",
    databaseURL: "https://maxapp-db8e1.firebaseio.com",
    projectId: "maxapp-db8e1",
    storageBucket: "maxapp-db8e1.appspot.com",
    messagingSenderId: "567029314884",
    appId: "1:567029314884:web:cc3bd06f82cee91f81d311",
    measurementId: "G-YPEQZ7J80N"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

angular.module('starter.controllers', [])

.controller("registro", function($scope, $rootScope){
  $scope.obtener = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.correo, usuario.contra).then(function listo(x){
      swal("Listo", "Usuario Restrado con Exito", "success", {
        button: "Entendido",
      });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("Algo salio mal", error.message, "error", {
        button: "Entendido",
      });
    });
  }
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
