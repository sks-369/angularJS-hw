(function () {
  'use strict';

  angular.module('Week1Assignment', [])

  .controller('LunchCheckController', LunchController);

  function LunchController($scope){
    $scope.items = "";
    $scope.status = "";

    $scope.lunchResult = function () {
      var len = returnArrayLength($scope.items);
      if(len <= 0){
        $scope.status = "Please enter items!!";
      }
      else if(len <= 3){
        $scope.status = "Enjoy!";
      }
      else if(len > 3){
        $scope.status = "Too much!";
      }

   };
 }
  function returnArrayLength(string){
    if(string == ""){
      return 0;
    }
    var arrayOfString = string.split(",");
    //console.log(arrayOfString.length);
    return arrayOfString.length;
  };

})();
