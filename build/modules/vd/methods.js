"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueids = exports.nodeRandomId = exports.createVdChildren = exports.addDom = exports.handleAddDom = exports.addVirtualDom = exports.handleAddVirtualDom = exports.createDomTree = exports.saveDOM = exports.saveVD = exports.textDiff = exports.propsDiff = exports.childDiff = exports.diff = exports.startDiffing = exports.checkDOM = exports.checkVD = exports.beginDomiks = exports.domTreeCreated = exports.handleDomTreeCreated = exports.handleCreateDomTree = exports.emit = exports.listens = exports.init = void 0;

var _this = void 0;

var init = function init() {
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+name

  sb.sb_notifyListen({
    'create-dom-tree': this.handleCreateDomTree.bind(this),
    'dom-tree-created': this.handleDomTreeCreated.bind(this)
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

var handleCreateDomTree = function handleCreateDomTree(data) {
  var sb = this.sb; //  console.log('The Virtual Dom')
  //  console.log(data)
  // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)

  this.beginDomiks(data);
};

exports.handleCreateDomTree = handleCreateDomTree;

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
  this.saveDOM(data);
};

exports.domTreeCreated = domTreeCreated;

var beginDomiks = function beginDomiks(data) {
  var sb = this.sb;
  console.log('The Virtual Dom Begin Domiks');
  console.log(data);
  this.checkVD(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)
};

exports.beginDomiks = beginDomiks;

var checkVD = function checkVD(data) {
  var sb = this.sb;
  var vod = this.virtualDom; // console.log('The Virtual Dom Testing console')
  // console.log(data)
  // console.log(sb.sb_jsToJson(this.virtualDom))
  // console.log('The length of vod')
  // console.log(this.virtualDom.length)

  if (vod.length > 0) {
    console.log('The virtual dom contains a vod');

    for (var c = 0; c < vod.length; c++) {
      if (vod[c].view === data.trunk.id) {
        for (var vdC = 0; vdC < vod[c].children.length; vdC++) {
          if (vod[c].children[vdC].name === data.name) {
            console.log('The old Virtual Dom real Dom');
            console.log('We have a this component, lets start diffing');
            console.log(sb.sb_jsToJson(vod));
            console.log('The VD of the new thing');
            console.log(sb.sb_jsToJson(data[Object.keys(data)[2]]));
            console.log(this.realDom[c].children[vdC]);
            this.startDiffing({
              oldVd: vod[c].children[vdC],
              oldVdDom: this.realDom[c].children[vdC],
              newVd: data
            }); // if(vod[c].children[vdC].vd === data[Object.keys(data)[2]]){
            //    console.log('The old vd is equal to the new Vd, references might be the reason')
            // }

            break;
          } else if (vdC === vod[c].children.length - 1) {
            console.log("Another child of the ".concat(data.trunk.id, " to be added: ").concat(data.name));
            vod[c].children.push({
              name: data.name,
              element: Object.keys(data)[2],
              vd: Object.assign({}, data[Object.keys(data)[2]])
            });
            var index = vod[c].children.length - 1; // this.createDomTree({vd:vd[c].children,trunk: data.trunk})

            this.createDomTree({
              vd: {
                view: vod[c].view,
                children: vod[c].children[index]
              },
              trunk: data.trunk
            });
            console.log('The structure of the vod now:');
            console.log(vod);
            console.log('vod with this');
            console.log(this.virtualDom);
            break;
          }
        }

        break;
      } else if (c === vd.length - 1) {
        vod.push({
          view: data.trunk.id,
          children: [{
            name: data.name,
            element: Object.keys(data)[2],
            vd: Object.assign({}, data[Object.keys(data)[2]])
          }]
        });

        var _index = vod.length - 1; // this.createDomTree({vd:vd[c].children,trunk: data.trunk})


        this.createDomTree({
          vd: {
            view: vod[_index].view,
            children: vod[_index].children[0]
          },
          trunk: data.trunk
        });
      }
    }
  } else {
    // console.log('The virtual dom contains no vd')
    // console.log('The virtaual dom object has no children at this point')
    // console.log(sb.sb_jsToJson(vd))
    // console.log(vd.length)
    vod.push({
      view: data.trunk.id,
      children: [{
        name: data.name,
        element: Object.keys(data)[2],
        vd: Object.assign({}, data[Object.keys(data)[2]])
      }]
    }); // console.log('The virtaual dom object has a child at this point')
    // console.log(sb.sb_jsToJson(vd))
    // console.log(vd.length)

    this.createDomTree({
      vd: {
        view: vod[0].view,
        children: vod[0].children[0]
      },
      trunk: data.trunk
    });
  }
};

exports.checkVD = checkVD;

var checkDOM = function checkDOM(data) {
  var sb = this.sb;
};

exports.checkDOM = checkDOM;

var startDiffing = function startDiffing(data) {
  this.diff(data);
};

exports.startDiffing = startDiffing;

var diff = function diff(data) {
  console.log('DIFF');
  console.log(data);
  var k = Object.keys(data.newVd)[2];
  var oldVd = data.oldVd;
  var newVd = data.newVd;

  if (oldVd.element === k) {
    this.childDiff(oldVd.vd.children, newVd[k].children, data.oldVdDom.dom.children);
  } else {// this.saveVD()
  }
};

exports.diff = diff;

var childDiff = function childDiff(oldChs, newChs, domChs) {
  var sb = this.sb; // console.log('New vd')
  // console.log(domChs)

  if (oldChs.length === newChs.length) {
    for (var c = 0; c < oldChs.length; c++) {
      if (oldChs[c].element === newChs[c].element) {
        var oPres = oldChs[c].props.presentational;
        var nPres = newChs[c].props.presentational;
        var oFunks = oldChs[c].props.functional;
        var nFunks = newChs[c].props.functional;

        if (oPres.set && nPres.set) {
          console.log('Presentation sets');

          if (oPres.hasOwnProperty('presents') && nPres.hasOwnProperty('presents')) {
            var oPresPsts = oPres.presents;
            var nPresPsts = nPres.presents;

            if (oPresPsts.hasOwnProperty('content') && nPresPsts.hasOwnProperty('content')) {
              console.log('content propter exists');

              if (oPresPsts.content !== nPresPsts.content) {
                console.log('INSIDE CONTENT BEING DIFFERENT');
                domChs[c].innerHTML = nPresPsts.content;
                oldChs[c].props.presentational.presents.content = nPresPsts.content;
              }
            }
          }
        }

        if (oFunks.set && nFunks.set) {
          console.log('The o and n  funks ');
          console.log(oFunks);
          console.log(nFunks);

          if (oFunks.meta.hasOwnProperty('emit') && nFunks.meta.hasOwnProperty('emit')) {
            if (oFunks.meta.emit.data instanceof Array && oFunks.meta.emit.data.length > 2) {
              console.log('The type of data in here is ');
              console.log(oFunks.meta.emit.data);
              console.log(nFunks.meta.emit.data);

              if (oFunks.meta.emit.data === nFunks.meta.emit.data) {
                console.log('The two arrays reference the same object in memory');

                for (var _p = 0; _p < oFunks.meta.emit.data.length; _p++) {
                  if (oFunks.meta.emit.data[_p] !== nFunks.meta.emit.data[_p]) {
                    console.log('THE LENGH OFUNKS AND NFUNKS IS DIFFERENT');
                    oFunks.meta.emit.data[_p] = nFunks.meta.emit.data[_p];
                    domChs[c].children[_p].innerHTML = nFunks.meta.emit.data[_p];
                  }
                }
              } else if (oFunks.meta.emit.data.length > nFunks.meta.emit.data.length) {
                console.log('The data is not the same');
                domChs[c].children[oFunks.meta.emit.data.length - 1].remove();
              } else if (oFunks.meta.emit.data.length < nFunks.meta.emit.data.length) {
                var el = sb.sb_CopyDeep(domChs[c].children[0]);
                sb.sb_insertInnert(el, nFunks.meta.emit.data[p]);
                sb.sb_addChild(domChs[c], el);
              }
            } else {}
          }
        }

        if (oldChs[c].hasOwnProperty('children') && newChs[c].hasOwnProperty('children')) {
          this.childDiff(oldChs[c].children, newChs[c].children, domChs[c].children);
        }
      }
    }
  }
};

exports.childDiff = childDiff;

var propsDiff = function propsDiff(data) {
  var sb = this.sb;
  console.log('The Virtual Dom');
  console.log(data);
  this.saveVD(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)
};

exports.propsDiff = propsDiff;

var textDiff = function textDiff(data) {
  var sb = this.sb;
  console.log('The Virtual Dom');
  console.log(data);
  this.saveVD(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)
};

exports.textDiff = textDiff;

var saveVD = function saveVD(data) {
  var sb = this.sb;
  console.log('The Virtual Dom To Save');
  console.log(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)
};

exports.saveVD = saveVD;

var saveDOM = function saveDOM(data) {
  var sb = this.sb;
  console.log('The Dom To Save');
  console.log(data);
  console.log('The real dom');
  console.log(this.realDom);

  if (this.realDom.length > 0) {
    for (var d = 0; d < this.realDom.length; d++) {
      if (this.realDom[d].view === data.domId.view) {
        this.realDom[d].children.push(data.domId.children[0]);
        break;
      } else if (d === this.realDom.length - 1) {
        this.realDom.push(data.domId);
      }
    }
  } else {
    this.realDom.push(data.domId);
  }

  this.emit({
    type: 'add-dom-component',
    data: data.trunk
  }); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})
  //  this.createDomTree(data)
};

