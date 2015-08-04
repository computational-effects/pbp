'use strict';

var value = function(v) {
  return Object.create(null, {
    value: {value: v},
  });
};

var enumerableValue = function(v) {
  return Object.create(null, {
    value: {value: v},
    enumerable: {value: true},
  });
};

module.exports = {
  enumerableValue: enumerableValue,
  value: value,
};
