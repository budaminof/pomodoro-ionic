angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('page', {
    url: '/page1',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl',
    controllerAs: 'vm',
  })

  .state('pomodoro-name', {
    url: '/pomodoro-name',
    templateUrl: 'templates/pomodoro-name.html',
    controller: 'nameCtrl',
    controllerAs: 'vm',
  })

  .state('pomodoro-timer', {
    url: '/pomodoro-timer',
    templateUrl: 'templates/pomodoro-timer.html',
    controller: 'timerCtrl',
    controllerAs: 'vm',
  })
  .state('break-time', {
    url: '/break-time',
    templateUrl: 'templates/break-time.html',
    controller: 'breakCtrl',
    controllerAs: 'vm',
  })

$urlRouterProvider.otherwise('/page1')


});
