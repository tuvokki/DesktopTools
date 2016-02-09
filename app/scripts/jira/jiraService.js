(function () {
    'use strict';
    
    angular.module('app')
        .service('jiraService', ['$q', JiraService]);
    
    function JiraService($q) {
        return {
            getTools: getTools
        };
        
        function getTools() {
            return $q.when([
              { name: 'Releaser' },
              { name: 'Patchlister' }
            ]);
        }

    }
})();