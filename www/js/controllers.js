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
    return
  }

})

.controller('timerCtrl', function($scope, pomodoroFactory, $state) {
  var vm = this;
  vm.pomodoroName = pomodoroFactory.getPomodoroName();


})
