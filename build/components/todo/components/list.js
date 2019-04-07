"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List(home) {
    _classCallCheck(this, List);

    this.parent = home;
    this.initState = {
      items: ["strong", "light on me", "save me"]
    };
    this.dt = [1, 2, 3, 'four', 'five']; // this.reducers = reducers
  }

  _createClass(List, [{
    key: "build",
    value: function build(state) {
      //  console.log('Referencing the emit')
      //  console.log(this.parent.emit)
      this.dt.push(this.dt.length + 1);
      var dt = this.dt;
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
                  class: "hr-size-fl-lg top-offset-vh-tn mg-bottom-fd-h pos-rel pd-left-fl-bt"
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
                    content: "Done List"
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
                    class: "mg-bottom-fd-tn",
                    content: "A list of things that you have achieved today"
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
                    class: "mg-bottom-fd-sm font-wt-bolder",
                    content: "Note: this is a protoype"
                  }
                },
                functional: {
                  set: false
                }
              }
            }, {
              element: 'div',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "bg-light"
                  }
                },
                functional: {
                  set: false
                }
              },
              children: [{
                element: 'h4',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "font-fd-tn mg-bottom-fd-x-tn",
                      content: "What you have done:"
                    }
                  },
                  functional: {
                    set: false
                  }
                }
              }, {
                element: 'ul',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "list list--none"
                    }
                  },
                  functional: {
                    set: true,
                    meta: {
                      emit: {
                        type: 'create-list',
                        data: state['todo'].list.items,
                        style: "mg-bottom-fd-xx-tn list__item list__item list__item--ve list__item--border-bottom-secondary list__item--marg-offset-bottom-small"
                      }
                    }
                  }
                }
              }]
            }]
          }
        }
      });
    }
  }]);

  return List;
}();

var _default = List;
exports.default = _default;