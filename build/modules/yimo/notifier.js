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

    this.evs = {};
    this.listen = listen;
    this.emit = emit;
    console.log('THE NOTIFIER EXECUTES');
  }

  _createClass(Notifier, [{
    key: "listen",
    value: function listen(evt, data) {
      self = this;
      console.log('THE NOTIFIER LISTEN');
      console.log(this.evs);
      console.log("Event: ".concat(evt, " has been subscribed, and the data is: ").concat(data));
      console.log(data);
      console.log(self.evts.events);
      console.log(data.component);
      var comp = {
        callback: data.callback,
        type: evt
      };
      self.evts.events[data.component] = comp;
    }
  }, {
    key: "emit",
    value: function emit(evt, component) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      console.log('THE NOTIFIEF EMIT');
      console.log('Hi, I am the emit on state change');

      for (var evts in self.evts.events) {
        if (self.evts.events.hasOwnProperty(component)) {
          self.evts.events[component]['callback'](self.state);
          console.log(self.state);
          break;
        }
      }
    }
  }]);

  return Notifier;
}();

var _default = new Notifier();

exports.default = _default;