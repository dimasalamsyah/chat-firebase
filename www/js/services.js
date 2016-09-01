angular.module('starter.services', ['firebase'])
    .factory("Auth", ["$firebaseAuth", "$rootScope","$firebaseArray", 
    function ($firebaseAuth, $rootScope) {
            var ref = new Firebase(firebaseUrl);
            return $firebaseAuth(ref);
}])

.factory('Chats', function ($firebase) {

	var selectedRoomId;

    var ref = new Firebase(firebaseUrl);
    var chats;

    return {

    	send: function (from, message) {

            ref.push({name:from, text:message});


            /*console.log("sending message from :" + from.displayName + " & message is " + message);
            if (from && message) {
                var chatMessage = {
                    from: from.displayName,
                    message: message,
                    createdAt: Firebase.ServerValue.TIMESTAMP
                };
                chats.$add(chatMessage).then(function (data) {
                    console.log("message added");
                });
            }*/

        }
    }

    

});