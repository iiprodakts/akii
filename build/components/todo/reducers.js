"use strict";

var types = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var reducer = function reducer(context, data) {
  var self = context;
  console.log('The reducer get runs, we are about to set the state');

  switch (data.type) {
    case 'TEST_TYPE':
      {
        console.log('THe data from the action');
        console.log(data);
        self.setState(data.component, data.payload);
      }
      break;

    default:
      {
        self.state = null;
      }
  }
};

var setRed = function setRed(context, data) {
  var self = context;
  console.log('The reducer Set runs, we are about to set the state');

  switch (data.type) {
    case 'SET_TYPE':
      {
        console.log('THe data from the action');
        console.log(data);
        self.setState(data.component, data.payload);
      }
      break;

    default:
      {
        self.state = null;
      }
  }
};

module.exports = [{
  type: types.TEST_TYPE,
  reducer: reducer
}, {
  type: types.SET_TYPE,
  reducer: setRed
}];