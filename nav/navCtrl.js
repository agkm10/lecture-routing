angular.module('biblioteca').controller('navCtrl', function ($scope, booksService) {
  $scope.books = booksService.books
});
