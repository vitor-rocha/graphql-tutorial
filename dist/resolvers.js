'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _authors = [{
  id: 1,
  name: 'vitor',
  age: 24,
  books: ['book1', 'book2']
}, {
  id: 2,
  name: 'pedro',
  age: 32,
  books: ['book3', 'book4']
}];

var resolvers = {
  Query: {
    authors: function authors() {
      return _authors;
    },
    author: function author(root, _ref) {
      var id = _ref.id;

      return _authors.find(function (author) {
        return author.id === id;
      });
    }
  }
};

exports.default = resolvers;