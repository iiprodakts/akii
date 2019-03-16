"use strict";

function Home(sandbox) {
  this.sb = sandbox;
  this.state = {};
  this.props = {};
  this.build = {}; // this.componentname = window.location.href.split('/').pop().split('.')[0]
}

Home.prototype.init = function () {
  this.listens();
  this.build(); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};

Home.prototype.listens = function () {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'dom-tree-created': this.handleDomTreeCreated.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

Home.prototype.emit = function (eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

Home.prototype.handleDomTreeCreated = function (data) {
  var sb = this.sb;

  if (!sb.view.contains(data)) {
    sb.sb_addChild(sb.view, data);
    this.emit({
      type: 'stop-preloader',
      data: ''
    });
    this.emit({
      type: 'create-links',
      data: ''
    });
  }
};

Home.prototype.domTreeCreated = function (data) {
  this.emit({
    type: 'add-dom-component',
    data: data
  });
};

Home.prototype.messenger = function (data) {
  this.emit({
    type: 'retrieve-data',
    data: data
  });
};

Home.prototype.events = function (id) {
  var that = this;
  return {
    getAddProduct: function getAddProduct(evt) {
      var sb = that.sb;
      var productFm = sb.sb_getParent(evt.target);

      if (!productFm.product_qty.value) {
        sb.sb_addProperty(productFm.product_qty, 'value');
        productFm.product_qty.value = 1;
      } else {
        productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) + 1;
      }

      var productData = {
        productId: productFm.product_id.value,
        productName: productFm.product_name.value,
        productPrice: parseFloat(productFm.product_price.value, 2),
        productQty: parseInt(productFm.product_qty.value, 10)
      };
      return productData;
    }
  };
};

Home.prototype.functions = function (id) {
  var that = this;
  return {
    getAddProduct: function getAddProduct(evt) {
      var sb = that.sb;
      var productFm = sb.sb_getParent(evt.target);

      if (!productFm.product_qty.value) {
        sb.sb_addProperty(productFm.product_qty, 'value');
        productFm.product_qty.value = 1;
      } else {
        productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) + 1;
      }

      var productData = {
        productId: productFm.product_id.value,
        productName: productFm.product_name.value,
        productPrice: parseFloat(productFm.product_price.value, 2),
        productQty: parseInt(productFm.product_qty.value, 10)
      };
      return productData;
    }
  };
};

Home.prototype.tools = function (id) {
  var that = this;
  return {
    events: {
      addToCart: function addToCart(ev) {
        var sb = that.sb;
        sb.sb_stopEventBubble(ev);
        var productData = this.functions.getAddProduct(ev);
        that.emit({
          type: 'add-to-cart',
          data: productData
        });
      },
      updateCart: function updateCart(ev) {
        var sb = that.sb; // console.log('The input event')
        // console.log(ev)
        //ev.stopImmediatePropagation()

        var productData = this.functions.getUpdateProduct(ev);

        if (productData) {
          that.emit({
            type: 'update-cart',
            data: productData
          });
        }

        return false;
      },
      removeFromCart: function removeFromCart(ev) {
        var sb = that.sb;
        sb.sb_stopEventBubble(ev);
        var productData = this.functions.getRemoveProduct(ev);

        if (productData) {
          that.emit({
            type: 'remove-from-cart',
            data: productData
          });
        }
      }
    },
    functions: {
      getAddProduct: function getAddProduct(evt) {
        var sb = that.sb;
        var productFm = sb.sb_getParent(evt.target);

        if (!productFm.product_qty.value) {
          sb.sb_addProperty(productFm.product_qty, 'value');
          productFm.product_qty.value = 1;
        } else {
          productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) + 1;
        }

        var productData = {
          productId: productFm.product_id.value,
          productName: productFm.product_name.value,
          productPrice: parseFloat(productFm.product_price.value, 2),
          productQty: parseInt(productFm.product_qty.value, 10)
        };
        return productData;
      },
      getRemoveProduct: function getRemoveProduct(evt) {
        var sb = that.sb;
        var productFm = sb.sb_getParent(evt.target);

        if (productFm.product_qty.value && parseInt(productFm.product_qty.value, 10) > 0) {
          productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) - 1;
          var productData = {
            productId: productFm.product_id.value,
            productName: productFm.product_name.value,
            productPrice: parseFloat(productFm.product_price.value, 2),
            productQty: parseInt(productFm.product_qty.value, 10)
          };
          return productData;
        } else {
          console.log('The product to remove is not');
          return null;
        }
      },
      getUpdateProduct: function getUpdateProduct(evt) {
        var sb = that.sb;
        var productFm = sb.sb_getParent(evt.target);
        var updateValue = parseInt(productFm.product_qty.value.trim());
        console.log('The converted update value');
        console.log(updateValue);

        if (updateValue !== '' && !isNaN(updateValue) && updateValue >= 0) {
          var productData = {
            productId: productFm.product_id.value,
            productName: productFm.product_name.value,
            productPrice: parseFloat(productFm.product_price.value, 2),
            productQty: parseInt(productFm.product_qty.value, 10)
          };
          return productData;
        } else {
          console.log('The value is not in required format');
          return null;
        }
      }
    } // if(tools[id]){
    // 	return tools[id]
    // }

  };
};