exports.saveDOM = saveDOM;

var createDomTree = function createDomTree(data) {
  var sb = this.sb;
  console.log('The Current VirtualDom');
  console.log(data);
  this.emit({
    type: 'create-dom',
    data: data
  });
};

exports.createDomTree = createDomTree;

var handleAddVirtualDom = function handleAddVirtualDom(data) {
  var sb = this.sb;
  console.log('The Virtual Dom');
  console.log(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})

  this.addVirtualDom(data);
};

exports.handleAddVirtualDom = handleAddVirtualDom;

var addVirtualDom = function addVirtualDom(data) {
  var self = this; //this.nodeRandomId()
  // 
  //   this.emit({type:'add-dom-component',data:data.data})

  console.log('The data passed to the addVirtualDom');
  console.log(data); //   console.log(data.data.children[0].attributes[0].value)

  if (this.virtualDom.length > 0) {
    console.log('Nothing');
  } else {
    console.log('Trunk children');
    console.log(data.data.trunk.childNodes);
    var trunk = data.data.trunk;
    this.virtualDom.push({
      trunk: {
        id: data.id,
        child: {
          id: data.id,
          children: [{
            id: data.data.branch,
            name: trunk.childNodes[0].id,
            children: self.createVdChildren(trunk.childNodes[0])
          }]
        }
      }
    });
  }

  console.log('The virtual dom');
  console.log(this.virtualDom);
};

