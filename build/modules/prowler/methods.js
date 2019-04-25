"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressChanged = exports.handlePopState = exports.startProwl = exports.prowlBrowser = exports.handleProwlBrowser = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  console.log('Module: Prowler , has been initialised');
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'prowl-browser': this.handleProwlBrowser.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleProwlBrowser = function handleProwlBrowser(data) {
  // var sb = this.sb 
  console.log('The Prowler handle is invoked');
  this.prowlBrowser(data);
};

exports.handleProwlBrowser = handleProwlBrowser;

var prowlBrowser = function prowlBrowser(data) {
  this.startProwl();
};

exports.prowlBrowser = prowlBrowser;

var startProwl = function startProwl(data) {
  var sb = this.sb;
  var self = this;
  console.log('THE HISTORY OBJECT');
  console.log(window.history);
  console.log(window.history.state);
  sb.sb_addEvent(window, 'popstate', self.handlePopState.bind(self));
};

exports.startProwl = startProwl;

var handlePopState = function handlePopState(e) {
  console.log('The postate event has occured');
  console.log('The COntent of the url location');
  console.log(window.location);
  console.log(window.location.href);
  console.log(history.state);
  this.addressChanged({
    url: window.location.href
  }); //  window.history.pushState({},'','/about')
};

exports.handlePopState = handlePopState;

var addressChanged = function addressChanged(data) {
  this.emit({
    type: 'address-changed',
    data: data
  });
};

exports.addressChanged = addressChanged;