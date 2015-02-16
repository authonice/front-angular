var angular = window ? window.angular : require('angular');
if (!angular && require) angular = require('angular');

var authonice = module.exports = angular.module('authonice', []);

authonice.service('authonice', function() {
  this.loggedIn = function(){
    
  };

  this.login = function(email, password){

  };

  this.logout = function(){

  };

  this.register = function(email, password){

  };

  this.verify = function(token){

  };

  this.user = function(){

  };

  this.req = function(){

  };
});