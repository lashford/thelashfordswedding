(function() {
  'use strict';

  angular
    .module('app')
    .controller('RSVPController', RSVPController);

  /** @ngInject */
  function RSVPController($log) {

   var vm = this;
   vm.complete = false;
   vm.rsvpData = {
     'rsvp': undefined,
     'no': {
       'guests': ""
     },
     'allday': {
       'enabled': undefined,
       'guests': [{'name':"", 'dietary':""}]
     },
     'evening': {
       'enabled': undefined,
       'guests': [{'name':"", 'dietary':""}]
     },
     'email': "",
     'msg': "",
     'complete':false
   };
   var resetData = angular.copy(vm.rsvpData);

   vm.submitRSVP = function() {
     $log.info("submit sent");
     $log.info(vm.rsvpData);
     vm.complete = true;
     sendRSVPEmail(vm.rsvpData);
   };

   vm.resetRSVP = function() {
     vm.rsvpData = angular.copy(resetData);
   };

   vm.addAllDayGuest = function() {
     if (vm.rsvpData.allday.guests.length < 10) {
       vm.rsvpData.allday.guests.push({'name':"", 'dietary':""})
     }
   };

   vm.addEveningGuest = function() {
     if (vm.rsvpData.evening.guests.length < 10) {
      vm.rsvpData.evening.guests.push({'name':"", 'dietary':""})
     }
   };

   function sendRSVPEmail(data) {

      $log.info("Post sent " + data);

      // $http({
      //     method: 'POST',
      //     url: 'https://api.mailgun.net/v3/sandbox43059b3101e641558d817d640059579f.mailgun.org/messages',
      //     headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': 'Basic ' + base64Key},
      //     headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      //     data: params
      // }).then(function successCallback(response) {
      //   $log.info("Email sent "+response);
      // }, function errorCallback(response) {
      //   $log.error("All gone to shit "+response);
      // });
   }

  }
})();
