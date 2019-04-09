"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

<<<<<<< HEAD
var actions = _interopRequireWildcard(require("./actions"));

var reducers = _interopRequireWildcard(require("./reducers"));
=======
var _actions = _interopRequireDefault(require("./actions"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
>>>>>>> development

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function Home(sandbox) {
  _classCallCheck(this, Home);

  this.sb = sandbox;
<<<<<<< HEAD
  this.actions = actions;
  this.reducers = reducers; // methods
=======
  this.actions = _actions.default;
  this.reducer = _reducer.default;
  console.log('Home ACTIONS');
  console.log(_actions.default);
  console.log(this.actions); // methods
>>>>>>> development

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

var _default = Home;
exports.default = _default;