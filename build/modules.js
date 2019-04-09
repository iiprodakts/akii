"use strict";

var _index = _interopRequireDefault(require("./modules/yimo/index"));

var _index2 = _interopRequireDefault(require("./modules/accordion/index"));

var _index3 = _interopRequireDefault(require("./modules/aka/index"));

var _index4 = _interopRequireDefault(require("./modules/list/index"));

var _index5 = _interopRequireDefault(require("./modules/dom/index"));

<<<<<<< HEAD
var _index6 = _interopRequireDefault(require("./modules/form/index"));
=======
var _index6 = _interopRequireDefault(require("./modules/vd/index"));

var _index7 = _interopRequireDefault(require("./modules/form/index"));
>>>>>>> development

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Yimo: _index.default,
<<<<<<< HEAD
=======
  Vd: _index6.default,
>>>>>>> development
  Accordion: _index2.default,
  Aka: _index3.default,
  List: _index4.default,
  Dom: _index5.default,
<<<<<<< HEAD
  Form: _index6.default
=======
  Form: _index7.default
>>>>>>> development
};