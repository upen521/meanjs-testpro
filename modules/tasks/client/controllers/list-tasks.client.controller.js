(function () {
  'use strict';

  angular
    .module('tasks')
    .controller('TasksListController', TasksListController);

  TasksListController.$inject = ['TasksService', 'CategoriesListService'];

  function TasksListController(TasksService, CategoriesListService) {
    var vm = this;

    vm.tasks = TasksService.query();
    
    vm.categories = CategoriesListService.listSelect();
  }
})();
