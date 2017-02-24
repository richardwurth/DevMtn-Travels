angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams){
  $scope.booked = mainSrv.getLocation($stateParams.id);
});
