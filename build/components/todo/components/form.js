"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  function Form(home) {
    _classCallCheck(this, Form);

    this.parent = home;
    this.initState = {
      form: ["strong", "light on me", "save me"] // this.reducers = reducers

    };
  }

  _createClass(Form, [{
    key: "build",
    value: function build(state) {
      console.log('Referencing the emit');
      console.log(this.parent.emit);
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
                  class: "hr-size-fl-lg pd-left-fl-bt pos-rel mg-top-fd-md mg-bottom-fd-md"
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
                    content: "Add new Item"
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
                element: 'form',
                props: {
                  presentational: {
                    set: true,
                    presents: {
                      class: "form"
                    }
                  },
                  functional: {
                    set: true,
                    meta: {
                      emit: {
                        type: 'create-form',
                        data: this.form()
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
  }, {
    key: "form",
    value: function form() {
      var that = this; // console.log('The form component"s form method has been invoked')
      // console.log(that)
      // console.log('The value of t')
      // console.log(t)

      return [{
        element: 'input',
        name: 'Add Item',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
              type: 'text',
              placeholder: 'Add done item',
              id: 'add-itme',
              name: 'addv'
            }
          },
          functional: {
            set: false
          }
        },
        parent: {
          set: true,
          element: 'p',
          props: {
            presentational: {
              set: true,
              presents: {
                class: "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
                id: "test-id"
              }
            },
            functional: {
              set: false
            }
          },
          children: [{
            element: 'small',
            role: 'name',
            props: {
              presentational: {
                set: true,
                presents: {
                  class: "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary"
                }
              },
              functional: {
                set: false
              }
            }
          }, {
            element: 'span',
            role: 'input',
            props: {
              presentational: {
                set: true,
                presents: {
                  class: "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                  id: "test-id"
                }
              },
              functional: {
                set: false
              }
            }
          }]
        }
      }, {
        element: 'input',
        name: '',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "hr-size-fl-xx-bg bg-dark fg-light d-inline-block pd-fd-bt bd-none",
              type: 'submit',
              id: 'address',
              value: 'Save'
            }
          },
          functional: {
            set: true,
            event: {
              click: {
                type: 'click',
                callback: this.addItem.bind(this)
              }
            }
          }
        },
        parent: {
          set: true,
          element: 'p',
          props: {
            presentational: {
              set: true,
              presents: {
                class: "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
                id: "test-id"
              }
            },
            functional: {
              set: false
            }
          }
        }
      }];
    }
  }, {
    key: "addItem",
    value: function addItem(e) {
      console.log('The additem callback has been called on submit');
      console.log('THE ADD ITEM EVENT HAS OCCURED');
      var sb = this.parent.sb;
      var p = sb.sb_getParent(e.target);
      var fm = sb.sb_getParent(p);
      var val = fm.addv.value;
      sb.sb_preventNormal(e);
      this.parent.emit({
        type: 'action-dispatch',
        data: {
          type: 'ADD_ITEM',
          component: 'todo',
          data: {
            id: 'list',
            payload: val
          }
        }
      }); // console.log('The name of the event')
      // console.log(e.type)
      // console.log('The event target')
      // console.log(e.target)
    }
  }]);

  return Form;
}();

var _default = Form;
exports.default = _default;