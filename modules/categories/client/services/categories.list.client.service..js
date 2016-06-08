//Categories service used to communicate Categories REST endpoints
(function () {
  'use strict';

  angular
    .module('categories')
    .factory('CategoriesListService', CategoriesListService);

  CategoriesListService.$inject = ['$resource'];

  function CategoriesListService($resource) {
    return $resource('api/categories/listSelect', {}, {
      list: {
        method: 'GET'
      }
    });
  }
})();
