angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainSrv){
  $scope.locations = mainSrv.getLocations();
});
