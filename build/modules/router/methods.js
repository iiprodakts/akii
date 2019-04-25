"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLink = exports.matchAddress = exports.addressChanged = exports.handleAddressChanged = exports.routerLink = exports.handleRouterLink = exports.routeComponentSet = exports.handleRouteComponentSet = exports.createRoutes = exports.handleCreateRoutes = exports.emit = exports.listens = exports.init = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Module: Router, has been initialised');
  this.listens();
  this.emit({
    type: 'prowl-browser',
    data: ''
  });
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'create-routes': this.handleCreateRoutes.bind(this),
    'route-component-set': this.handleRouteComponentSet.bind(this),
    'router-link': this.handleRouterLink.bind(this),
    'address-changed': this.handleAddressChanged.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  console.log('The value of data in emit');
  console.log(eNotifs);
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleCreateRoutes = function handleCreateRoutes(data) {
  // var sb = this.sb 
  this.createRoutes(data);
};

exports.handleCreateRoutes = handleCreateRoutes;

var createRoutes = function createRoutes(data) {
  console.log('THE ROUTES DATA');
  console.log(data);
  var self = this; //  this.routes = data.routes

  data.hasOwnProperty('routes') ? data.routes.forEach(function (ri, i) {
    self.emit({
      type: 'route-component',
      data: ri
    });
  }) : console.log('THE ROUTES ARE NOT DEFINED');
};

exports.createRoutes = createRoutes;

var handleRouteComponentSet = function handleRouteComponentSet(data) {
  // var sb = this.sb 
  this.routeComponentSet(data);
};

exports.handleRouteComponentSet = handleRouteComponentSet;

var routeComponentSet = function routeComponentSet(data) {
  console.log('THE ROUTES DATA');
  console.log(data);
  var self = this; //  this.routes = data.routes

  console.log('Typeof data.component');
  console.log(_typeof(data.component));
  data.hasOwnProperty('component') && _typeof(data.component) === 'object' ? self.routes.push(data) : console.log('THE ROUTES ARE NOT DEFINED');
  console.log('THE VALUE OF THE THIS.ROUTES');
  console.log(self.routes);
};

exports.routeComponentSet = routeComponentSet;

var handleRouterLink = function handleRouterLink(data) {
  // var sb = this.sb 
  console.log('THE ROUTER LINK HAS BEEN EMITTED');
  console.log(data);
  this.routerLink(data);
};

exports.handleRouterLink = handleRouterLink;

var routerLink = function routerLink(data) {
  console.log('THE ROUTER LINK DATA');
  console.log(data);
  var self = this;
  var sb = this.sb;
  data.hasOwnProperty('parent') ? sb.sb_addEvent(data.parent, 'click', self.handleLink.bind(self, data.data.to)) : console.log('The parent does not exist here');
};

exports.routerLink = routerLink;

var handleAddressChanged = function handleAddressChanged(data) {
  // var sb = this.sb 
  console.log('The address-changed has occured');
  this.addressChanged(data);
};

exports.handleAddressChanged = handleAddressChanged;

var addressChanged = function addressChanged(data) {
  this.matchAddress(data);
};

exports.addressChanged = addressChanged;

var matchAddress = function matchAddress(data) {
  console.log('THE VALUE OF ROUTES');
  console.log(this.routes);
  var url = data.url;
  var regex = /^\/?(\w+)\/(\w+)/;
  var routes = this.routes;

  for (var r = 0; r < routes.length; r++) {
    console.log('LOOPING THROUGH ROUTES');
    console.log(routes);
    console.log(routes[r]);
    var match = url.match(new RegExp(routes[r].path));

    if (match) {
      console.log('THE MATCHED ENDPOINT');
      console.log(match);
      routes[r].component.start();
      break;
    }
  } // console.log('THE ADDRESS HAS CHANGED, HANDLE ROUTING AND COMPONENTS')
  // console.log(data)

};

exports.matchAddress = matchAddress;

var handleLink = function handleLink(entry, e) {
  console.log('The linking event has occured');
  var sb = this.sb;
  sb.sb_preventNormal(e);
  window.history.pushState({}, '', entry);
  this.emit({
    type: 'address-changed',
    data: {
      url: window.location.href
    }
  });
};

exports.handleLink = handleLink;