/*var app = angular.module('starter.controllers', [])

app.controller('ChatCtrl', function($scope, $state, Chats, $firebase) {

  var ref = new Firebase('https://studystupid-49162.firebaseio.com/');

  $scope.messages = $firebase(ref);
  console.log(messages);

  $scope.add = function() {
  };
 

});

app.factory('Message', [function() {
 
    var messages = [{'name':'Pippo','text':'Hello'},
            {'name':'Pluto','text':'Hello'},
            {'name':'Pippo','text':'how are you ?'},
            {'name':'Pluto','text':'fine thanks'},
            {'name':'Pippo','text':'Bye'},
            {'name':'Pluto','text':'Bye'}];
 
    var Message = {
      all: messages
    };
 
    return Message;
 
}]);
*/

var app =  angular.module('starter.controllers', ['firebase']);
 
/*  app.controller('ChatCtrl', ['$scope','Message', function($scope,Message){
 
      $scope.name = "Coder01";
 
      $scope.messages= Message.all;
  }]);
 
  app.factory('Message', [function() {
 
    var messages = [{'name':'Pippo','text':'Hello'},
            {'name':'Pluto','text':'Hello'},
            {'name':'Pippo','text':'how are you ?'},
            {'name':'Pluto','text':'fine thanks'},
            {'name':'Pippo','text':'Bye'},
            {'name':'Pluto','text':'Bye'}];
 
    var Message = {
      all: messages
    };
 
    return Message;
 
  }]);*/

app.controller('ChatCtrl', ['$scope','Message','$timeout', '$ionicScrollDelegate', 
  function($scope, Message, $ionicScrollDelegate, $timeout){
 
    $scope.user="Guest";
 
    $scope.messages= Message.all;
    //$ionicScrollDelegate.scrollBottom();
    //
    //var viewScroll = $ionicScrollDelegate.$getByHandle('mainScroll');
    var scroller;


    $scope.inserisci = function(message){
      //Message.create(message);
       $ionicScrollDelegate.$getByHandle('mainScroll').scrollBottom();
      
    };

    /*$timeout(function() {
      viewScroll.scrollBottom();
    }, 0);*/

    $scope.toUser = {
      _id: '534b8e5aaa5e7afc1b23e69b',
      pic: 'http://ionicframework.com/img/docs/venkman.jpg',
      username: 'Venkman'
    }
    $scope.User = {
      _id: '1',
      pic: 'http://ionicframework.com/img/docs/venkman.jpg',
      username: 'Dimas'
    }

}]);

app.factory('Message', ['$firebase',
  function($firebase) {
    var ref = new Firebase(firebaseUrl);
    var messages = $firebase(ref.child('messages')).$asArray();
 
    var Message = {
      all: messages,
      create: function (message) {
        return messages.$add(message);
      },
      get: function (messageId) {
        return $firebase(ref.child('messages').child(messageId)).$asObject();

      },
      delete: function (message) {
        return messages.$remove(message);
      }
    };
 
    return Message;

 
  }
  ]);


