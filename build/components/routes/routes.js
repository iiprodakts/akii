"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

var _routescontent = _interopRequireDefault(require("./routescontent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'
var Routes = function Routes(sandbox) {
  _classCallCheck(this, Routes);

  this.sb = sandbox;
  this.routes = _routescontent.default; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.start = methods.start;
  this.emit = methods.emit;
  this.handleMergeComponent = methods.handleMergeComponent;
  this.mergeComponent = methods.mergeComponent;
};

var _default = Routes;
exports.default = _default;