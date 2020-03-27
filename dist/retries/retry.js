"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.retry = void 0;

var _withRetry = _interopRequireDefault(require("./../withRetry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  baseDelay: 100,
  retryAttempts: 3,
  retryCount: 0,
  retryStrategy: 'exponential'
};

const retry = (fn, ...args) => (0, _withRetry.default)(options)(fn, ...args);

exports.retry = retry;
var _default = retry;
exports.default = _default;