(function() {
  'use strict';

  angular
    .module('app')
    .controller('RSVPController', RSVPController);

  /** @ngInject */
  function RSVPController($log) {

   var vm = this;
   vm.rsvpData = {
     'names': "",
     'email': "",
     'reqs': "",
     'guests':"",
     'attending':"",
     'msg': "",

   };

   vm.submitRSVP = function() {
       $log.info("submit sent");
       $log.info(vm.rsvpData);
   };

  }
})();
