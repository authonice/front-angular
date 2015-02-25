var angular = window ? window.angular : require('angular');
if (!angular && require) angular = require('angular');

var app = angular.module('authonice', []);

app.service('authonice', function($http, $q) {
  var authonice = this;
  authonice.token = false;

  // configuration
  authonice.mountPoint = '/auth';
  authonice.loginRoute = '/login';

  if (localStorage && localStorage.token){
    authonice.token = localStorage.token;
  }

  function setupHeaders(){
    if (authonice.token){
      $http.defaults.headers.common.Authorization = 'Basic ' + authonice.token;
    }
  }

  setupHeaders();

  authonice.loggedIn = function(){
    return !!authonice.token;
  };

  authonice.login = function(email, password){
    return $q(function(resolve, reject) {
      $http.post(authonice.mountPoint + '/login', {email:email, password:password})
        .success(function(data, status, headers, config) {
          if (status === 200){
            authonice.token = data.token;
            localStorage.token = data.token;
            setupHeaders();
            resolve();
          }else{
            reject(data);
          }
        })
        .error(reject);
    });
  };

  authonice.logout = function(){
    authonice.token = false;
    delete localStorage.token;
    delete $http.defaults.headers.common.Authorization;
  };

  authonice.register = function(email, password){
    return $q(function(resolve, reject) {
      $http.post(authonice.mountPoint + '/register', {email:email, password:password})
        .success(function(data, status, headers, config) {
          if (status === 200){
            resolve();
          }else{
            reject(data);
          }
        })
        .error(reject);
    });
  };

  authonice.verify = function(token){
    return $q(function(resolve, reject) {
      $http.post(authonice.mountPoint + '/verify', {token: token})
        .success(function(data, status, headers, config) {
          if (status === 200){
            resolve();
          }else{
            reject(data);
          }
        })
        .error(reject);
    });
  };

  authonice.user = function(){
    return $q(function(resolve, reject) {
      $http.post(authonice.mountPoint + '/user', {token: token})
        .success(function(data, status, headers, config) {
          if (status === 200){
            resolve();
          }else{
            reject(data);
          }
        })
        .error(reject);
    });
  };

  // Angular has defaults for $http, so just use the regular ones
  authonice.get = $http.get;
  authonice.post = $http.post;
});