'use strict';

function Form(sandbox) {

	this.sb = sandbox;
	// this.componentname = ''
}

Form.prototype.init = function () {

	this.listens();
	//  this.emit({type:'get-component-name',data: ''})
};

Form.prototype.listens = function () {

	var sb = this.sb;
	// var name = 'render-component-'+name
	sb.sb_notifyListen({

		'create-form': this.handleCreateForm.bind(this)

	}, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

Form.prototype.emit = function (eNotifs) {

	var sb = this.sb;

	sb.sb_notifyEvent({

		type: eNotifs.type,
		data: eNotifs.data

	});
};

Form.prototype.handleCreateForm = function (data) {

	// var sb = this.sb 
	this.createForm(data);
};

Form.prototype.createForm = function (data) {

	//   var dom = null

	console.log('The data structure object');
	//   console.log(data)
	//   console.log(Object.keys(data))
	//   var rootName = Object.keys(data)[0]
	console.log(data);

	var root = data.parent;
	var children = this.createChildren(root, data.data);
	this.addChildren(root, children);
	// //   var root = this.addChildren(root,children)


	//   this.domTreeCreated(root)
};

Form.prototype.create = function (name, props, ops) {

	console.log('Create');
	console.log(props);
	var sb = this.sb;
	var el = this.addProps(this.addOps(sb.sb_createElement(name), ops), props);
	//  var el = this.addProps(el,props.presentational)

	return el;
};

Form.prototype.createChildren = function (root, children, child) {

	var sb = this.sb;
	var descends = [];

	for (var c = 0; c < children.length; c++) {

		var e = children[c];

		// console.log('The current child props property')
		// console.log(e.props)

		if (e.parent !== undefined && e.parent.set) {

			var el = this.create(e.parent.element, e.parent.props.presentational, e.parent.props.functional);
			var control = this.create(e.element, e.props.presentational, e.props.functional);

			if (e.parent.children) {

				console.log('The current element has[The parent] children');
				console.log(e.parent.children);

				sb.sb_addChild(root, el);
				this.createChildren(el, e.parent.children, { control: control, role: e.role, name: e.name });
			} else {

				console.log('The last innermost element has[The children] no children');
				console.log('The last innermost element has[The children] no children');
				console.log(el);
				console.log(control);
				sb.sb_addChild(el, control);
				sb.sb_addChild(root, el);
			}
		} else {

			var el = this.create(e.element, e.props.presentational, e.props.functional);

			if (e.children) {

				console.log('The current element has children');
				console.log(e.children);
				sb.sb_addChild(root, el);
				this.createChildren(el, e.children);
			} else {

				console.log('The last innermost element has no children');
				console.log('The child');
				console.log(child);

				if (child) {

					if (e.role === 'input') {

						sb.sb_addChild(el, child.control);
					} else if (e.role === 'name') {

						sb.sb_insertInner(el, child.name);
					}
				}

				sb.sb_addChild(root, el);
			}
		}

		descends.push(el);
	}

	return descends;
};

Form.prototype.addChildren = function (parent, children) {

	var sb = this.sb;

	for (var c = 0; c < children.length; ++c) {

		sb.sb_addChild(parent, children[c]);
	}

	//  return parent

};

Form.prototype.addProps = function (el, props) {

	var sb = this.sb;

	console.log('ADD PROPS');
	console.log(props);
	console.log(el);

	if (props.set) {

		for (p in props.presents) {

			if (p === 'content') {

				sb.sb_insertInner(el, props.presents[p]);
			} else {

				sb.sb_addProperty(el, p, props.presents[p]);
			}
		}
	}

	return el;
};

Form.prototype.addOps = function (el, ops) {

	var sb = this.sb;

	console.log('ADD OPS');
	console.log(ops);
	console.log(el);

	if (ops.set) {

		for (p in ops.event) {

			console.log('The data of event property');
			console.log(ops.event[p]);
			sb.sb_addEvent(el, ops.event[p].type, ops.event[p].callback);
			// this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
		}
	}

	return el;
};

Form.prototype.formCreationDone = function (data) {

	this.emit({ type: 'form-creation-done', data: data });
};