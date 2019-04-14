"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import * as types from './types'
var _default = function _default(context, data) {
  var self = context;
  console.log('The reducer runs, we are about to set the state');

  switch (data.type) {
    case 'TEST_TYPE':
      {
        self.setState(data.component, data.payload);
      }
      break;

    default:
      {
        self.state = state;
      }
  }
}; // module.exports = [
//         {
//             type: types.TEST_TYPE,
//             reducer: reducer
//         }
// ]


exports.default = _default;