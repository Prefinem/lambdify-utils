"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRetry = void 0;

/* eslint-disable no-await-in-loop */
const retryStrategies = {
  constant: () => 1,
  exponential: i => Math.pow(2, i),
  immediate: () => 0,
  linear: i => i
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const withRetry = ({
  baseDelay = 100,
  retryAttempts = 5,
  retryCount = 0,
  retryStrategy = 'exponential'
} = {}) => async (fn, ...args) => {
  try {
    const response = await fn(...args);
    return response;
  } catch (error) {
    const newCount = retryCount + 1;

    if (newCount === retryAttempts) {
      throw error;
    }

    await delay(baseDelay * retryStrategies[retryStrategy](newCount));
    return withRetry({
      baseDelay,
      retryAttempts,
      retryCount: newCount,
      retryStrategy
    })(fn, ...args);
  }
};

exports.withRetry = withRetry;
var _default = withRetry;
exports.default = _default;