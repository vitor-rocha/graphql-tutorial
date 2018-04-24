'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var typeDefs = '\n    type Author {\n        age: Int\n        name: String\n        books: [String]\n    }\n\n    type Query {\n        author: [Author]\n    }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs });

(0, _graphqlTools.addMockFunctionsToSchema)({ schema: schema });

exports.default = schema;