(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_, $logger) {
      // spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');
      $logger.debug(vm);
    }));

    // it('should have a timestamp creation date', function() {
    //   expect(vm.creationDate).toEqual(jasmine.any(Number));
    // });

  });
})();
