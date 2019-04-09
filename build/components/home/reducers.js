"use strict";

<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = void 0;

=======
>>>>>>> development
var types = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

<<<<<<< HEAD
var home = function home() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
};

exports.home = home;
=======
var reducer = function reducer(context, data) {
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
};

module.exports = [{
  type: types.TEST_TYPE,
  reducer: reducer
}];
>>>>>>> development
