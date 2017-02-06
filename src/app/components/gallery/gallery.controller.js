(function() {
  'use strict';

  angular
    .module('app')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController() {

   var vm = this;
   vm.slides = [
     {id:1,image:'/assets/images/venue/bar.jpg',text:'blahh'},
     {id:2,image:'/assets/images/venue/cows-bomb.jpg',text:'cows'}
   ];


  }
})();
