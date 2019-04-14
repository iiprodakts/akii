"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function CORE(lib) {
  this.SUKU = lib;
  this.modules = {};
} // End of the CORE class


CORE.prototype.createModule = function (module, moduleId, modInstId) {
  var modules = this.modules; // console.log('THe modules Object')
  // console.log(modules)

  if (Object.keys(modules).length > 0) {
    for (var _mod in modules) {
      //console.log(modules[mod]);
      if (_mod === moduleId) {
        this.modules[moduleId][modInstId] = module;
      } else {
        this.modules[moduleId] = {};
        this.modules[moduleId][modInstId] = module;
      }
    } // End of for loop

  } else {
    this.modules[moduleId] = {};
    this.modules[moduleId][modInstId] = module;
  } // End of ifesleif test

}; // End of store modules method


CORE.prototype.dom = function () {
  var SUKU = this.SUKU;
  return {
    queryCont: function queryCont(contModId, contModInstId) {
      var cont = {};
      var modViews = SUKU.getAllBy_attribute(contModId);

      for (var modV = 0; modV < modViews.length; modV++) {
        var attribs = SUKU.get_element_attributes(modViews[modV]);

        if (attribs.length > 0) {
          for (var a = 0; a < attribs.length; a++) {
            var attName = attribs[a].name;

            if (attName === contModId) {
              var attValue = attribs[a].value;

              if (attValue === contModInstId) {
                cont = modViews[modV];
                break;
              }
            }
          }
        } // End of check attributes length if statement

      }

      cont.queryChildById = function (selector) {
        return SUKU.getChildby_id(this, selector);
      };

      cont.queryChildByClass = function (selector) {
        return SUKU.getChildby_class(this, selector);
      };

      cont.queryAllChildByClass = function (selector) {
        return SUKU.getAllChildby_class(this, selector);
      };

      cont.queryChildByAttribute = function (attrib) {
        return SUKU.getChildby_attribute(this, attrib);
      };

      cont.queryAllChildByAttribute = function (attrib) {
        return SUKU.getAllChildby_attribute(this, attrib);
      };

      return cont;
    },
    // End of query container method
    createElement: function createElement(selector) {
      // console.log('The value of this inside create element')
      var el = SUKU.create_element(selector);
      return el;
    },
    copyDeep: function copyDeep(el) {
      var el = SUKU.copy_deep(el);
      return el;
    },
    copyShallow: function copyShallow(el) {
      var el = SUKU.copy_shallow(el);
      return el;
    },
    queryById: function queryById(selector) {
      return SUKU.getby_id(selector);
    },
    queryByTag: function queryByTag(parent, selector) {
      return SUKU.getby_tag(parent, selector);
    },
    queryByAttribute: function queryByAttribute(attrib) {
      return SUKU.getAllBy_attribute(attrib);
    },
    queryNodeType: function queryNodeType(node) {
      var type_of_node = SUKU.get_type_of_node(node);
      return type_of_node;
    },
    addProperty: function addProperty(el, attrib, attribValue) {
      SUKU.set_element_attribute(el, attrib, attribValue);
    },
    removeProperty: function removeProperty(el, attrib) {
      SUKU.remove_element_attribute(el, attrib);
    },
    insertInner: function insertInner(el, content) {
      SUKU.insert_content_inner(el, content);
    },
    addChild: function addChild(parent, child) {
      SUKU.append_child(parent, child);
    },
    getClasses: function getClasses(element) {
      return SUKU.get_class_list(element);
    },
    addClass: function addClass(classlist, classname) {
      SUKU.add_class(classlist, classname);
    },
    removeClass: function removeClass(classlist, classname) {
      SUKU.remove_class(classlist, classname);
    },
    toggleClass: function toggleClass(classlist, classname) {
      SUKU.toggle_class(classlist, classname);
    },
    hasClass: function hasClass(classlist, classname) {
      return SUKU.has_class(classlist, classname);
    },
    getStyles: function getStyles(element) {
      return SUKU.get_computed_styles(element);
    },
    getAttributes: function getAttributes(element) {
      return SUKU.get_element_attributes(element);
    },
    getParent: function getParent(child) {
      return SUKU.get_parent(child);
    }
  };
}; // End of CORE DOM MANIPULATION object