Home.prototype.build = function (data) {
  this.emit({
    type: 'create-dom-tree',
    data: {
      main: {
        props: {
          presentational: {
            class: "login-content"
          },
          functional: {
            set: false
          }
        },
        children: [{
          element: 'section',
          props: {
            presentational: {
              set: true,
              presents: {
                class: "app__brand"
              }
            },
            functional: {
              set: false
            }
          },
          children: [{
            element: 'figure',
            presentational: {
              set: true,
              presents: {
                class: "app__brand--logo"
              }
            },
            functional: {
              set: false
            },
            children: [{
              element: 'img',
              presentational: {
                set: true,
                presents: {
                  src: "img/ssmarfoc.png"
                }
              },
              functional: {
                set: false
              }
            }]
          }, {
            element: 'p',
            presentational: {
              set: true,
              presents: {
                class: "app__brand--name",
                content: 'Smarfo'
              }
            },
            functional: {
              set: false
            }
          }]
        }, {
          element: 'section',
          props: {
            presentational: {
              set: true,
              presents: {
                class: "login"
              }
            },
            functional: {
              set: false
            }
          },
          children: [{
            element: 'form',
            presentational: {
              set: true,
              presents: {
                class: "form",
                id: 'login-data'
              }
            },
            functional: {
              set: false
            },
            children: [{
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "d-none",
                  id: 'response'
                }
              },
              functional: {
                set: false
              }
            }, {
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "form__group"
                }
              },
              functional: {
                set: false
              },
              children: [{
                element: 'input',
                presentational: {
                  set: true,
                  presents: {
                    class: "form__input hr-size-fl-xxx-lg mg-auto d-block form__input--box-bd-bottom-fd-secondary-xx-bt  mg-bottom-fd-xxx-sm",
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                  }
                },
                functional: {
                  set: false
                }
              }]
            }, {
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "form__group"
                }
              },
              functional: {
                set: false
              },
              children: [{
                element: 'input',
                presentational: {
                  set: true,
                  presents: {
                    class: "form__input hr-size-fl-xxx-lg mg-auto d-block form__input--box-bd-bottom-fd-secondary-xx-bt  mg-bottom-fd-xxx-sm",
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                  }
                },
                functional: {
                  set: false
                }
              }]
            }, {
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "form__group"
                }
              },
              functional: {
                set: false
              },
              children: [{
                element: 'input',
                presentational: {
                  set: true,
                  presents: {
                    class: "form__input hr-size-fl-xxx-lg mg-auto d-block form__input--box-bd-bottom-fd-secondary-xx-bt  mg-bottom-fd-xxx-sm",
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                  }
                },
                functional: {
                  set: false
                }
              }]
            }, {
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "form__group"
                }
              },
              functional: {
                set: false
              },
              children: [{
                element: 'input',
                presentational: {
                  set: true,
                  presents: {
                    class: "form__input hr-size-fl-xxx-lg mg-auto d-block form__input--box-bd-bottom-fd-secondary-xx-bt  mg-bottom-fd-xxx-sm",
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                  }
                },
                functional: {
                  set: false
                }
              }]
            }, {
              element: 'div',
              presentational: {
                set: true,
                presents: {
                  class: "form__group"
                }
              },
              functional: {
                set: false
              },
              children: [{
                element: 'input',
                presentational: {
                  set: true,
                  presents: {
                    class: "form__input hr-size-fl-xxx-lg mg-auto d-block form__input--box-bd-bottom-fd-secondary-xx-bt  mg-bottom-fd-xxx-sm",
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                  }
                },
                functional: {
                  set: false
                }
              }]
            }]
          }]
        }]
      }
    }
  });
};

