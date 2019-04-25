"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Left =
/*#__PURE__*/
function () {
  function Left(home) {
    _classCallCheck(this, Left);

    this.build = this.build;
    this.parent = home; // this.reducers = reducers
  }

  _createClass(Left, [{
    key: "build",
    value: function build(state) {
      var trunk = this.parent.trunk;
      var name = this.constructor.name.toLowerCase();
      this.parent.emit({
        type: 'create-dom-tree',
        data: {
          trunk: trunk,
          name: name,
          nav: {
            props: {
              presentational: {
                set: true,
                presents: {
                  class: "hr-size-fl-sm d-inline-block"
                }
              },
              functional: {
                set: false
              }
            },
            children: [{
              element: 'ul',
              props: {
                presentational: {
                  set: true,
                  presents: {
                    class: "list list__hr"
                  }
                },
                functional: {
                  set: false
                }
              },
              children: [{
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "fg-light hr-size-fl-tn list__item list__item list__item--marg-offset-bottom-small"
                    }
                  },
                  functional: {
                    set: false
                  }
                },
                children: [{
                  element: 'a',
                  props: {
                    presentational: {
                      set: true,
                      presents: {
                        class: "font-fd-xx-tn fg-light d-inline-block link",
                        content: "072 415 6969",
                        href: '/home'
                      }
                    },
                    functional: {
                      set: true,
                      meta: {
                        emit: {
                          type: 'router-link',
                          data: {
                            type: 'datum',
                            data: {
                              to: '/home'
                            }
                          }
                        }
                      }
                    }
                  }
                }]
              }, {
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "fg-light hr-size-fl-sm list__item list__item list__item--marg-offset-bottom-small"
                    }
                  },
                  functional: {
                    set: false
                  }
                },
                children: [{
                  element: 'a',
                  props: {
                    presentational: {
                      set: true,
                      presents: {
                        class: "font-fd-xx-tn fg-light d-inline-block link",
                        content: "Monday-Sat: 08am - 17 pm",
                        href: '/about'
                      }
                    },
                    functional: {
                      set: true,
                      meta: {
                        emit: {
                          type: 'router-link',
                          data: {
                            type: 'datum',
                            data: {
                              to: '/about'
                            }
                          }
                        }
                      }
                    }
                  }
                }]
              }, {
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "fg-light hr-size-fl-tn list__item list__item list__item--marg-offset-bottom-small"
                    }
                  },
                  functional: {
                    set: false
                  }
                },
                children: [{
                  element: 'a',
                  props: {
                    presentational: {
                      set: true,
                      presents: {
                        class: "font-fd-xx-tn d-inline-block fg-light link",
                        content: "support@ibrc.co.za",
                        href: '/contact'
                      }
                    },
                    functional: {
                      set: true,
                      meta: {
                        emit: {
                          type: 'router-link',
                          data: {
                            type: 'datum',
                            data: {
                              to: '/contact'
                            }
                          }
                        }
                      }
                    }
                  }
                }]
              }]
            }]
          }
        }
      });
    }
  }]);

  return Left;
}();

var _default = Left;
exports.default = _default;