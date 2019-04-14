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
  var sb = this.sb; // console.log('AKA LISTENS TO THE CREATE DOM TREE EVENT')

  sb.sb_notifyListen({
    'create-dom': this.handleCreateDomTree.bind(this)
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
  var sb = this.sb; // console.log('The Create Dom TREE EVENT IS CAUGHT')

  this.createDomTree(data);
};

exports.handleCreateDomTree = handleCreateDomTree;

var createDomTree = function createDomTree(data) {
  //   var dom = null
  // console.log('Data custom parent')
  // console.log(data)
  if (!data.hasOwnProperty('trunk') && data.hasOwnProperty('vd')) {
    throw new Error('');
  } else {
    var sb = this.sb;
    var trunk = data.trunk;
    var vd = data.vd.children;
    var rootName = vd.element;
    var root = this.create(rootName, vd.vd.props.presentational, vd.vd.props.functional);
    var children = this.createChildren(root, vd.vd.children);
    root = this.addChildren(root, children);
    sb.sb_addChild(trunk, root);
    this.domTreeCreated({
      trunk: trunk,
      domId: {
        view: data.vd.view,
        children: [{
          name: vd.name,
          dom: root
        }]
      }
    });
  } // console.log('The vd ')
  // console.log(vd)
  // var branch = data[rootName].name
  // var custom = `data-${trunk.id.toLowerCase()}`
  // var dataChildCustom = `${dataParentCustom}-${branch.toLowerCase()}`
  // console.log('Data custom parent')
  // console.log(`${dataParentCustom}`)
  // console.log('Data branch thing')
  // console.log(`${dataChildCustom}`)
  // console.log(branch)
  //   console.log(rootName)
  //   var root = this.addChildren(root,childr)

};

exports.createDomTree = createDomTree;

var create = function create(name, props, ops) {
  // console.log('Create')
  // console.log(props)
  var sb = this.sb;
  var el = this.addProps(this.addOps(sb.sb_createElement(name), ops), props); //  var el = this.addProps(el,props.presentational)

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
  var sb = this.sb;

  for (var c = 0; c < children.length; ++c) {
    sb.sb_addChild(parent, children[c]);
  }

  return parent;
};

exports.addChildren = addChildren;

var addProps = function addProps(el, props) {
  var sb = this.sb; // console.log('ADD PROPS')
  // console.log(props)
  // console.log(el)

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
    for (var p in ops.meta) {
      if (p === 'emit') {
        // console.log('The data of emit property')
        // console.log(ops.meta[p])
        if (ops.meta[p].hasOwnProperty('presents') && ops.meta[p].hasOwnProperty('children')) {
          console.log('The style string');
          var presents = ops.meta[p].presents;
          var children = ops.meta[p].children;
          console.log(presents);
          console.log(children);
          this.emit({
            type: ops.meta[p].type,
            data: {
              parent: el,
              data: ops.meta[p].data.data,
              presents: presents,
              children: children
            }
          });
        } else if (ops.meta[p].hasOwnProperty('presents')) {
          console.log('The style string');
          var _presents = ops.meta[p].presents;
          console.log(_presents);
          this.emit({
            type: ops.meta[p].type,
            data: {
              parent: el,
              data: ops.meta[p].data.data,
              presents: _presents
            }
          });
        } else if (ops.meta[p].hasOwnProperty('children')) {
          console.log('The children string');
          var _children = ops.meta[p].children;
          console.log(_children);
          this.emit({
            type: ops.meta[p].type,
            data: {
              parent: el,
              data: ops.meta[p].data.data,
              children: _children
            }
          });
        } else {
          this.emit({
            type: ops.meta[p].type,
            data: {
              parent: el,
              data: ops.meta[p].data.data
            }
          });
        }
      } else if (p === 'event') {
        for (var _p in ops.event) {
          //    console.log('The data of event property')
          //    console.log(ops.event[p])
          sb.sb_addEvent(el, ops.event[_p].type, ops.event[_p].callback); // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
        }
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