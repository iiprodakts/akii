"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Count =
/*#__PURE__*/
function () {
  function Count(home) {
    _classCallCheck(this, Count);

    this.build = this.build;
    this.parent = home; // this.reducers = reducers
  }

  _createClass(Count, [{
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
                  class: "hr-size-fl-sm d-inline-block top-offset-vh-xxx-tn mg-bottom-fd-h pos-rel pd-left-fl-bt"
                }
              },
              functional: {
                set: false
              }
            },
            children: [{
              element: 'h1',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "mg-bottom-fd-xx-sm",
                    content: "You've Done:"
                  }
                },
                functional: {
                  set: false
                }
              }
            }, {
              element: 'p',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "mg-bottom-fd-tn font-fd-tn fg-primary font-wt-bolder",
                    content: state['todo'].list.items.length
                  }
                },
                functional: {
                  set: false
                }
              }
            }, {
              element: 'h2',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "mg-bottom-fd-sm font-wt-bolder",
                    content: "Things today"
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

  return Count;
}();

var _default = Count;
exports.default = _default;