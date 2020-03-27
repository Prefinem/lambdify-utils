"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ignore = void 0;

const ignore = (fn, returnError = false, log = false) => async (...params) => {
  try {
    const response = await fn(...params);
    return response;
  } catch (error) {
    if (log) {
      console.log(error);
    }

    return returnError ? error : undefined;
  }
};

exports.ignore = ignore;
var _default = ignore;
exports.default = _default;