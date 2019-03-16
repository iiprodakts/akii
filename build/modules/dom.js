"use strict";

function Dom(sandbox) {
  this.sb = sandbox; // this.componentname = ''
}

Dom.prototype.init = function () {
  this.listens(); //  this.emit({type:'get-component-name',data: ''})
};

Dom.prototype.listens = function () {
  var sb = this.sb; // var name = 'render-component-'+name

  sb.sb_notifyListen({
    'add-dom-component': this.handleAddDomComponent.bind(this)
  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

Dom.prototype.emit = function (eNotifs) {
  var sb = this.sb;
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

Dom.prototype.handleAddDomComponent = function (data) {
  var sb = this.sb;
  sb.sb_appendChild(sb.view, data.data); // this.emit({type:'stop-preloader',data:''})
};

Dom.prototype.handleComponentRender = function (evt) {
  this.evt.data.name();
};

Dom.prototype.messenger = function (data) {
  this.emit({
    type: 'retrieve-data',
    data: data
  });
};