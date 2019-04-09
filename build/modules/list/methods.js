"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listCreationDone = exports.addOps = exports.addProps = exports.addChildren = exports.createChildren = exports.create = exports.createList = exports.handleCreateList = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  console.log('Module: List, has been initialised');
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'create-list': this.handleCreateList.bind(this)
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

var handleCreateList = function handleCreateList(data) {
  // var sb = this.sb 
  this.createList(data);
};

exports.handleCreateList = handleCreateList;

var createList = function createList(data) {
  console.log('THE LIST DATA');
  console.log(data);
  var sb = this.sb;
  var descends = [];

  for (var d = 0; d < data.data.length; d++) {
    var el = this.create('li');
    sb.sb_insertInner(el, data.data[d]);
    descends.push(el);
    data.hasOwnProperty('children') ? this.createChildren(el, data.children) : '';
  }

  this.addChildren(data.parent, descends);
};

exports.createList = createList;

var create = function create(name, props, ops) {
  // console.log('Create')
  // console.log(props)
  var sb = this.sb;
  var el = {};

  if (props) {
    var _sb = this.sb;
    el = this.addProps(this.addOps(_sb.sb_createElement(name), ops), props); //  var el = this.addProps(el,props.presentational)
  } else {
    el = sb.sb_createElement(name);
  }

  return el;
};

exports.create = create;

var createChildren = function createChildren(root, children) {
  var sb = this.sb;
  var descends = [];

  for (var c = 0; c < children.length; c++) {
    var e = children[c]; // console.log('The current child props property')
    // console.log(e.props)

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
  console.log('Add children list runs');
  console.log(parent);
  console.log(children);
  var sb = this.sb;

  for (var c = 0; c < children.length; c++) {
    console.log(c);
    console.log(children[c]);
    sb.sb_addChild(parent, children[c]);
    console.log(parent);
  }

  console.log('list parent');
  console.log(parent);
  return parent;
};

exports.addChildren = addChildren;

var addProps = function addProps(el, props) {
  var sb = this.sb; //    console.log('ADD PROPS')
  //    console.log(props)
  //    console.log(el)

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
  var sb = this.sb; // console.log('ADD OPS')
  // console.log(ops)
  // console.log(el)

  if (ops.set) {
    console.log('THE ADD OPPS IS SET');
    console.log(el);
    console.log(ops);

    if (ops.hasOwnProperty('meta')) {
      for (var p in ops.meta) {
        if (p === 'emit') {
          // console.log('The data of emit property')
          // console.log(ops.meta[p])
          if (ops.meta[p].hasOwnProperty('style')) {
            console.log('The style string');
            var style = ops.meta[p].style;
            console.log(style);
            this.emit({
              type: ops.meta[p].type,
              data: {
                parent: el,
                data: ops.meta[p].data,
                style: style
              }
            });
          } else {
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
    } else if (ops.hasOwnProperty('event')) {
      console.log('The event property');

      for (var _p in ops.event) {
        //    console.log('The data of event property')
        //    console.log(ops.event[p])
        el.hasEvents = true;
        el.events = {
          type: ops.event[_p].type,
          callback: ops.event[_p].callback
        };
        sb.sb_addEvent(el, ops.event[_p].type, ops.event[_p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
      }
    }
  }

  return el;
};

exports.addOps = addOps;

var listCreationDone = function listCreationDone(data) {
  this.emit({
    type: 'list-creation-done',
    data: data
  });
};

exports.listCreationDone = listCreationDone;