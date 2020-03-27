"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.retryLinearly = void 0;

var _withRetry = _interopRequireDefault(require("./../withRetry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  baseDelay: 100,
  retryAttempts: 3,
  retryCount: 0,
  retryStrategy: 'linear'
};

const retryLinearly = (fn, ...args) => (0, _withRetry.default)(options)(fn, ...args);

exports.retryLinearly = retryLinearly;
var _default = retryLinearly;
exports.default = _default;