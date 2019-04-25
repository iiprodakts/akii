"use strict";

var _index = _interopRequireDefault(require("./components/todo/index"));

var _index2 = _interopRequireDefault(require("./components/header/index"));

var _index3 = _interopRequireDefault(require("./components/about/index"));

var _index4 = _interopRequireDefault(require("./components/footer/index"));

var _index5 = _interopRequireDefault(require("./components/master/index"));

var _index6 = _interopRequireDefault(require("./components/routes/index"));

var _index7 = _interopRequireDefault(require("./components/contact/index"));

var _index8 = _interopRequireDefault(require("./components/portfolio/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Home from './components/home/index'
// import App from './components/app/index'
module.exports = {
  Contact: _index7.default,
  Portfolio: _index8.default,
  Header: _index2.default,
  About: _index3.default,
  Todo: _index.default,
  Footer: _index4.default,
  Routes: _index6.default,
  Master: _index5.default
};