angular.module('app')
  .controller('MainCtrl', ['$scope', function ($scope) {
    // here we define the items to be repeated in the template
    $scope.list1 = [
      {label: 'one'},
      {label: 'two'},
      {label: 'three'},
      {label: 'four'},
      {label: 'cinco'}
    ];

    $scope.list2 = [
      {label: 'uno'},
      {label: 'dos'},
      {label: 'tres'},
      {label: 'quatro'},
      {label: 'five'}
    ];
  }]);
