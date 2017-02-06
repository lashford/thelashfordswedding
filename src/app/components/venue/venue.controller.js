(function() {
  'use strict';

  angular
    .module('app')
    .controller('VenueController', VenueController);

  /** @ngInject */
  function VenueController() {

    var vm = this;
    vm.slides = [
      {image:'/assets/images/venue/bar.jpg'},
      {image:'/assets/images/venue/barn.jpg'},
      {image:'/assets/images/venue/ceremony.jpg'},
      {image:'/assets/images/venue/front.jpg'},
      {image:'/assets/images/venue/outside.jpg'},
      {image:'/assets/images/venue/beer.jpg'},
      {image:'/assets/images/venue/outside2.jpg'},
      {image:'/assets/images/venue/cows-bomb.jpg'}
    ];

  }

})();
