var controllerModule = angular.module('starter.controllers', []);
 
controllerModule.controller("demoController", function($scope){
 
});

/*controllerModule.controller("ChatCtrl", function($scope, Chats, $state){
 	
 	var ref = new Firebase(firebaseUrl);

	$scope.sendMessage = function (msg) {
        console.log(msg);
        //ref.push({name:"", text:msg});
        Chats.send("dimas", msg);
       

        ref.on('child_added', function (snapshot) {
                
	        var message = snapshot.val();

	        console.log(message);
	        

	    });

	    $scope.messages.$add({
	        from: $scope.user,
	        content: $scope.msg,
	        timestamp: Firebase.ServerValue.TIMESTAMP
	    });
    }

})
;*/

/*controllerModule.controller("ChatCtrl", ["$scope", "Chats", "$firebaseArray",
  function($scope, Chats, $firebaseArray) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = Chats;

    $scope.sendMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });

      $scope.message = "";
    };

  }
]);
*/

controllerModule.controller('ChatCtrl', function($scope, $state, Chats, $firebase) {
  
  var ref = new Firebase('https://studystupid-49162.firebaseio.com/');
  $scope.messages = $firebase(ref.limit(15));
  $scope.username = "dimas";//'Guest' + Math.floor(Math.random()*101);

  $scope.addMessage = function() {
    $scope.messages.$add({
      from: $scope.username, contentnya: $scope.message
  });
}
//console.log($scope.messages = $firebase(ref.limit(15)));

 //
 //var ref = new Firebase(firebaseUrl);
 //	
 //	/*$scope.sendMessage = function (msg) {
 //		Chats.send("dimas", msg);
 //	}*/
 //	$scope.messages = $firebase(ref);
 //	
 //	 $scope.addMessage = function(e) {
 //    $scope.sendMsg = function() {
 //      
 //           $scope.messages.$add({
 //             from: $scope.name, contentnya: $scope.msg
 //           });
 //           
 //           $scope.msg = "";
 //    
 //         }
 // }

 /*   angular.module('chat', ['firebase']).controller('Chat', ['$scope', '$firebase',
    function($scope, $firebase) {
      //var ref = new Firebase('https://angularfire.firebaseio.com/chat');
      var ref = new Firebase('https://studystupid-49162.firebaseio.com/');
      $scope.messages = $firebase(ref.limit(15));
      $scope.username = 'Guest' + Math.floor(Math.random()*101);

      $scope.addMessage = function() {
        $scope.messages.$add({
          from: $scope.username, contentnya: $scope.message
      });

        $scope.message = "";

      }
    }
    ]);*/


	//$scope.messages.$add({from: $scope.name, body: $scope.msg});

    //ref.on('child_added', function (snapshot) {
	    //var message = snapshot.val();

	    /*$scope.messages.$add({
	        from: "dimas",
	        content: "oke",
	        timestamp: Firebase.ServerValue.TIMESTAMP
	    });*/



	   /* $('<div/>').text(message.text).prepend($('<em/>').text(message.name+': ')).appendTo($('#messagesDiv'));
	    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;*/

	   // console.log(message)
	//});
        
       /* $scope.messages = $firebase(ref);
        $scope.addMessage = function(e) {
           $scope.sendMessage = function() {
             
                  $scope.messages.$add({from: $scope.name, body: $scope.msg});
                  $scope.msg = "";
           
                }
        }
        $scope.clear = function(){
          $scope.name = "";
        }*/
  //console.log('HomeTabCtrl');
  
});
