"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vd = function Vd(sandbox) {
  _classCallCheck(this, Vd);

  this.sb = sandbox;
  this.virtualDom = [];
  this.realDom = []; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleCreateDomTree = methods.handleCreateDomTree;
  this.handleDomTreeCreated = methods.handleDomTreeCreated;
  this.domTreeCreated = methods.domTreeCreated;
  this.handleAddVirtualDom = methods.addVirtualDom;
  this.handleAddDom = methods.handleAddDom;
  this.randomNodeId = methods.randomNodeId;
  this.addVirtualDom = methods.addVirtualDom;
  this.createDomTree = methods.createDomTree;
  this.beginDomiks = methods.beginDomiks;
  this.checkVD = methods.checkVD;
  this.saveDOM = methods.saveDOM;
  this.addDom = methods.addDom;
  this.startDiffing = methods.startDiffing;
  this.diff = methods.diff;
  this.childDiff = methods.childDiff; // this.createVdChidren = methods.createVdChildren
  // this.handleComponentRender = methods.handleComponentRender
};

var _default = Vd;
exports.default = _default;