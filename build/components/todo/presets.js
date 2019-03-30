"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItem = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateItem = function updateItem(store, data) {
  console.log('The store');
  console.log(store);
  console.log(data);
  var target = store.state[data.component][data.payload.id]['items'];

  if (data.payload.task.hasOwnProperty('remove')) {
    target.splice(data.payload.index, data.payload.len);
    store.setState(data.component, _defineProperty({}, data.payload.id, target));
  } else {
    target.push(data.payload.payload);
    store.setState(data.component, _defineProperty({}, data.payload.id, {
      items: target
    }));
  }
};

exports.updateItem = updateItem;