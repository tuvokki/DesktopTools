
(function () {
    'use strict';
    
    var _templateBase = './scripts';

angular
  .module('myapp', [
    'ngNewRouter',
    'myapp.jira',
    'myapp.settings'
  ])
// http://plnkr.co/edit/N4OqwUEFFf1f54g3GQPh?p=info
.config(function ($componentLoaderProvider) {
  // change default template location
  //   from : ./components/my-widget/my-widget.html
  //   to:    ./my-widget.tpl.html
  $componentLoaderProvider.setTemplateMapping(function (name) {
    // name is component name
    return _templateBase + '/' + name + '/' + name + '.html';
  });
});    
    // angular.module('app', [
    //     'ngNewRouter',
    //     'ngMaterial',
    //     'ngAnimate'
    // ])
    // .config(['$routeProvider', function ($routeProvider) {
    //         $routeProvider.when('/', {
    //             templateUrl: _templateBase + '/jira/jira.html' ,
    //             controller: 'jiraController',
    //             controllerAs: '_ctrl'
    //         }).when('/settings', {
    //             templateUrl: _templateBase + '/settings/settings.html' ,
    //             controller: 'settingsController',
    //             controllerAs: '_ctrl'
    //         });
    //         $routeProvider.otherwise({ redirectTo: '/' });
    //     }
    // ]);

})();