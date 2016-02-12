(function() {
  // Module specific configuration
  angular.module('myapp.config', [])
    .constant('myapp.config', {
      basePath: '/', // Set your base path here
      electron: true
  });
})();
