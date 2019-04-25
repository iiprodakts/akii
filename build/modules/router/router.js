"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var methods = _interopRequireWildcard(require("./methods"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router(sandbox) {
  _classCallCheck(this, Router);

  this.sb = sandbox;
  this.routes = [];
  this.links = []; // methods

  this.init = methods.init;
  this.listens = methods.listens;
  this.emit = methods.emit;
  this.handleCreateRoutes = methods.handleCreateRoutes;
  this.createRoutes = methods.createRoutes;
  this.handleRouterLink = methods.handleRouterLink;
  this.routerLink = methods.routerLink;
  this.handleAddressChanged = methods.handleAddressChanged;
  this.addressChanged = methods.addressChanged;
  this.handleLink = methods.handleLink;
  this.matchAddress = methods.matchAddress;
  this.handleRouteComponentSet = methods.handleRouteComponentSet;
  this.routeComponentSet = methods.routeComponentSet;
};

var _default = Router;
exports.default = _default;