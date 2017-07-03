(function() {
  'use strict';

  angular
    .module('app')
    .controller('RSVPController', RSVPController);

  /** @ngInject */
  function RSVPController($log) {

   var vm = this;
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

   vm.submitRSVP = function() {
       $log.info("submit sent");
       $log.info(vm.rsvpData);
   };

  }
})();
