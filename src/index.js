'use strict';

var get = function(v) {
  return Object.create(null, {
    get: {value: v},
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

var value = function(v) {
  return Object.create(null, {
    value: {value: v},
  });
};

module.exports = {
  get: get,
  enumerableGet: enumerableGet,
  enumerableValue: enumerableValue,
  value: value,
};
