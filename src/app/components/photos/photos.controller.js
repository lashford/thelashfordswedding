(function() {
  'use strict';

  angular
    .module('app')
    .controller('PhotosController', PhotosController);

  /** @ngInject */
  function PhotosController() {

    var vm = this;
    vm.slides = [{
      id: 1,
      image: '/assets/images/venue/bar.jpg',
      text: 'blahh'
    }, {
      id: 2,
      image: '/assets/images/venue/cows-bomb.jpg',
      text: 'cows'
    }];


  }
})();
