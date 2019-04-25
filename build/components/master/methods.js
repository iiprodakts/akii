"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentMerged = exports.handleComponentMerged = exports.emit = exports.listens = exports.start = exports.init = void 0;

var init = function init() {
  var self = this; // console.log('The list')
  // console.log(this.list)
  // this.list.build(self)

  this.listens();
  this.mergeComponents = ['header', 'routes', 'footer' // 'footer'
  // 'footer',
  // 'todo',
  // 'about'
  ];
  this.emit({
    type: 'merge-component',
    data: {
      components: self.mergeComponents
    }
  }); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var start = function start() {
  var self = this;
  var newA = [];
  self.mergeComponents.forEach(function (va, i) {
    console.log('The va');
    console.log(va);
    self.components.forEach(function (v, vi) {
      if (v.name === va) {
        newA.push(v);
      }
    });
  });
  console.log('The value of new Array now');
  console.log(newA);
  console.log('The value of old Array');
  console.log(this.mergeComponents);
  newA.forEach(function (comp) {
    comp.component.start();
  });
};

exports.start = start;

var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'component-merged': this.handleComponentMerged.bind(this)
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

var handleComponentMerged = function handleComponentMerged(data) {
  this.componentMerged(data);
};

exports.handleComponentMerged = handleComponentMerged;

var componentMerged = function componentMerged(data) {
  var self = this;
  this.components.push({
    component: data.component,
    name: data.component.constructor.name.toLowerCase()
  });

  if (self.components.length === self.mergeComponents.length) {
    self.start();
  } // console.log('The components of the master component')
  // console.log(this.components)

};

exports.componentMerged = componentMerged;