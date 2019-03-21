"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionDispatch = exports.handleActionDispatch = exports.subscribeToStore = exports.handleSubscribeToStore = exports.connectToStore = exports.handleConnectToStore = exports.setState = exports.reducer = exports.dispatch = exports.connect = exports.emit = exports.listens = exports.init = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Store has been initialised');
  this.listens();
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
    'subscribe-to-store': this.handleSubscribeToStore.bind(this),
    'connect-to-store': this.handleConnectToStore.bind(this),
    'action-dispatch': this.handleActionDispatch.bind(this) //  'action-dispatch': this.handleActionDispatch.bind(this)

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
        self.actions[data.component] = {};
        self.reducers[data.component] = {};

        var _loop = function _loop(d) {
          if (d !== 'component') {
            console.log(d);
            console.log(data[d]);
            console.log('Actions type');
            console.log(_typeof(data[d]));
            console.log(data[d] instanceof Array);
            data[d].forEach(function (i) {
              self[d][data.component] = Object.assign(self[d][data.component], i);
            });
          }
        };

        for (var d in data) {
          _loop(d);
        }

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

  for (var action in self.actions) {
    if (self.actions.hasOwnProperty(data.component)) {
      console.log('THe dispatch contains component');

      for (var ac in self.actions[data.component]) {
        console.log('The ');

        if (self.actions[data.component].hasOwnProperty('type') && self.actions[data.component]['type'] === data.type) {
          console.log('The thing gets here');
          self.actions[data.component]['action'](self);
          break;
        }
      }
    }
  }
};

exports.dispatch = dispatch;

var reducer = function reducer(data) {
  var self = this;

  for (var _reducer in self.reducers) {
    if (self.reducers.hasOwnProperty(data.component)) {
      console.log('THe dispatch contains component');

      for (var re in self.reducers[data.component]) {
        console.log('The reducer runs ');

        if (self.reducers[data.component].hasOwnProperty('type') && self.reducers[data.component]['type'] === data.type) {
          console.log('The thing gets here IN THE REDUCER');
          console.log('THe current component reducer');
          console.log(self.reducers[data.component]);
          self.reducers[data.component]['reducer'](self, {
            component: data.component,
            payload: data.payload,
            type: data.type
          });
          break;
        }
      }
    }
  }
};

exports.reducer = reducer;

var setState = function setState(component, data) {
  console.log('THE SET STATE FUNCTION HAS BEEN INVOKED');
  var self = this;

  if (Object.keys(self.state).length > 0) {
    var keys = Object.keys(self.state);
    console.log('The setState Runs');
    console.log(keys);

    for (var k = 0; k < keys.length; k++) {
      console.log('THE SETSTATE FOR LOOP');

      if (self.state.hasOwnProperty(component)) {
        console.log('THe component state exist');
        self.state[component] = Object.assign(self.state[component], data);
        self.evts.emit('stateChange', component);
        break;
      } else if (k === keys.length - 1) {
        console.log('TEH COMPONENT STATE DOES NOT EXIST,SET IT');
        self.state[component] = Object.assign(self.state[component], data);
        self.evts.emit('stateChange', component);
        break;
      }
    }
  } else {
    console.log('TEH COMPONENT STATE DOES NOT EXIST,SET IT');
    self.state[component] = data;
    self.evts.emit('stateChange', component);
  }
};

exports.setState = setState;

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

var handleSubscribeToStore = function handleSubscribeToStore(data) {
  console.log('HANDLE Subscribe to store event has occured');
  this.subscribeToStore(data);
};

exports.handleSubscribeToStore = handleSubscribeToStore;

var subscribeToStore = function subscribeToStore(data) {
  var self = this;
  console.log('Subscribe to store data');
  console.log(data);
  console.log(self.state);
  console.log(self.evts);
  self.evts.listen(data.event, data);
};

exports.subscribeToStore = subscribeToStore;

var handleActionDispatch = function handleActionDispatch(data) {
  console.log('HANDLE Subscribe to store event has occured');
  this.actionDispatch(data);
};

exports.handleActionDispatch = handleActionDispatch;

var actionDispatch = function actionDispatch(data) {
  var self = this;
  console.log('Subscribe to store data');
  console.log(data);
  self.dispatch(data);
};

exports.actionDispatch = actionDispatch;