'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

var port = 8888;

server.listen(port, function () {
  console.log('Server started on port ' + port);
});

server.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

server.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default }));

_mongoose2.default.connect('mongodb://localhost/graphqlTutorial');

var connection = _mongoose2.default.connection;

connection.once('open', function () {
  console.log('Connection to MongoDB was successfull');
});