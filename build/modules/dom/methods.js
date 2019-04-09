"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleComponentRender = exports.handleAddDomComponent = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+name

  sb.sb_notifyListen({
    'add-dom-component': this.handleAddDomComponent.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleAddDomComponent = function handleAddDomComponent(data) {
  var sb = this.sb; // console.log('The Dom View')
  // console.log(sb)
  // console.log(sb.view)

  console.log('The Dom Child View');
  console.log(data);
  sb.sb_addChild(sb.view, data); // this.emit({type:'stop-preloader',data:''})
};

exports.handleAddDomComponent = handleAddDomComponent;

var handleComponentRender = function handleComponentRender(evt) {
  this.evt.data.name();
};

exports.handleComponentRender = handleComponentRender;