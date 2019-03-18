"use strict";

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_base.default.surprise();

var greeting = function greeting() {
  return alert('This is inside test');
};

greeting();