"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Right =
/*#__PURE__*/
function () {
  function Right(home) {
    _classCallCheck(this, Right);

    this.build = this.build;
    this.parent = home; // this.reducers = reducers
  }

  _createClass(Right, [{
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
                    class: "list__hr mg-left-fl-x-sm pos-rel"
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
                      class: "list__item--hr-size-fl-x-tn"
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
                        class: "font-fd-xx-tn d-inline-block link",
                        href: 'http://www.facebook.com/company'
                      }
                    },
                    functional: {
                      set: false
                    }
                  },
                  children: [{
                    element: 'img',
                    props: {
                      presentational: {
                        set: true,
                        presents: {
                          class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                          src: 'img/social/facebook.png'
                        }
                      },
                      functional: {
                        set: false
                      }
                    }
                  }]
                }]
              }, {
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "list__item--hr-size-fl-x-tn"
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
                        class: "font-fd-xx-tn d-inline-block link",
                        href: 'http://www.twitter.com/company'
                      }
                    },
                    functional: {
                      set: false
                    }
                  },
                  children: [{
                    element: 'img',
                    props: {
                      presentational: {
                        set: true,
                        presents: {
                          class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                          src: 'img/social/twitter.png'
                        }
                      },
                      functional: {
                        set: false
                      }
                    }
                  }]
                }]
              }, {
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "list__item--hr-size-fl-x-tn"
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
                        class: "font-fd-xx-tn d-inline-block link",
                        href: 'http://www.googleplus.com/company'
                      }
                    },
                    functional: {
                      set: false
                    }
                  },
                  children: [{
                    element: 'img',
                    props: {
                      presentational: {
                        set: true,
                        presents: {
                          class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                          src: 'img/social/googleplus.png'
                        }
                      },
                      functional: {
                        set: false
                      }
                    }
                  }]
                }]
              }, {
                element: 'li',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "list__item--hr-size-fl-x-tn"
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
                        class: "font-fd-xx-tn d-inline-block link",
                        href: 'http://www.instagram.com/company'
                      }
                    },
                    functional: {
                      set: false
                    }
                  },
                  children: [{
                    element: 'img',
                    props: {
                      presentational: {
                        set: true,
                        presents: {
                          class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                          src: 'img/social/instagram.png'
                        }
                      },
                      functional: {
                        set: false
                      }
                    }
                  }]
                }]
              }]
            }]
          }
        }
      });
    }
  }]);

  return Right;
}();

var _default = Right;
exports.default = _default;