"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function SANDBOX(appCore) {
  this.core = appCore;
} // End of SANDBOX


SANDBOX.prototype.create = function (moduleID, modInstId) {
  var sb_core = this.core;
  var dom = sb_core.dom();
  var events = sb_core.events();
  var ajax = sb_core.ajax();
  var converts = sb_core.converts(); // console.log('The value of Instance Id')
  // console.log(modInstId)

  if (modInstId) {
    // console.log('The module has a view')
    var CONTAINER = dom.queryCont('data-' + moduleID, modInstId);
    var meta = {
      moduleId: moduleID,
      modInstId: modInstId
    };
  } else {
    // console.log('The module has no view')
    var meta = {
      moduleId: moduleID,
      modInstId: moduleID
    };
  }

  return {
    // DOM manipulations
    view: CONTAINER,
    moduleMeta: meta,
    sb_getChildById: function sb_getChildById(selector) {
      if (CONTAINER) {
        return CONTAINER.queryChildById(selector);
      }
    },
    sb_getChildByClass: function sb_getChildByClass(selector) {
      if (CONTAINER) {
        return CONTAINER.queryChildByClass(selector);
      }
    },
    sb_getAllChildByClass: function sb_getAllChildByClass(selector) {
      if (CONTAINER) {
        return CONTAINER.queryAllChildByClass(selector);
      }
    },
    sb_getById: function sb_getById(selector) {
      return dom.queryById(selector);
    },
    sb_getByTag: function sb_getByTag(parent, selector) {
      return dom.queryByTag(parent, selector);
    },
    sb_getByAttribute: function sb_getByAttribute(attrib) {
      return dom.queryByAttribute(attrib);
    },
    sb_getAllChildByAttribute: function sb_getAllChildByAttribute(attrib) {
      return CONTAINER.queryAllChildByAttribute(attrib);
    },
    sb_getChildByAttribute: function sb_getChildByAttribute(attrib) {
      return CONTAINER.queryChildByAttribute(attrib);
    },
    sb_getNodeType: function sb_getNodeType(node) {
      return dom.queryNodeType(node);
    },
    sb_createElement: function sb_createElement(selector) {
      var el = dom.createElement(selector);
      return el;
    },
    sb_copyDeep: function sb_copyDeep(el) {
      var el = dom.copyDeep(el);
      return el;
    },
    sb_copyShallow: function sb_copyShallow(el) {
      var el = dom.copyShallow(el);
      return el;
    },
    sb_addProperty: function sb_addProperty(el, attrib, attribValue) {
      dom.addProperty(el, attrib, attribValue);
    },
    sb_removeProperty: function sb_removeProperty(el, attrib) {
      dom.removeProperty(el, attrib);
    },
    sb_insertInner: function sb_insertInner(el, content) {
      dom.insertInner(el, content);
    },
    sb_addChild: function sb_addChild(parent, child) {
      dom.addChild(parent, child);
    },
    sb_getClasses: function sb_getClasses(element) {
      return dom.getClasses(element);
    },
    sb_addClass: function sb_addClass(classlist, classname) {
      dom.addClass(classlist, classname);
    },
    sb_removeClass: function sb_removeClass(classlist, classname) {
      dom.removeClass(classlist, classname);
    },
    sb_toggleClass: function sb_toggleClass(classlist, classname) {
      dom.toggleClass(classlist, classname);
    },
    sb_hasClass: function sb_hasClass(classlist, classname) {
      return dom.hasClass(classlist, classname);
    },
    sb_getStyles: function sb_getStyles(element) {
      return dom.getStyles(element);
    },
    sb_getAttributes: function sb_getAttributes(element) {
      return dom.getAttributes(element);
    },
    sb_getParent: function sb_getParent(child) {
      return dom.getParent(child);
    },
    // EVENTS manipulations
    sb_addEvent: function sb_addEvent(el, ev, handler) {
      events.addEventHandler(el, ev, handler);
    },
    sb_removeEvent: function sb_removeEvent(el, ev, handler) {
      events.addEventHandler(el, ev, handler);
    },
    sb_getEvent: function sb_getEvent(ev) {
      return events.getEvent(ev);
    },
    // End of addEventHandler() method
    sb_getTarget: function sb_getTarget(ev) {
      return events.getTarget(ev);
    },
    // End of addEventHandler() method
    sb_preventNormal: function sb_preventNormal(ev) {
      events.preventNormal(ev);
    },
    sb_stopEventBubble: function sb_stopEventBubble(ev) {
      events.stopEventBubble(ev);
    },
    // AJAX communications
    sb_ajaxGet: function sb_ajaxGet(url, data, success, failure, type) {
      ajax.get(url, data, success, failure, type);
    },
    sb_ajaxPost: function sb_ajaxPost(url, data, success, failure, type) {
      ajax.post(url, data, success, failure, type);
    },
    // MODULE communications
    sb_notifyListen: function sb_notifyListen(evts, moduleID, modInstId) {
      // console.log('The notifyListen event has been successfuly invoked')
      sb_core.registerEvents(evts, moduleID, modInstId);
    },
    // End of notifyListen() for events to listen to
    sb_notifyEvent: function sb_notifyEvent(evt) {
      // console.log('The notify event has been successfuly invoked')
      sb_core.triggerEvent(evt);
    },
    // end of notifyEvent() occurence
    sb_validate: function sb_validate(data) {
      var validateResult = sb_core.validator.validate(data);
      return validateResult;
    },
    sb_jsToJson: function sb_jsToJson(jsObject) {
      return converts.jsToJson(jsObject);
    },
    sb_jsonToJs: function sb_jsonToJs(json) {
      return converts.jsonToJs(json);
    },
    sb_clone: function sb_clone(c) {
      return converts.clone(c);
    },
    sb_objectToArray: function sb_objectToArray(o) {
      return converts.objectToArray(o);
    } // End OF return

  };
}; // End of SANDBOX create() method


var _default = SANDBOX;
exports.default = _default;