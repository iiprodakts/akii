"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domTreeCreated = exports.addOps = exports.addProps = exports.addChildren = exports.createChildren = exports.create = exports.createDomTree = exports.handleCreateDomTree = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  console.log('Module: Aka, has been initialised');
  this.listens();
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  console.log('AKA LISTENS TO THE CREATE DOM TREE EVENT');
  sb.sb_notifyListen({
    'create-dom-tree': this.handleCreateDomTree.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  var sb = this.sb;
  console.log('Module: Aka emits event: ' + eNotifs.type);
  console.log('Event data: ' + eNotifs.data);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleCreateDomTree = function handleCreateDomTree(data) {
  var sb = this.sb;
  console.log('The Create Dom TREE EVENT IS CAUGHT');
  this.createDomTree(data);
};

exports.handleCreateDomTree = handleCreateDomTree;

var createDomTree = function createDomTree(data) {
  //   var dom = null
  console.log('The data structure object');
  console.log(data);
  console.log(Object.keys(data));
  var rootName = Object.keys(data)[0];
  console.log(rootName);
  var root = this.create(rootName, data[rootName].props.presentational, data[rootName].props.functional);
  var children = this.createChildren(root, data[rootName].children);
  var root = this.addChildren(root, children); //   var root = this.addChildren(root,children)

  this.domTreeCreated(root);
};

exports.createDomTree = createDomTree;

var create = function create(name, props, ops) {
  console.log('Create');
  console.log(props);
  var sb = this.sb;
  var el = this.addProps(this.addOps(sb.sb_createElement(name), ops), props); //  var el = this.addProps(el,props.presentational)

  return el;
};

exports.create = create;

var createChildren = function createChildren(root, children) {
  var sb = this.sb;
  var descends = [];

  for (var c = 0; c < children.length; c++) {
    var e = children[c];
    console.log('The current child props property');
    console.log(e.props);
    var el = this.create(e.element, e.props.presentational, e.props.functional);

    if (e.children) {
      console.log('The current element has children');
      console.log(e.children);
      sb.sb_addChild(root, el);
      this.createChildren(el, e.children);
    } else {
      console.log('The last innermost element has no children');
      sb.sb_addChild(root, el);
    }

    descends.push(el);
  }

  return descends;
};

exports.createChildren = createChildren;

var addChildren = function addChildren(parent, children) {
  var sb = this.sb;

  for (var c = 0; c < children.length; ++c) {
    sb.sb_addChild(parent, children[c]);
  }

  return parent;
};

exports.addChildren = addChildren;

var addProps = function addProps(el, props) {
  var sb = this.sb;
  console.log('ADD PROPS');
  console.log(props);
  console.log(el);

  if (props.set) {
    for (var p in props.presents) {
      if (p === 'content') {
        sb.sb_insertInner(el, props.presents[p]);
      } else {
        sb.sb_addProperty(el, p, props.presents[p]);
      }
    }
  }

  return el;
};

exports.addProps = addProps;

var addOps = function addOps(el, ops) {
  var sb = this.sb;
  console.log('ADD OPS');
  console.log(ops);
  console.log(el);

  if (ops.set) {
    for (var p in ops.meta) {
      if (p === 'emit') {
        console.log('The data of emit property');
        console.log(ops.meta[p]);
        this.emit({
          type: ops.meta[p].type,
          data: {
            parent: el,
            data: ops.meta[p].data
          }
        });
      }
    }
  }

  return el;
};

exports.addOps = addOps;

var domTreeCreated = function domTreeCreated(dom) {
  this.emit({
    type: 'dom-tree-created',
    data: dom
  });
};

exports.domTreeCreated = domTreeCreated;