CORE.prototype.events = function () {
  var SUKU = this.SUKU;
  return {
    addEventHandler: function addEventHandler(el, ev, handler) {
      SUKU.ev_addHandler(el, ev, handler);
    },
    // End of addEventHandler() method
    removeEventHandler: function removeEventHandler(el, ev, handler) {
      SUKU.ev_removeHandler(el, ev, handler);
    },
    // End of addEventHandler() method
    getEvent: function getEvent(ev) {
      return SUKU.getEvent(ev);
    },
    // End of addEventHandler() method
    getTarget: function getTarget(ev) {
      return SUKU.getTarget(ev);
    },
    // End of addEventHandler() method
    preventNormal: function preventNormal(ev) {
      SUKU.preventDefault(ev);
    },
    // End of addEventHandler() method
    stopEventBubble: function stopEventBubble(ev) {
      SUKU.stopPropagation(ev);
    } // End of addEventHandler() method

  };
}; // End of CORE EVENTS manipulation object


CORE.prototype.ajax = function () {
  var SUKU = this.SUKU;
  return {
    get: function get(url, data, success, failure, type) {
      SUKU.ajax_get(url, data, success, failure, type);
    },
    // End of ajax get() method
    post: function post(url, data, success, failure, type) {
      SUKU.ajax_post(url, data, success, failure, type);
    } // End of ajax post() method

  };
}; // End of CORE AJAX manipulation object


CORE.prototype.validator = {
  validate: function validate(data) {
    var result = SUKU.validator(data);
    return result;
  }
  /*
  
  	The methods immediately after this method will be used for module inter communication, which is
  	a way that modules communicate with each other indirectly.
  	
  
  */

};

CORE.prototype.registerEvents = function (evts, module_id, mod_inst_id) {
  if (evts && module_id && mod_inst_id) {
    if (this.modules[module_id][mod_inst_id]) {
      this.modules[module_id][mod_inst_id].events = evts;
    }
  }
}; // End of registerEvents method


CORE.prototype.triggerEvent = function (evt) {
  var moduId = null;

  if (evt) {
    // console.log('Event contains data')
    for (var _moduId in this.modules) {
      // console.log('Modules contains modules')
      if (this.modules.hasOwnProperty(_moduId)) {
        // console.log('given module belongs to modules object')
        _moduId = this.modules[_moduId];

        for (var modInst in _moduId) {
          // console.log('Instances of a given moduleS')
          // console.log(moduId[modInst].events.type)
          // console.log(evt.type)
          if (_moduId[modInst].events && _moduId[modInst].events[evt.type]) {
            _moduId[modInst].events[evt.type](evt.data);
          } // End of inner if statement

        }
      }
    } // End of for in statement

  } // End of outer evt object check

}; // End of triggerEvent method


CORE.prototype.startModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].init();
  }
}; // End of startModule() core method


CORE.prototype.startAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].init();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of startAllModules() core method


CORE.prototype.stopModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].destroy();
  }
}; // End of stopModule() core method


CORE.prototype.stopAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].destroy();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of stopAllModules() core method


CORE.prototype.converts = function () {
  var SUKU = this.SUKU;
  return {
    jsToJson: function jsToJson(jsObject) {
      return SUKU.js_to_json(jsObject);
    },
    jsonToJs: function jsonToJs(json) {
      return SUKU.json_to_js(json);
    },
    clone: function clone(c) {
      return SUKU.clone(c);
    },
    objectToArray: function objectToArray(o) {
      return SUKU.object_to_array(o);
    }
  };
};

var _default = CORE;
exports.default = _default;