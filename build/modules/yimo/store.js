"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

var _notifier = _interopRequireDefault(require("./notifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function Store(sandbox) {
  _classCallCheck(this, Store);

  this.sb = sandbox;
  this.state = {};
  this.events = {};
  this.actions = {};
  this.reducers = {};
  this.events = _notifier.default; // // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleConnectToStore = methods.handleConnectToStore;
  this.connectToStore = methods.connectToStore;
  this.connect = methods.connect;
  this.dispatch = methods.dispatch;
  this.reduce = methods.reduce; // this.createBar = methods.createBar
  // this.createTitle = methods.createTitle
  // this.createController = methods.createController
  // this.handleCreateAccordion = methods.handleCreateAccordion
  // this.createAccordion = methods.createAccordion
  // this.expand = methods.expand
};

var _default = Store;
exports.default = _default;