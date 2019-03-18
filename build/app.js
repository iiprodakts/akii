"use strict";

var _base = _interopRequireDefault(require("./base"));

var _modules = _interopRequireDefault(require("./modules"));

var _components = _interopRequireDefault(require("./components"));

var Activator = _interopRequireWildcard(require("./activate"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_base.default.SUKU.domLoaded(Activator.Activator(_base.default, [_modules.default, _components.default]));