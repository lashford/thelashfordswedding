(function() {
  'use strict';

  angular
    .module('app')
    .directive('navbarHeader', navbarHeader);

  /** @ngInject */
  function navbarHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'nc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
      vm.isNavCollapsed = true;
    }
  }

})();
