"use strict";

var types = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setData = function setData(data) {
  // console.log('I get a call')
  var name = 'action';
  var self = data;
  self.reducer({
    type: types.TEST_TYPE,
    component: 'todo',
    payload: {
      name: name,
      surname: 'Mashele',
      nickname: 'Khonyonyo',
      status: 'single',
      future: 'Very successful, multimillionaire by the 30th birthday'
    }
  });
};

var getData = function getData(data) {
  // console.log('I get a call')
  var name = 'action';
  var self = data;
  self.reducer({
    type: types.SET_TYPE,
    component: 'todo',
    payload: {
      test1: 'test',
      way: 'Way',
      blah: 'Blah',
      walah: 12,
      obj: {
        state: 'broke',
        level: 'higher'
      },
      skills: ['psychologist', 'programmer', 'scientist']
    }
  });
};

var addItem = function addItem(store, data) {
  // const self = data
  store.reducer({
    type: types.ADD_ITEM,
    component: 'todo',
    payload: _objectSpread({}, data, {
      task: 'add'
    })
  });
};

var removeItem = function removeItem(data) {
  var self = data;
  self.reducer({
    type: types.REMOVE_ITEM,
    component: 'todo',
    payload: {
      items: ['psychologist', 'programmer', 'scientist']
    }
  });
};

module.exports = [{
  type: types.TEST_TYPE,
  action: getData
}, {
  type: types.SET_TYPE,
  action: setData
}, {
  type: types.ADD_ITEM,
  action: addItem
}, {
  type: types.REMOVE_ITEM,
  action: removeItem
}];