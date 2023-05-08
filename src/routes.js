const {
  addBooksHandler, getAllBooks, getDetailBooks, getEditBooks, getDeleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBooks,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: getEditBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: getDeleteBook,
  },
];

module.exports = routes;
