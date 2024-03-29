"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import notifier from './notifier'
var Store = function Store(sandbox) {
  _classCallCheck(this, Store);

  this.sb = sandbox;
  this.state = {};
  this.actions = {};
  this.reducers = {};
  this.supub = {}; // console.log('THE STORE')
  // console.log(this.supub)

  console.log('THE STORE STATE PROPERTY'); //  console.log(this.sb.sb_jsToJson(this.state))

  console.log(this.state); // // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleConnectToStore = methods.handleConnectToStore;
  this.connectToStore = methods.connectToStore;
  this.handleSubscribeToStore = methods.handleSubscribeToStore;
  this.handleActionDispatch = methods.handleActionDispatch;
  this.actionDispatch = methods.actionDispatch;
  this.subscribeToStore = methods.subscribeToStore;
  this.connect = methods.connect;
  this.dispatch = methods.dispatch;
  this.reducer = methods.reducer;
  this.setState = methods.setState;
  this.supubListen = methods.supubListen, this.supubEmit = methods.supubEmit;
  this.initState = methods.initState;
  this.unload = methods.unload;
  this.rem = methods.rem; //  console.log('The state property at the beginning')
  //  console.log(this.state)
  //  console.log(this.supub)
};

var _default = Store;
exports.default = _default;