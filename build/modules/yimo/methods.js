"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToStore = exports.handleConnectToStore = exports.reducer = exports.dispatch = exports.connect = exports.emit = exports.listens = exports.init = void 0;

var init = function init() {
  console.log('Store has been initialised');
  this.listens();
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    //  'store-notify-listen': this.handleStoreNotifyListen.bind(this),
    'connect-to-store': this.handleConnectToStore.bind(this) //  'action-dispatch': this.handleActionDispatch.bind(this)

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

var connect = function connect(data) {
  var self = this;

  if (data.hasOwnProperty('component')) {
    if (data.hasOwnProperty('actions')) {
      if (data.hasOwnProperty('reducers')) {
        self.actions[data.component] = data.actions;
        self.reducers[data.component] = data.reducers;
        console.log('The current reducers and actions');
        console.log(self.actions);
        console.log(self.reducers);
      } else {
        console.log('Yimo requires component reducers for component state');
      }
    } else {
      console.log('Yimo requires component actions for component state');
    }
  } else {
    console.log('Yimo requires component reducers for component state');
  }
};

exports.connect = connect;

var dispatch = function dispatch(data) {
  var self = this;
};

exports.dispatch = dispatch;

var reducer = function reducer(action, payload) {
  var self = this;
};

exports.reducer = reducer;

var handleConnectToStore = function handleConnectToStore(data) {
  console.log('HANDLE ConnectToStore event has occured');
  console.log(data);
  this.connectToStore(data);
};

exports.handleConnectToStore = handleConnectToStore;

var connectToStore = function connectToStore(data) {
  console.log('HANDLE ConnectToStore event has occured');
  console.log(data);
  this.connect(data);
};

exports.connectToStore = connectToStore;