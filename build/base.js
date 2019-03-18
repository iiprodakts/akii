"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("./base/core"));

var _sandbox = _interopRequireDefault(require("./base/sandbox"));

var _suku = _interopRequireDefault(require("./vendor/suku"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = _core.default, this.SANDBOX = _sandbox.default, this.SUKU = _suku.default;
};

var _default = new Base();

exports.default = _default;