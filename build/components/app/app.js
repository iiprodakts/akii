"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

var _actions = _interopRequireDefault(require("./actions"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _header = _interopRequireDefault(require("../header/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Home from './home/home'
// import Footer from './footer/footer'
var App = function App(sandbox) {
  _classCallCheck(this, App);

  this.sb = sandbox;
  this.actions = _actions.default;
  this.reducer = _reducer.default;
  this.trunk = null;
  this.children = [new _header.default(this) // new Home(this),
  // new Footer(this)
  ]; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleDomTreeCreated = methods.handleDomTreeCreated;
  this.domTreeCreated = methods.domTreeCreated;
  this.messenger = methods.messenger;
  this.evs = methods.evs;
  this.functions = methods.functions;
  this.build = methods.build;
  this.createTrunk = methods.createTrunk;
  this.render = methods.render;
};

var _default = App;
exports.default = _default;