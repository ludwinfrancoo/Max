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
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("registro", function($scope, $rootScope){
  $scope.obtener = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.correo, usuario.contra).then(function listo(x){
      swal("Listo", "Usuario Restrado con Exito", "success", {
        button: "Entendido",
      });
      firebase.database().ref("/usuario"+x.user.uid).set({
        correo:usuario.correo
      })
      //cerrar la sesión
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
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

.controller('DashCtrl', function($scope) {
  $scope.categoria = [
  {
    nombre: "Tv Y Video",
    icono: "ion-ios7-monitor"
  },
  {
    nombre: "Celulares",
    icono: "ion-iphone"
  },
  {
    nombre: "Linea Blanca",
    icono: "ion-ios7-home"
  },
  {
    nombre: "Videojuegos",
    icono: "ion-game-controller-b"
  },
  {
    nombre: "Electrodomesticos",
    icono: "ion-coffee"
  },
  {
    nombre: "Computadoras y Tablets",
    icono: "ion-ipad"
  },
  {
    nombre: "Audio",
    icono: "ion-volume-high"
  },
  {
    nombre: "Audio para Vehiculos",
    icono: "ion-model-s"
  },
  {
    nombre: "Camaras y Drones",
    icono: "ion-android-camera"
  },
  {
    nombre: "Audifonos y Bocinas",
    icono: "ion-ios7-musical-notes"
  },
  {
    nombre: "Prendas electronicas",
    icono: "ion-android-hand"
  },
  {
    nombre: "Cuidado Personal",
    icono: "ion-heart"
  },
  {
    nombre: "Ambientadores",
    icono: "ion-ios7-timer"
  },
  {
    nombre: "Hogar Inteligente",
    icono: "ion-android-wifi"
  },
  {
    nombre: "Contenido Digital",
    icono: "ion-ios7-world"
  },
  {
    nombre: "Protectores de Voltaje",
    icono: "ion-flash"
  },
  {
    nombre: "Telefonos Fijos",
    icono: "ion-ios7-telephone"
  },
  {
    nombre: "Bicicletas Electricas",
    icono: "ion-ios7-gear"
  },
  {
    nombre: "Hogar",
    icono: "ion-android-lightbulb"
  },
  {
    nombre: "Paneles Solares",
    icono: "ion-ios7-sunny"
  }
  ]
})

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
