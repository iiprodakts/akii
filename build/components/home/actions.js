"use strict";

<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testAction = void 0;

=======
>>>>>>> development
var types = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

<<<<<<< HEAD
var testAction = function testAction() {
  var name = 'action';
};

exports.testAction = testAction;
=======
var getData = function getData(data) {
  // console.log('I get a call')
  var name = 'action';
  var self = data;
  self.reducer({
    type: types.TEST_TYPE,
    component: 'home',
    payload: {
      name: name,
      surname: 'Mashele',
      nickname: 'Khonyonyo'
    }
  });
};

module.exports = [{
  type: types.TEST_TYPE,
  action: getData
}];
>>>>>>> development
