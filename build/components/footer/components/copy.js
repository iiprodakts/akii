"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Copy =
/*#__PURE__*/
function () {
  function Copy(home) {
    _classCallCheck(this, Copy);

    this.build = this.build;
    this.parent = home; // this.reducers = reducers
  }

  _createClass(Copy, [{
    key: "build",
    value: function build(state) {
      var trunk = this.parent.trunk;
      var name = this.constructor.name.toLowerCase();
      this.parent.emit({
        type: 'create-dom-tree',
        data: {
          trunk: trunk,
          name: name,
          div: {
            props: {
              presentational: {
                set: true,
                presents: {
                  class: "hr-size-fl-sm pos-rel pd-left-fl-bt"
                }
              },
              functional: {
                set: false
              }
            },
            children: [{
              element: 'p',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "mg-bottom-fd-tn font-fd-tn fg-primary font-wt-bolder",
                    content: 'I am the footer'
                  }
                },
                functional: {
                  set: false
                }
              }
            }]
          }
        }
      });
    }
  }]);

  return Copy;
}();

var _default = Copy;
exports.default = _default;