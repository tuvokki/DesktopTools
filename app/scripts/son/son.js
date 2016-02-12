angular.module('myapp.settings')
.directive('son', function() {
  return {
    template: '<hr/>I am the child component: {{son.text}}',
    controller: function SonController() {
      this.text = 'Olaf';
    },
    controllerAs: 'son'
  }
});