"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function List(sandbox) {
  _classCallCheck(this, List);

  this.sb = sandbox; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleCreateList = methods.handleCreateList;
  this.createList = methods.createList;
  this.create = methods.create;
  this.createChildren = methods.createChildren;
  this.addChildren = methods.addChildren;
  this.addProps = methods.addProps;
  this.addOps = methods.addOps;
  this.listCreationDome = methods.listCreationDone;
};

var _default = List;
exports.default = _default;