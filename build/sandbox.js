"use strict";

function SANDBOX(appCore) {
  this.core = appCore;
} // End of SANDBOX


SANDBOX.prototype.create = function (moduleID, modInstId) {
  var sb_core = this.core; // console.log('The value of Instance Id')
  // console.log(modInstId)

  if (modInstId) {
    // console.log('The module has a view')
    var CONTAINER = this.core.dom.queryCont('data-' + moduleID, modInstId);
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
      return sb_core.dom.queryById(selector);
    },
    sb_getByTag: function sb_getByTag(parent, selector) {
      return sb_core.dom.queryByTag(parent, selector);
    },
    sb_getByAttribute: function sb_getByAttribute(attrib) {
      return sb_core.dom.queryByAttribute(attrib);
    },
    sb_getAllChildByAttribute: function sb_getAllChildByAttribute(attrib) {
      return CONTAINER.queryAllChildByAttribute(attrib);
    },
    sb_getChildByAttribute: function sb_getChildByAttribute(attrib) {
      return CONTAINER.queryChildByAttribute(attrib);
    },
    sb_getNodeType: function sb_getNodeType(node) {
      return sb_core.dom.queryNodeType(node);
    },
    sb_createElement: function sb_createElement(selector) {
      var el = sb_core.dom.createElement(selector);
      return el;
    },
    sb_copyDeep: function sb_copyDeep(el) {
      var el = sb_core.dom.copyDeep(el);
      return el;
    },
    sb_copyShallow: function sb_copyShallow(el) {
      var el = sb_core.dom.copyShallow(el);
      return el;
    },
    sb_addProperty: function sb_addProperty(el, attrib, attribValue) {
      sb_core.dom.addProperty(el, attrib, attribValue);
    },
    sb_removeProperty: function sb_removeProperty(el, attrib) {
      sb_core.dom.removeProperty(el, attrib);
    },
    sb_insertInner: function sb_insertInner(el, content) {
      sb_core.dom.insertInner(el, content);
    },
    sb_addChild: function sb_addChild(parent, child) {
      sb_core.dom.addChild(parent, child);
    },
    sb_getClasses: function sb_getClasses(element) {
      return sb_core.dom.getClasses(element);
    },
    sb_addClass: function sb_addClass(classlist, classname) {
      sb_core.dom.addClass(classlist, classname);
    },
    sb_removeClass: function sb_removeClass(classlist, classname) {
      sb_core.dom.removeClass(classlist, classname);
    },
    sb_toggleClass: function sb_toggleClass(classlist, classname) {
      sb_core.dom.toggleClass(classlist, classname);
    },
    sb_hasClass: function sb_hasClass(classlist, classname) {
      return sb_core.dom.hasClass(classlist, classname);
    },
    sb_getStyles: function sb_getStyles(element) {
      return sb_core.dom.getStyles(element);
    },
    sb_getAttributes: function sb_getAttributes(element) {
      return sb_core.dom.getAttributes(element);
    },
    sb_getParent: function sb_getParent(child) {
      return sb_core.dom.getParent(child);
    },
    // EVENTS manipulations
    sb_addEvent: function sb_addEvent(el, ev, handler) {
      sb_core.events.addEventHandler(el, ev, handler);
    },
    sb_removeEvent: function sb_removeEvent(el, ev, handler) {
      sb_core.events.addEventHandler(el, ev, handler);
    },
    sb_getEvent: function sb_getEvent(ev) {
      return sb_core.events.getEvent(ev);
    },
    // End of addEventHandler() method
    sb_getTarget: function sb_getTarget(ev) {
      return sb_core.events.getTarget(ev);
    },
    // End of addEventHandler() method
    sb_preventNormal: function sb_preventNormal(ev) {
      sb_core.events.preventNormal(ev);
    },
    sb_stopEventBubble: function sb_stopEventBubble(ev) {
      sb_core.events.stopEventBubble(ev);
    },
    // AJAX communications
    sb_ajaxGet: function sb_ajaxGet(url, data, success, failure, type) {
      sb_core.ajax.get(url, data, success, failure, type);
    },
    sb_ajaxPost: function sb_ajaxPost(url, data, success, failure, type) {
      sb_core.ajax.post(url, data, success, failure, type);
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
      return sb_core.converts.jsToJson(jsObject);
    },
    sb_jsonToJs: function sb_jsonToJs(json) {
      return sb_core.converts.jsonToJs(json);
    } // End OF return

  };
}; // End of SANDBOX create() method