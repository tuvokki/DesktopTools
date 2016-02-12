angular
  .module('myapp', [
    'ngNewRouter',
    'myapp.home',
    'myapp.settings',
    'myapp.users',
    'myapp.config'
  ])

.config(['$componentLoaderProvider', 'myapp.config', function ($componentLoaderProvider, config) {
  // change default template location
  //   from : ./components/my-widget/my-widget.html
  //   to:    ./my-widget.tpl.html
  $componentLoaderProvider.setTemplateMapping(function (name) {
    // name is component name
    if (config.electron) {
      return 'scripts' + '/' + name + '/' + name + '.tpl.html';
    } else {
      return '/app/scripts' + '/' + name + '/' + name + '.tpl.html';
    }
  });
}]);