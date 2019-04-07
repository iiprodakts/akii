"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTrunk = exports.render = exports.build = exports.functions = exports.evs = exports.messenger = exports.domTreeCreated = exports.handleDomTreeCreated = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  var self = this; // console.log('The list')
  // console.log(this.list)
  // this.list.build(self)

  this.listens();
  this.emit({
    type: 'subscribe-to-store',
    data: {
      event: 'STATE-CHANGE',
      component: 'todo',
      initState: {
        list: {
          items: this.children[0].initState.items
        }
      },
      callback: self.build.bind(self)
    }
  });
  this.emit({
    type: 'connect-to-store',
    data: {
      component: 'todo',
      actions: this.actions,
      reducer: this.reducer
    }
  }); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'dom-tree-created': this.handleDomTreeCreated.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleDomTreeCreated = function handleDomTreeCreated(data) {
  var sb = this.sb;
  this.domTreeCreated(data); // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }
};

exports.handleDomTreeCreated = handleDomTreeCreated;

var domTreeCreated = function domTreeCreated(data) {
  var self = this;
  this.emit({
    type: 'add-domto-vd',
    data: {
      data: data,
      id: self.constructor.name
    }
  });
};

exports.domTreeCreated = domTreeCreated;

var messenger = function messenger(data) {
  this.emit({
    type: 'retrieve-data',
    data: data
  });
};

exports.messenger = messenger;

var evs = function evs() {
  var that = this;
  return {
    submit: function submit(e) {
      var sb = that.sb;
      sb.sb_preventNormal(e);
      console.log('The name of the event');
      console.log(e.type);
      console.log('The event target');
      console.log(e.target);
      alert('Event occured');
    }
  };
};

exports.evs = evs;

var functions = function functions() {
  var that = this; // console.log('The value of That in Home component')
  // console.log(this)
  // console.log(this.prototype.events)

  return {
    form: function form(evs) {
      // console.log('The value of t')
      // console.log(t)
      return [{
        element: 'input',
        name: 'Address',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
              type: 'text',
              placeholder: 'Street address',
              id: 'address'
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
        name: 'address',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
              type: 'text',
              placeholder: 'Street address',
              id: 'address'
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
        name: 'address',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
              type: 'text',
              placeholder: 'Street address',
              id: 'address'
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
        name: 'address',
        props: {
          presentational: {
            set: true,
            presents: {
              class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
              type: 'text',
              placeholder: 'Street address',
              id: 'address'
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
        name: 'address',
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
                callback: evs.submit.bind(this)
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
  };
};

exports.functions = functions;

var build = function build(state) {
  // console.log('The initial state')
  // console.log(state)
  // console.log(this)
  this.trunk = this.createTrunk();
  this.children.forEach(function (child) {
    child.build(state);
  }); //   var that = o;
  //   console.log('The value of that')
  //   console.log(o)
  // var evs = this.evs()
  //   var funks = this.functions()
  //   console.log('The emit')
  //   console.log(funks)
  // this.emit({type: 'action-dispatch',data: {
  //     type: 'SET_TYPE',
  //     component: 'todo'
  // }})
  // this.emit({type: 'action-dispatch',data: {
  //     type: 'TEST_TYPE',
  //     component: 'todo'
  // }})
  //  this.emit({type:'create-dom-tree',data:{
  //        article:{
  //            props: {
  //                presentational:{
  //                    set:true,
  //                    presents:{
  //                    class: "login-content",
  //                    id: "test-id"
  //                    }
  //                },
  //                functional:{
  //                    set: false,
  //                }
  //            },
  //            children:[
  //                {
  //                    element: 'section',
  //                    props: {
  //                        presentational: {
  //                            set: true,
  //                            presents: {
  //                                class: "app__brand",
  //                            }
  //                       },
  //                       functional:{
  //                        set: false
  //                       }
  //                    },
  //                    children:[
  //                        {
  //                            element: 'figure',
  //                            props:{
  //                                presentational:{
  //                                    set: true,
  //                                    presents: {
  //                                        class: "app__brand--logo"
  //                                    }
  //                                },
  //                                functional:{
  //                                    set: false
  //                                }
  //                            },
  //                            children:[
  //                                {
  //                                    element: 'img',
  //                                    props:{
  //                                        presentational:{
  //                                            set: true,
  //                                            presents: {
  //                                                src: "img/ssmarfoc.png"
  //                                            }
  //                                        },
  //                                        functional:{
  //                                            set: false
  //                                        }
  //                                    }
  //                                }
  //                            ]
  //                        },
  //                        {
  //                            element: 'p',
  //                            props:{
  //                                presentational:{
  //                                    set: true,
  //                                    presents: {
  //                                        class: "app__brand--name",
  //                                        content: 'Smarfo'
  //                                    }
  //                                },
  //                                functional:{
  //                                    set: false
  //                                }
  //                            }
  //                        }
  //                    ]
  //                },
  //                {
  //                    element: 'section',
  //                    props: {
  //                        presentational: {
  //                            set: true,
  //                            presents: {
  //                                class: "login"
  //                            }
  //                       },
  //                       functional:{
  //                        set: false
  //                       }
  //                    },
  //                    children:[
  //                        {
  //                            element: 'form',
  //                            props:{
  //                                presentational:{
  //                                    set: true,
  //                                    presents: {
  //                                        class: "form",
  //                                        id: 'login-data',
  //                                    }
  //                                },
  //                                functional:{
  //                                    set: true,
  //                                    meta:{
  //                                      emit: {
  //                                          type: 'create-form',
  //                                          data: this.functions().form(evs)
  //                                      }
  //                                    }
  //                                }
  //                            }
  //                        }
  //                    ]
  //                }
  //            ]
  //        }
  //  }})
};

exports.build = build;

var render = function render(state) {
  console.log('From the TODO component, I render on state change');

  if (state) {
    console.log('The State inside the render method');
    console.log(state);
  }
};

exports.render = render;

var createTrunk = function createTrunk() {
  var sb = this.sb;
  var trunk = sb.sb_createElement('main');
  sb.sb_addProperty(trunk, 'id', this.constructor.name.toLowerCase());
  sb.sb_addProperty(trunk, 'class', 'component-view');
  return trunk;
};

exports.createTrunk = createTrunk;