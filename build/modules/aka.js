'use strict';

function Aka(sandbox) {

	this.sb = sandbox;
}

Aka.prototype.init = function () {

	this.listens();
};

Aka.prototype.listens = function () {

	var sb = this.sb;
	sb.sb_notifyListen({

		'create-dom-tree': this.handleOrderOccured.bind(this)

	});
};

Aka.prototype.emit = function (eNotifs) {

	var sb = this.sb;

	sb.sb_notifyEvent({

		type: eNotifs.type,
		data: eNotifs.data

	});
};

Aka.prototype.handleCreateDomTree = function (data) {

	var sb = this.sb;
	this.createDomTree(data);
};

Aka.prototype.createDomTree = function (data) {

	//   var dom = null
	var rootName = Object.keys(data)[0];
	var root = this.createRoot(rootName, data.props);
	this.domTreeCreated(root);
};

Aka.prototype.createRoot = function (name, props) {

	var dom = null;

	var el = this.addProps(sb.sb_createElement(name), props.presentational);
	//  var el = this.addProps(el,props.presentational)

	return el;
};

Aka.prototype.addProps = function (el, props) {

	for (p in props) {

		sb.sb_addProperty(el, p, props[p]);
	}

	return el;
};

Aka.prototype.domTreeCreated = function (dom) {

	this.emit({ type: 'dom-tree-created', data: dom });
};