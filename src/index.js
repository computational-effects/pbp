'use strict';

var value = function(v) {
  return Object.create(null, {
    value: {value: v},
  });
};

var enumerableGet = function(v) {
  return Object.create(null, {
    get: {value: v},
    enumerable: {value: true},
  });
};

var enumerableValue = function(v) {
  return Object.create(null, {
    value: {value: v},
    enumerable: {value: true},
  });
};

module.exports = {
  enumerableGet: enumerableGet,
  enumerableValue: enumerableValue,
  value: value,
};
