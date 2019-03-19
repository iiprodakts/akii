"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notifier =
/*#__PURE__*/
function () {
  function Notifier() {
    _classCallCheck(this, Notifier);

    this.events = {};
  }

  _createClass(Notifier, [{
    key: "listen",
    value: function listen(evt, callback) {
      this.events[evt] = callback;
    }
  }, {
    key: "emit",
    value: function emit(evt) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.events.hasOwnProperty(evt)) {
        this.events[evt](data);
      }
    }
  }]);

  return Notifier;
}();

var _default = new Notifier();

exports.default = _default;