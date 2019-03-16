'use strict';

function List(sandbox) {

	this.sb = sandbox;
}

List.prototype.init = function () {

	this.listens();
};

List.prototype.listens = function () {

	var sb = this.sb;
	sb.sb_notifyListen({

		'create-list': this.handleCreatList.bind(this)

	}, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

List.prototype.emit = function (eNotifs) {

	var sb = this.sb;

	sb.sb_notifyEvent({

		type: eNotifs.type,
		data: eNotifs.data

	});
};

List.prototype.createTiled = function (itemData, options) {

	var sb = this.sb;
	var lst = sb.sb_createElement('li');
	sb.sb_addProperty(lst, 'class', 'mg-bottom-fd-xx-tn cursor-pointer pd-left-fl-bt d-inline-block pd-bottom-fd-bt pd-top-fd-bt pos-rel');
	sb.sb_addProperty(lst, 'data-navigata-page', 'menulist');
	sb.sb_addProperty(lst, 'data-navigata-data', '[{data: ' + itemData.Name + ',page: menulist,endpoint: /smarfo/menuitems}]');

	if (options.cols === 2) {

		var classList = sb.sb_getClasses(lst);
		sb.sb_addClass(classList, 'hr-size-fl-sm');
		sb.sb_addClass(classList, 'd-inline-block');
		sb.sb_addClass(classList, 'mg-left-fl-x-bt');

		if (itemData !== null) {

			var dv = sb.sb_createElement('div');
			var sp = sb.sb_createElement('span');
			var img = sb.sb_createElement('img');
			var h2 = sb.sb_createElement('h2');
			sb.sb_addProperty(dv, 'class', 'hr-size-fl-xx-bg pos-rel');

			sb.sb_addProperty(sp, 'class', 'hr-size-fl-xx-bg item-overlay top-offset-0 d-block pos-abs');

			sb.sb_addProperty(img, 'src', options.src + itemData.image);
			sb.sb_addProperty(img, 'class', 'hr-size-fl-xx-bg');
			sb.sb_addProperty(h2, 'class', 'top-offset-fl-sm left-offset-fl-xx-sm fg-light pos-rel');
			sb.sb_insertInner(h2, itemData.Name);

			sb.sb_addChild(dv, sp) - sb.sb_addChild(dv, img);
			sb.sb_addChild(sp, h2);

			sb.sb_addChild(lst, dv);
			console.log(lst);

			//  sb.sb_insertInner(lst,itemData.Name)
		}

		return lst;
	} else if (options.cols === 3) {

		var _classList = sb.sb_getClasses(lst);
		sb.sb_addClass(_classList, 'hr-size-fl-xxx-sm');
		sb.sb_addClass(_classList, 'd-inline-block');
		sb.sb_addClass(_classList, 'mg-left-fl-x-bt');

		if (itemData !== null) {

			sb.sb_insertInner(lst, itemData.Name);
		}
		sb.sb_addChild(sb.view, lst);
	} else {

		var _classList2 = sb.sb_getClasses(lst);
		sb.sb_addClass(_classList2, 'hr-size-fl-sm');
		sb.sb_addClass(_classList2, 'd-block');
		sb.sb_addClass(_classList2, 'mg-left-fl-x-bt');

		if (itemData !== null) {

			sb.sb_insertInner(lst, itemData.Name);
		}

		sb.sb_addChild(sb.view, lst);
	}
};

List.prototype.createRegular = function (itemData, options) {

	console.log('The Item Data');
	console.log(itemData);

	var sb = this.sb;
	var lst = sb.sb_createElement('li');
	sb.sb_addProperty(lst, 'class', 'hr-size-fl-xx-bg bx-shadow cursor-pointer fd-font-x-tn mg-bottom-fd-tn pd-left-fl-bt bg-light pos-rel d-block pd-bottom-fd-tn pd-top-fd-tn');
	sb.sb_addProperty(lst, 'data-navigata-page', 'detail');
	sb.sb_addProperty(lst, 'data-navigata-data', '[{data: ' + itemData.item_id + ',page: detail,endpoint: /detail}]');

	if (options.image) {

		console.log('The Main menu');

		var sp = sb.sb_createElement('span');
		var sp2 = sb.sb_createElement('span');
		var sp3 = sb.sb_createElement('span');
		var img = sb.sb_createElement('img');
		var input = sb.sb_createElement('input');
		var st = sb.sb_createElement('strong');
		var small = sb.sb_createElement('small');
		var smallSp = sb.sb_createElement('span');
		var priceSp = sb.sb_createElement('span');
		var minus = sb.sb_createElement('input');
		var add = sb.sb_createElement('input');

		var fm = sb.sb_createElement('form');
		var inputId = sb.sb_createElement('input');
		var inputPrice = sb.sb_createElement('input');
		var inputName = sb.sb_createElement('input');

		sb.sb_addProperty(inputId, 'type', 'hidden');
		sb.sb_addProperty(inputId, 'name', 'product_id');
		sb.sb_addProperty(inputId, 'value', itemData.item_id);

		sb.sb_addProperty(inputPrice, 'type', 'hidden');
		sb.sb_addProperty(inputPrice, 'name', 'product_price');
		sb.sb_addProperty(inputPrice, 'value', itemData.price);

		sb.sb_addProperty(inputName, 'type', 'hidden');
		sb.sb_addProperty(inputName, 'name', 'product_name');
		sb.sb_addProperty(inputName, 'value', itemData.Name);

		sb.sb_addProperty(input, 'type', 'number');
		sb.sb_addProperty(input, 'name', 'product_qty');

		sb.sb_addProperty(minus, 'type', 'button');
		sb.sb_addProperty(minus, 'name', 'remove_product');
		sb.sb_addProperty(minus, 'value', '-');

		sb.sb_addProperty(add, 'type', 'button');
		sb.sb_addProperty(add, 'name', 'add_product');
		sb.sb_addProperty(add, 'value', '+');

		sb.sb_addChild(fm, minus);
		sb.sb_addChild(fm, inputId);
		sb.sb_addChild(fm, inputPrice);
		sb.sb_addChild(fm, inputName);
		sb.sb_addChild(fm, input);
		sb.sb_addChild(fm, add);
		sb.sb_addChild(fm, st);

		sb.sb_addProperty(img, 'src', options.src + itemData.image);
		sb.sb_addProperty(img, 'class', 'hr-size-fl-xx-md bd-rad-bt pos-rel');
		sb.sb_addProperty(fm, 'class', 'hr-fl-size-xx-bg  mg-bottom-fd-sm pos-rel');
		// sb.sb_addProperty(fm,'id',ct+'-form')
		sb.sb_addProperty(minus, 'class', 'hr-size-fl-xxx-sm cursor-pointer float-left vt-size-fd-bt d-inline-block bg-light bd-bottom-left-rad-fd-xx-bt bd-top-left-rad-fd-xx-bt bd-fd-secondary-xx-bt pd-fd-xx-tn text-align-center  font-fd-xx-tn font-wt-bolder  pos-rel');
		// sb.sb_addProperty(minus,'id',ct)
		sb.sb_addEvent(minus, 'click', this.removeFromCart.bind(this));
		sb.sb_addProperty(add, 'class', 'hr-size-fl-xxx-sm cursor-pointer float-left vt-size-fd-bt d-inline-block  bg-light bd-bottom-right-rad-fd-xx-bt bd-top-right-rad-fd-xx-bt bd-fd-secondary-xx-bt pd-fd-xx-tn text-align-center font-wt-bolder  font-fd-xx-tn pos-rel');
		// sb.sb_addProperty(add,'id',ct)
		sb.sb_addEvent(add, 'click', this.addToCart.bind(this));
		sb.sb_addProperty(input, 'class', 'vt-size-fd-bt float-left d-inline-block hr-size-fl-xxx-sm pd-fd-xx-tn bg-light bd-fd-secondary-xx-bt ');
		sb.sb_addProperty(input, 'placeholder', '0');
		sb.sb_addEvent(input, 'input', this.updateCart.bind(this));
		sb.sb_addProperty(small, 'class', 'pd-left-fd-xx-tn d-block pos-abs mg-top-fd-tn');
		sb.sb_addProperty(smallSp, 'class', 'd-inline-block font-wt-bolder fg-secondary font-fd-xx-tn pos-rel');
		sb.sb_addProperty(priceSp, 'class', 'd-inline-block font-wt-bolder fg-secondary font-fd-xx-tn pos-rel');
		sb.sb_addProperty(st, 'class', 'clearfix');

		sb.sb_addProperty(sp, 'class', 'hr-size-fl-xx-sm mg-right-fl-bt d-inline-block float-left');
		sb.sb_addProperty(sp2, 'class', 'hr-size-fl-xxx-sm font-fd-xx-tn d-inline-block float-left');
		sb.sb_addProperty(sp3, 'class', 'hr-size-fl-xxx-sm d-inline-block float-left');
		sb.sb_insertInner(sp2, itemData.Name);
		sb.sb_insertInner(minus, '-');
		sb.sb_insertInner(add, '+');
		sb.sb_insertInner(priceSp, 'R' + itemData.price);

		sb.sb_addChild(sp, img);

		// sb.sb_addChild(sp3,minus)
		// sb.sb_addChild(sp3,input)
		// sb.sb_addChild(sp3,add)

		sb.sb_addChild(sp3, fm);
		// sb.sb_addChild(small,smallSp)
		sb.sb_addChild(small, priceSp);
		sb.sb_addChild(sp3, small);

		sb.sb_addChild(lst, sp);
		sb.sb_addChild(lst, sp2);
		sb.sb_addChild(lst, sp3);
		sb.sb_addChild(lst, st);
	} else {

		console.log('The mini menu');
		sb.sb_addProperty(lst, 'class', 'hr-size-fl-xx-bg font-fd-xx-tn mg-bottom-fd-xx-tn bd-bottom-fd-secondary-xx-bt pos-rel d-block pd-bottom-fd-bt pd-top-fd-bt pd-left-fl-xxx-tn');
		sb.sb_insertInner(lst, itemData.Name);
	}

	return lst;
};

List.prototype.handleCreatList = function (data) {

	console.log('Create list event has occured');
	console.log(data);
	this.createList(data);
};

List.prototype.createList = function (data) {

	var sb = this.sb;
	var listData = data.data;

	var lstCont = sb.sb_createElement('ul');

	if (data.type === 'tiled') {

		for (list in listData) {

			var lst = this.createTiled(listData[list], data.options);
			sb.sb_addChild(lstCont, lst);
		}

		var parent = data.parent;

		sb.sb_addChild(parent, lstCont);

		this.emit({ type: 'component-resource-creation-done', data: parent });
	} else {

		for (list in listData) {

			var lst = this.createRegular(listData[list], data.options);
			sb.sb_addChild(lstCont, lst);
		}

		var parent = data.parent;

		if (data.options.styles) {

			if (data.options.styles.class) {

				sb.sb_addProperty(parent, 'class', data.options.styles.class);
			}
		}

		sb.sb_addChild(parent, lstCont);

		this.emit({ type: 'component-resource-creation-done', data: parent });
	}
};

List.prototype.addToCart = function (ev) {

	var sb = this.sb;

	sb.sb_stopEventBubble(ev);
	var productData = this.getAddProduct(ev);
	console.log('The cart product data');
	console.log(productData);
	this.emit({ type: 'add-to-cart', data: productData });
};

List.prototype.removeFromCart = function (ev) {

	var sb = this.sb;

	sb.sb_stopEventBubble(ev);

	var productData = this.getRemoveProduct(ev);
	if (productData) {

		this.emit({ type: 'remove-from-cart', data: productData });
	}
};

List.prototype.updateCart = function (ev) {

	var sb = this.sb;

	// console.log('The input event')
	// console.log(ev)
	//ev.stopImmediatePropagation()
	var productData = this.getUpdateProduct(ev);
	if (productData) {

		this.emit({ type: 'update-cart', data: productData });
	}

	return false;
};

List.prototype.getAddProduct = function (evt) {

	var sb = this.sb;

	var productFm = sb.sb_getParent(evt.target);

	if (!productFm.product_qty.value) {

		sb.sb_addProperty(productFm.product_qty, 'value');
		productFm.product_qty.value = 1;
	} else {

		productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) + 1;
	}

	var productData = {

		productId: productFm.product_id.value,
		productName: productFm.product_name.value,
		productPrice: parseFloat(productFm.product_price.value, 2),
		productQty: parseInt(productFm.product_qty.value, 10)
	};

	return productData;
};
List.prototype.getRemoveProduct = function (evt) {

	var sb = this.sb;

	var productFm = sb.sb_getParent(evt.target);

	if (productFm.product_qty.value && parseInt(productFm.product_qty.value, 10) > 0) {

		productFm.product_qty.value = parseInt(productFm.product_qty.value, 10) - 1;

		var productData = {

			productId: productFm.product_id.value,
			productName: productFm.product_name.value,
			productPrice: parseFloat(productFm.product_price.value, 2),
			productQty: parseInt(productFm.product_qty.value, 10)
		};

		return productData;
	} else {

		console.log('The product to remove is not');
		return null;
	}
};
List.prototype.getUpdateProduct = function (evt) {

	var sb = this.sb;

	var productFm = sb.sb_getParent(evt.target);
	var updateValue = parseInt(productFm.product_qty.value.trim());
	console.log('The converted update value');
	console.log(updateValue);

	if (updateValue !== '' && !isNaN(updateValue) && updateValue >= 0) {

		var productData = {

			productId: productFm.product_id.value,
			productName: productFm.product_name.value,
			productPrice: parseFloat(productFm.product_price.value, 2),
			productQty: parseInt(productFm.product_qty.value, 10)
		};

		return productData;
	} else {

		console.log('The value is not in required format');
		return null;
	}
};
List.prototype.getters = {

	viewAttribs: undefined.viewAttribs,

	getListType: function getListType() {

		for (var attribs = 0; attribs < this.viewAttribs.length; attribs++) {

			if (this.viewAttribs[attribs].name === 'data-list-type') {

				if (this.viewAttribs[attribs].value === 'tile') {

					return 'tile';
				} else {

					return 'regular';
				}
			}
		}
	},
	getListCols: function getListCols() {

		for (var attribs = 0; attribs < this.viewAttribs.length; attribs++) {

			if (this.viewAttribs[attribs].name === 'data-list-cols') {

				if (this.viewAttribs[attribs].value === '2') {

					return 2;
				} else if (this.viewAttribs[attribs].value === '3') {

					return 3;
				} else {

					return 0;
				}
			}
		}
	},

	getImage: function getImage() {

		for (var attribs = 0; attribs < this.this.viewAttribs.length; attribs++) {

			if (this.viewAttribs[attribs].name === 'data-list-image') {

				return true;
			}
		}
	},

	getImageSrc: function getImageSrc() {

		for (var attribs = 0; attribs < this.viewAttribs.length; attribs++) {

			if (this.viewAttribs[attribs].name === 'data-list-image-src') {

				return this.viewAttribs[attribs].value;
			}
		}
	},

	isSetList: function isSetList() {

		if (this.viewAttribs[attribs].name === 'data-list-src') {

			if (this.viewAttribs[attribs].value === '') {

				return true;
			} else {

				return false;
			}
		}
	},

	getListSrc: function getListSrc() {

		for (var attribs = 0; attribs < this.viewAttribs.length; attribs++) {

			if (this.viewAttribs[attribs].name === 'data-list-src') {

				return this.viewAttribs[attribs].value;
			}
		}
	},

	getListData: function getListData() {

		var listSrc = getters.getListSrc();
		dataFromApi('https://smarfoapi.herokuapp.com/smarfo' + listSrc);
	},

	completed: function completed() {

		console.log('The list completed method has been invoked');
		sb.sb_notifyEvent({

			type: 'list-loaded',
			data: 'completed'
		});
	}

};