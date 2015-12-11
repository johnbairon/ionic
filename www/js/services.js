angular.module('starter.services',['ngResource'])
.factory('Session', function( $resource ){

return $resource('https://ionicservernodejs.herokuapp.com/sessions/:sessionId');

});