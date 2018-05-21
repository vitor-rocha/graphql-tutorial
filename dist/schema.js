'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n    type Author {\n        id: String\n        age: Int\n        name: String\n        books: [String]\n    }\n\n    type Query {\n        authors: [Author]\n        author(id: String): Author\n    }\n\n    type Mutation {\n      addAuthor(name: String!, age: Int!, books: [String]!): Author\n    }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers2.default });

exports.default = schema;