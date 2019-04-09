"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.connectToStore = exports.handleConnectToStore = exports.reducer = exports.dispatch = exports.connect = exports.emit = exports.listens = exports.init = void 0;
=======
exports.rem = exports.unload = exports.initState = exports.supubEmit = exports.supubListen = exports.actionDispatch = exports.handleActionDispatch = exports.subscribeToStore = exports.handleSubscribeToStore = exports.connectToStore = exports.handleConnectToStore = exports.setState = exports.reducer = exports.dispatch = exports.connect = exports.emit = exports.listens = exports.init = void 0;
>>>>>>> development

var init = function init() {
  console.log('Store has been initialised');
  this.listens();
<<<<<<< HEAD
=======
  this.unload();
>>>>>>> development
};

exports.init = init;

var listens = function listens() {
  var sb = this.sb;
  sb.sb_notifyListen({
<<<<<<< HEAD
    //  'store-notify-listen': this.handleStoreNotifyListen.bind(this),
    'connect-to-store': this.handleConnectToStore.bind(this) //  'action-dispatch': this.handleActionDispatch.bind(this)
=======
    'subscribe-to-store': this.handleSubscribeToStore.bind(this),
    'connect-to-store': this.handleConnectToStore.bind(this),
    'action-dispatch': this.handleActionDispatch.bind(this) //  'action-dispatch': this.handleActionDispatch.bind(this)
>>>>>>> development

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
<<<<<<< HEAD
      if (data.hasOwnProperty('reducers')) {
        self.actions[data.component] = data.actions;
        self.reducers[data.component] = data.reducers;
        console.log('The current reducers and actions');
        console.log(self.actions);
        console.log(self.reducers);
=======
      if (data.hasOwnProperty('reducer')) {
        self.actions[data.component] = [];
        self.reducers[data.component] = {};

        var _loop = function _loop(d) {
          // console.log('Connect, self.actions')
          // console.log(self.actions)
          if (d !== 'component') {
            // console.log('The value of d')
            // console.log(d)
            // console.log(data)
            // 	// console.log(d)
            // 	 console.log(data[d])
            // console.log('Actions type')
            // console.log(typeof data[d])
            // console.log(data[d] instanceof Array)
            if (d === 'reducer') {
              // console.log('The value of d')
              // console.log(d)
              // console.log(data)
              self["".concat(d, "s")][data.component][d] = data.reducer;
            } else {
              data[d].forEach(function (i) {
                // console.log('The value of i in connect for each')
                // console.log(i)
                self[d][data.component].push(i); //  console.log('THe component actions after')
                //  console.log(self[d][data.component])
              });
            }
          }
        };

        for (var d in data) {
          _loop(d);
        } // console.log('The current reducers and actions')
        // console.log(self.actions)
        // console.log(self.reducers)

>>>>>>> development
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
<<<<<<< HEAD
  var self = this;
=======
  var self = this; //  console.log('self.actions')
  //  console.log(self.actions)
  //  console.log(data)

  for (var action in self.actions) {
    //  console.log('THe action prop')
    //  console.log(action)
    //  console.log(data)
    // console.log('counter')
    // console.log(counter)
    if (self.actions.hasOwnProperty(data.component)) {
      console.log('THe dispatch contains component');

      for (var ac = 0; ac < self.actions[data.component].length; ac++) {
        // console.log('The ')
        // console.log(ac)
        // console.log(data.type)
        if (self.actions[data.component][ac].hasOwnProperty('type') && self.actions[data.component][ac]['type'] === data.type) {
          // console.log('The thing gets here')
          // console.log(self.actions[data.component][ac])
          // console.log(self.actions[data.component][ac]['type'])
          self.actions[data.component][ac]['action'](self, data.data);
          break;
        }
      }

      break;
    }
  }
>>>>>>> development
};

exports.dispatch = dispatch;

<<<<<<< HEAD
var reducer = function reducer(action, payload) {
  var self = this;
=======
var reducer = function reducer(data) {
  var self = this;

  for (var _reducer in self.reducers) {
    if (self.reducers.hasOwnProperty(data.component)) {
      // console.log('The reducer runs ')
      if (self.reducers[data.component].hasOwnProperty('reducer')) {
        // console.log('The thing gets here IN THE REDUCER')
        // console.log('THe current component reducer')
        // console.log(self.reducers[data.component])
        self.reducers[data.component]['reducer'](self, {
          component: data.component,
          payload: data.payload,
          type: data.type
        });
        break;
      }
    }
  }
>>>>>>> development
};

exports.reducer = reducer;

<<<<<<< HEAD
var handleConnectToStore = function handleConnectToStore(data) {
  console.log('HANDLE ConnectToStore event has occured');
  console.log(data);
=======
var setState = function setState(component, data) {
  // console.log('THE SET STATE FUNCTION HAS BEEN INVOKED')
  // console.log('The COMPONENT NAME')
  // console.log(component)
  var self = this;

  if (Object.keys(self.state).length > 0) {
    var keys = Object.keys(self.state); // console.log('The length of keys')
    // console.log(keys.length)
    // console.log('The setState Runs')
    // console.log(keys)

    for (var k = 0; k < keys.length; k++) {
      console.log('THE SETSTATE FOR LOOP');

      if (self.state.hasOwnProperty(component)) {
        console.log('THe component state exist');
        console.log(data);
        self.state[component] = Object.assign(self.state[component], data);
        console.log('The updated component state data');
        console.log(self.state[component]);
        self.supubEmit('STATE-CHANGE', component);
        break;
      } else if (k === keys.length - 1) {
        console.log('TEH COMPONENT STATE DOES NOT EXIST, State containst data SET IT');
        self.state[component] = data;
        console.log(data);
        console.log(self.state[component]);
        self.supubEmit('STATE-CHANGE', component);
        break;
      }
    }
  } else {
    console.log('TEH COMPONENT STATE DOES NOT EXIST,state is empty SET IT');
    self.state[component] = data;
    console.log(self.state[component]);
    self.supubEmit('STATE-CHANGE', component);
  }
};

exports.setState = setState;

var handleConnectToStore = function handleConnectToStore(data) {
  // console.log('HANDLE ConnectToStore event has occured')
  // console.log(data)
>>>>>>> development
  this.connectToStore(data);
};

exports.handleConnectToStore = handleConnectToStore;

var connectToStore = function connectToStore(data) {
<<<<<<< HEAD
  console.log('HANDLE ConnectToStore event has occured');
  console.log(data);
  this.connect(data);
};

exports.connectToStore = connectToStore;
=======
  // console.log('HANDLE ConnectToStore event has occured')
  // console.log(data)
  this.connect(data);
};

exports.connectToStore = connectToStore;

var handleSubscribeToStore = function handleSubscribeToStore(data) {
  // console.log('HANDLE Subscribe to store event has occured')
  this.subscribeToStore(data);
};

exports.handleSubscribeToStore = handleSubscribeToStore;

var subscribeToStore = function subscribeToStore(data) {
  var self = this; // console.log('Subscribe to store data')
  // console.log(data)
  // console.log(self.state)
  // console.log(self.supub)

  self.supubListen(data.event, data);
};

exports.subscribeToStore = subscribeToStore;

var handleActionDispatch = function handleActionDispatch(data) {
  // console.log('HANDLE Subscribe to store event has occured')
  this.actionDispatch(data);
};

exports.handleActionDispatch = handleActionDispatch;

var actionDispatch = function actionDispatch(data) {
  var self = this;
  console.log('Action Dispatch data');
  console.log(data);
  self.dispatch(data);
};

exports.actionDispatch = actionDispatch;

var supubListen = function supubListen(evt, data) {
  var self = this; // console.log('THE NOTIFIER LISTEN')
  // console.log(this)

  console.log("Event: ".concat(evt, " has been subscribed, and the data is: ").concat(data));
  console.log(data);
  console.log(self.supub);
  console.log(data.component);
  var comp = {
    callback: data.callback,
    type: evt
  };
  self.supub[data.component] = comp;

  if (data.component === 'todo') {
    self.setState(data.component, data.initState);
  }
};

exports.supubListen = supubListen;

var supubEmit = function supubEmit(evt, component) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var self = this; //  console.log('THE NOTIFIEF EMIT')
  //  console.log('Hi, I am the emit on state change')

  var keys = Object.keys(self.supub);

  for (var k = 0; k < keys.length; k++) {
    if (self.supub.hasOwnProperty(component)) {
      self.supub[component]['callback'](self.state);
      console.log(self.state);
      break;
    }
  }
};

exports.supubEmit = supubEmit;

var initState = function initState(data) {
  var self = this;
  self.supub[data.component]['callback'](data.state);
};

exports.initState = initState;

var unload = function unload() {
  var sb = this.sb;
  sb.sb_addEvent(window, 'unload', this.rem.bind(this));
};

exports.unload = unload;

var rem = function rem(e) {
  console.log('The state is emptied');
  this.state = null;
};

exports.rem = rem;
>>>>>>> development
