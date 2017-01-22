(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($interval) {

    var vm = this;

    function initializeClock(endtime) {

      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function updateClock() {
        vm.countdown = getTimeRemaining(endtime);
        if (vm.countdown <= 0) {
          vm.timer.stop();
        }
      }

      updateClock(); // do the first call
      vm.timer = $interval(updateClock, 1000); // call function every second
    }

    initializeClock(new Date('February 24 2018 12:00:00'));

  }
})();
