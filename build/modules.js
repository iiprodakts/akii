"use strict";

var _index = _interopRequireDefault(require("./modules/accordion/index"));

var _index2 = _interopRequireDefault(require("./modules/aka/index"));

var _index3 = _interopRequireDefault(require("./modules/list/index"));

var _index4 = _interopRequireDefault(require("./modules/dom/index"));

var _index5 = _interopRequireDefault(require("./modules/form/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Accordion: _index.default,
  Aka: _index2.default,
  List: _index3.default,
  Dom: _index4.default,
  Form: _index5.default
};