exports.addVirtualDom = addVirtualDom;

var handleAddDom = function handleAddDom(data) {
  var sb = this.sb;
  console.log('The Dom Data');
  console.log(data); // console.log(sb)
  // console.log(sb.view)
  // console.log('The Dom Child View')
  // console.log(data)
  // sb.sb_addChild(sb.view,data)
  // this.emit({type:'stop-preloader',data:''})

  this.addDomToVd(data);
};

exports.handleAddDom = handleAddDom;

var addDom = function addDom(data) {
  var self = this; //this.nodeRandomId()
  // 
  //   this.emit({type:'add-dom-component',data:data.data})

  console.log('The data passed to the addDomTovd');
  console.log(data); //   console.log(data.data.children[0].attributes[0].value)

  if (this.virtualDom.length > 0) {
    console.log('Nothing');
  } else {
    console.log('Trunk children');
    console.log(data.data.trunk.childNodes);
    var trunk = data.data.trunk;
    this.virtualDom.push({
      trunk: {
        id: data.id,
        child: {
          id: data.id,
          children: [{
            id: data.data.branch,
            name: trunk.childNodes[0].id,
            children: self.createVdChildren(trunk.childNodes[0])
          }]
        }
      }
    });
  }

  console.log('The virtual dom');
  console.log(this.virtualDom);
};

exports.addDom = addDom;

var createVdChildren = function createVdChildren(root, children) {
  var sb = this.sb;
  var descends = []; // Array.prototype.map.call(trunk.childNodes[0].childNodes,(c)=>{
  //    console.log('THE VALUE OF IN TRUNK CHILDREN')
  //    console.log(c)
  //    if(Object.keys(c.childNodes).length > 0){
  //    }
  //    // return {
  //    // }
  // })

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

exports.createVdChildren = createVdChildren;

var nodeRandomId = function nodeRandomId(node) {
  console.log('Random unique Ids');
  console.log("The random list number");
  var sb = _this.sb;
  var randomid = "node-".concat(Math.floor(0 + (100000 - 0) * Math.random()).toString(), "-k");
  sb.sb_addProperty(node, 'data-id', randomid);
  return node;
};

exports.nodeRandomId = nodeRandomId;

var uniqueids = function uniqueids(node) {};

exports.uniqueids = uniqueids;