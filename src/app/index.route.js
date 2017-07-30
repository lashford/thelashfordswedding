(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/venue', {
        templateUrl: 'app/components/venue/venue.html',
        controller: 'VenueController',
        controllerAs: 'venue'
      })
      .when('/gallery', {
        templateUrl: 'app/components/gallery/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'gallery'
      })
      .when('/rsvp', {
        templateUrl: 'app/components/rsvp/rsvp.html',
        controller: 'RSVPController',
        controllerAs: 'rsvp'
      })
      .when('/hotels', {
        templateUrl: 'app/components/hotels/hotels.html',
        controller: 'Hotelsontroller',
        controllerAs: 'hotels'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }

})();
