"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'
var Master = function Master(sandbox) {
  _classCallCheck(this, Master);

  this.sb = sandbox;
  this.mergeComponents = [];
  this.components = []; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.start = methods.start;
  this.emit = methods.emit;
  this.handleComponentMerged = methods.handleComponentMerged;
  this.componentMerged = methods.componentMerged;
};

var _default = Master;
exports.default = _default;