(function () {
    'use strict';
    
    angular.module('app')
        .service('settingsService', ['$q', SettingsService]);
    
    function SettingsService($q) {
        return {
            getSettings: getSettings,
            getByName: getSettingsByName,
            update: updateSettings
        };
        
        function getSettings() {
            return $q.when([
              { name: 'account', value: 'whatever' },
              { name: 'debug', value: true }
            ]);
        }
        
        function getSettingsByName(name) {
          var bla = { name: name };
          if (name === 'debug') {
            bla.value = true;
          } else {
            bla.value = 'whatever';
          }
          return $q.when(bla);
        }
        
        function updateSettings(settings) {
            return $q.when([
              { name: 'Releaser' },
              { name: 'Patchlister' }
            ]);
        }
    }
})();