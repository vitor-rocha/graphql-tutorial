'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _author = require('./models/author');

var _author2 = _interopRequireDefault(_author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = {
  Query: {
    authors: function authors() {
      return _author2.default.find();
    },
    author: function author(root, _ref) {
      var id = _ref.id;

      return _author2.default.findOne({ id: id });
    }
  },

  Mutation: {
    addAuthor: function addAuthor(root, _ref2) {
      var name = _ref2.name,
          age = _ref2.age,
          books = _ref2.books;

      var author = new _author2.default({ name: name, age: age, books: books });
      return author.save();
    },
    deleteAuthor: function deleteAuthor(root, _ref3) {
      var id = _ref3.id;

      return _author2.default.findOneAndRemove({ id: id });
    },
    updateAuthor: function updateAuthor(root, _ref4) {
      var id = _ref4.id,
          name = _ref4.name;

      return _author2.default.findOneAndUpdate({ id: id, name: name });
    }
  }
};

exports.default = resolvers;