Home.prototype.checkout = function (data) {
  var sb = this.sb;
  var tools = this.tools('checkout');
  var mainEl = sb.sb_createElement('div');
  var stages = sb.sb_createElement('div');
  var stagesBg = sb.sb_createElement('div');
  var cartStage = sb.sb_createElement('span');
  var cartStageBtn = sb.sb_createElement('button');
  var cartStageLb = sb.sb_createElement('h1');
  var deliveryStage = sb.sb_createElement('span');
  var deliveryStageBtn = sb.sb_createElement('button');
  var deliveryStageLb = sb.sb_createElement('h1');
  var paymentStage = sb.sb_createElement('span');
  var paymentStageBtn = sb.sb_createElement('button');
  var paymentStageLb = sb.sb_createElement('h1');
  var confirmStage = sb.sb_createElement('span');
  var confirmStageBtn = sb.sb_createElement('button');
  var confirmStageLb = sb.sb_createElement('h1');
  var activeStage = sb.sb_createElement('span');
  var completed = sb.sb_createElement('span');
  var aCircleLf = sb.sb_createElement('span');
  var aCircleMd = sb.sb_createElement('span');
  var aCircleRt = sb.sb_createElement('span');
  var customise = sb.sb_createElement('span');
  var customiseBtn = sb.sb_createElement('span');
  sb.sb_addProperty(stages, 'class', ' z-index bg-general-alt top-offset-vh-x-tn left-offset-fl-xxx-tn pos-fd');
  sb.sb_addProperty(stagesBg, 'class', 'hr-size-fd-hi-2 bg-dark left-offset-fd-x-tn mg-top-fd-x-tn vt-size-fd-xx-bt pos-abs');
  sb.sb_addProperty(cartStage, 'class', 'd-inline-block font-fd-xxx-tn fg-dark-lt');
  sb.sb_addProperty(deliveryStage, 'class', 'd-inline-block font-fd-xxx-tn fg-dark-lt');
  sb.sb_addProperty(paymentStage, 'class', 'd-inline-block font-fd-xxx-tn fg-dark-lt');
  sb.sb_addProperty(confirmStage, 'class', 'd-inline-block font-fd-xxx-tn fg-dark-lt');
  sb.sb_addProperty(aCircleLf, 'class', ' left-offset-fd-xxx-tn d-block mg-right-fd-xx-sm bd-rad-fl-md bd-none dots bg-light pos-abs');
  sb.sb_addProperty(aCircleMd, 'class', 'left-offset-fd-x-tn mg-right-fd-xx-sm bd-rad-fl-md bd-none dots bg-light pos-abs');
  sb.sb_addProperty(aCircleRt, 'class', 'left-offset-fd-xxx-sm mg-right-fd-xx-sm bd-rad-fl-md bd-none dots bg-light pos-abs');
  sb.sb_addProperty(cartStageBtn, 'class', 'mg-bottom-fd-x-tn vt-size-fd-bt  mg-right-fd-sm bd-rad-fl-md bd-none hr-size-fd-md bg-dk-green fg-light pos-rel');
  sb.sb_addProperty(deliveryStageBtn, 'class', 'mg-bottom-fd-x-tn vt-size-fd-bt mg-right-fd-sm bd-rad-fl-md bd-none hr-size-fd-md bg-dk-green fg-light pos-rel');
  sb.sb_addProperty(paymentStageBtn, 'class', 'mg-bottom-fd-x-tn vt-size-fd-bt   mg-right-fd-sm bd-rad-fl-md bd-none hr-size-fd-md bg-dk-green fg-light pos-rel');
  sb.sb_addProperty(confirmStageBtn, 'class', 'mg-bottom-fd-x-tn vt-size-fd-bt bd-rad-fl-md bd-none hr-size-fd-md bg-dk-green fg-light pos-rel');
  sb.sb_addProperty(customise, 'class', 'cursor-pointer link d-block pos-fd hr-size-fl-xx-bg bottom-offset-0 bg-light  pd-top-fd-xx-bt z-index');
  sb.sb_addProperty(mainEl, 'class', 'hr-size-fl-xx-bg mg-bottom-fd-hg pos-abs top-offset-vh-x-sm');
  sb.sb_addProperty(completed, 'class', 'font-fd-x-tn form__checkbox_button'); // sb.sb_addProperty(customise,'href','checkout.html')

  sb.sb_addProperty(customiseBtn, 'class', 'd-inline-block font-fd-x-tn pd-top-fd-xx-tn text-align-center  pd-bottom-fd-xx-tn  bg-secondary hr-size-fl-xx-bg fg-light');
  sb.sb_insertInner(customiseBtn, 'Procceed');
  sb.sb_insertInner(cartStageLb, 'Cart');
  sb.sb_insertInner(deliveryStageLb, 'Delivery');
  sb.sb_insertInner(paymentStageLb, 'Payment');
  sb.sb_insertInner(confirmStageLb, 'Confirm');
  sb.sb_insertInner(completed, '&#10003;');
  sb.sb_addChild(stages, stagesBg);
  sb.sb_addChild(stages, cartStage);
  sb.sb_addChild(cartStageBtn, completed);
  sb.sb_addChild(cartStage, cartStageBtn);
  sb.sb_addChild(cartStage, cartStageLb);
  sb.sb_addChild(stages, deliveryStage);
  sb.sb_addChild(deliveryStage, deliveryStageBtn);
  sb.sb_addChild(deliveryStageBtn, activeStage);
  sb.sb_addChild(deliveryStage, deliveryStageLb);
  sb.sb_addChild(stages, paymentStage);
  sb.sb_addChild(paymentStage, paymentStageBtn);
  sb.sb_addChild(paymentStage, paymentStageLb);
  sb.sb_addChild(stages, confirmStage);
  sb.sb_addChild(confirmStage, confirmStageBtn);
  sb.sb_addChild(confirmStage, confirmStageLb);
  sb.sb_addChild(activeStage, aCircleLf);
  sb.sb_addChild(activeStage, aCircleMd);
  sb.sb_addChild(activeStage, aCircleRt);
  sb.sb_addChild(customise, customiseBtn);
  console.log('tools');
  console.log(tools);
  var els = {
    main: mainEl,
    active: activeStage,
    completed: completed,
    buttons: {
      cart: cartStageBtn,
      delivery: deliveryStageBtn,
      payment: paymentStageBtn,
      confirm: confirmStageBtn
    }
  };
  sb.sb_addEvent(customise, 'click', tools.events.loadNext.bind(this, tools, els));
  this.emit({
    type: 'component-resource-creation-done',
    data: stages
  });
  this.emit({
    type: 'component-resource-creation-done',
    data: mainEl
  });
  this.emit({
    type: 'component-resource-creation-done',
    data: customise
  });
  customise.click(tools, els);
};