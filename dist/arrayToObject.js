"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ato = exports.arrayToObject = void 0;

const merge = (first, second) => ({ ...first,
  ...second
});

const arrayToObject = (array, key, mergeFN) => array.reduce((result, record, index) => {
  const lookupKey = typeof key === 'function' ? key(record) : record[key] || index;
  return { ...result,
    [lookupKey]: mergeFN ? mergeFN(record, result[lookupKey]) : merge(result[lookupKey], record)
  };
}, {});

exports.arrayToObject = arrayToObject;
const ato = arrayToObject;
exports.ato = ato;
var _default = arrayToObject;
exports.default = _default;