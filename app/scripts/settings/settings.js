function SettingsDirective() {
  return {
    controller: function SettingsController() {
      this.text = 'World';
    },
    controllerAs: 'settings'
  }
}

SettingsDirective.$routeConfig = [
  {
    path: '/',
    component: 'son',
    as: 'Son'
  }
];

angular.module('myapp.settings', [])
.directive('settings', SettingsDirective);