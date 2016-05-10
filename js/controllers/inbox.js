myApp.controller('InboxCtrl', function($scope, InboxFactory){

  InboxFactory.getMessages()
  .success(function(jsonData, statusCode){

    console.log('The request was successfully!', statusCode, jsonData);

    $scope.emails = jsonData;
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.cost = 1;
    $scope.quantity = 2;
    $scope.total = 3;
    $scope.budget = 4;
  });
});
