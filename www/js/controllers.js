angular.module('app.controllers', [])

.controller('welcomeCtrl', function($scope) {
  var vm = this;

})

.controller('nameCtrl', function($scope, pomodoroFactory, $state) {
  var vm = this;
  vm.form = {};
  vm.form.submitName = submitName;

  function submitName (name){
    pomodoroFactory.pomodoroName(name);
    $state.go("pomodoro-timer");
    vm.form = {};
    return
  }

})

.controller('timerCtrl', function($scope, pomodoroFactory, $state, $interval, $cordovaVibration, $ionicPlatform) {
  var vm = this;
  vm.pomodoroName = pomodoroFactory.getPomodoroName();
  vm.time = 0;

  var interval = $interval(function () {
    vm.time++;

    if(vm.time === 10) {
      $interval.cancel(interval);
      console.log("vibrating!!");

      $ionicPlatform.ready(function() {
        $cordovaVibration.vibrate(100);
      });

      vm.time = 0;
      $state.go('break-time', {}, {reload: true});
    }
  },1000)

})


.controller('breakCtrl', function($scope, pomodoroFactory, $state, $interval, $cordovaVibration, $ionicPlatform) {
  var vm = this;
  vm.time = 0;

  var interval = $interval(function () {
    vm.time++;
    if(vm.time === 5) {
      $interval.cancel(interval);
      console.log("vibrating!!");

      $ionicPlatform.ready(function() {
        $cordovaVibration.vibrate(100);
      });

      vm.time = 0;
      $state.go("pomodoro-timer", {}, {reload: true});
    }
  },1000)

})
