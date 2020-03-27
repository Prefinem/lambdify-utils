"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ota = exports.objectToArray = void 0;

const merge = (initial, key, value) => ({ ...initial,
  [key]: value
});

const objectToArray = (obj, keyName) => Object.keys(obj).map(key => keyName ? merge(obj[key], keyName, key) : obj[key]);

exports.objectToArray = objectToArray;
const ota = objectToArray;
exports.ota = ota;
var _default = objectToArray;
exports.default = _default;