(function() {
  'use strict';

  angular
    .module('app')
    .controller('RSVPController', RSVPController);

  /** @ngInject */
  function RSVPController($log, $http, $httpParamSerializerJQLike) {

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
     sendRSVPEmail();
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

   function sendRSVPEmail() {
      // var base64Key = 'YXBpOmtleS0wMjhkYmQ3OGRhOWY1NDc4MzcxYzMyMWQ5MWMzZDg1Zg=='

      var payload = {'from':'Mailgun Sandbox <postmaster@sandbox43059b3101e641558d817d640059579f.mailgun.org>',
                    'to':'Alex Lashford <alexlashford@gmail.com>',
                    'subject':'Hello Alex Lashford',
                    'text':'Congratulations Alex Lashford, you just sent an email with Mailgun!  You are truly awesome!'};

      var params = $httpParamSerializerJQLike(payload);
      $log.info(params);

      $http({
          method: 'POST',
          url: 'https://api:pubkey-c5216c2adf5c620adc7ff9c117e0b91e@api.mailgun.net/v3/sandbox43059b3101e641558d817d640059579f.mailgun.org/messages',
          // url: 'https://api.mailgun.net/v3/sandbox43059b3101e641558d817d640059579f.mailgun.org/messages',
          //headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': 'Basic ' + base64Key},
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data: params
      }).then(function successCallback(response) {
        $log.info("Email sent "+response);
      }, function errorCallback(response) {
        $log.error("All gone to shit "+response);
      });
   }

  }
})();
