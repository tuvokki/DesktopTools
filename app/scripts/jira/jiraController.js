(function () {
    'use strict';
    
/**
 * Jira Controller
 */
angular
  .module('myapp.jira')
  .controller('JiraController', Controller);

Controller.$inject = [
  'UsersService',
  '$routeParams'
];

// function Controller(UsersService, $routeParams) {
//   console.log("Jira controller instantiated");
//   var vm = this;
//   if ($routeParams.id) {
//     angular.extend(vm, UsersService.getById(parseInt($routeParams.id)));
//   }
// }    
//     angular.module('app')
    //     .controller('jiraController', ['jiraService', '$mdDialog', JiraController]);
 
     function JiraController(jiraService, $mdDialog, $routeParams) {
        var self = this;
  if ($routeParams.id) {
    angular.extend(self, jiraService.getById(parseInt($routeParams.id)));
  }
        self.name = "Hello JiraController"

        // Load initial data
        getToolList();

        function getToolList() {
            jiraService.getTools().then(function (tools) {
                self.tools = [].concat(tools);
                self.selected = tools[0];
            });
        }
       }
})();