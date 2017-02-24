angular.module('biblioteca').controller('booksCtrl', function ($scope, $stateParams, booksService) {
  $scope.book = booksService.books[$stateParams.bookIdx]
});
