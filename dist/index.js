'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLambdaFunction;

var _nodeJqExt = require('node-jq-ext');

var _nodeJqExt2 = _interopRequireDefault(_nodeJqExt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLambdaFunction(jq_code) {
  return function (event, context, callback) {
    var jq = new _nodeJqExt2.default.Jq(jq_code);
    var inputJSON = JSON.stringify(event);
    var result = null;
    var err = null;
    try {
      result = { 'result': jq.parse(inputJSON) };
    } catch (e) {
      err = { 'error_message': e.message };
    }
    callback(err, result);
  };
}