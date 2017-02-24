angular.module('biblioteca').service('booksService', function(){
  this.books = [
    {
      title: 'First Book',
      author: 'First Author',
      rating: 10
    },
    {
      title: 'Second Book',
      author: 'Second Author',
      rating: 9
    },
    {
      title: 'Third Book',
      author: 'Third Author',
      rating: 8
    }
  ];
});
