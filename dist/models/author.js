'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var authorSchema = new Schema({
  id: { type: String, default: _nodeUuid2.default.v1 },
  name: String,
  age: Number,
  books: [String]
});

var model = _mongoose2.default.model('author', authorSchema);

exports.default = model;