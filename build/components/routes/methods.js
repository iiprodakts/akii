"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeComponent = exports.handleMergeComponent = exports.emit = exports.listens = exports.start = exports.init = void 0;

var init = function init() {
  var self = this; // console.log('The list')
  // console.log(this.list)
  // this.list.build(self)

  this.listens(); //  this.emit({type:'component-mount',data: this.build})
  //  this.emit({type:'get-component-name',data: ''})
};

exports.init = init;

var start = function start() {
  var self = this;
  self.emit({
    type: 'create-routes',
    data: {
      routes: self.routes
    }
  });
};

exports.start = start;

var listens = function listens() {
  var sb = this.sb; // var name = 'render-component-'+this.componentname

  sb.sb_notifyListen({
    'merge-component': this.handleMergeComponent.bind(this) // 'route-components': this.handleRouteComponents.bind(this)

  }, sb.moduleMeta.moduleId, sb.moduleMeta.modInstId);
};

exports.listens = listens;

var emit = function emit(eNotifs) {
  console.log('The value of this in emit');
  var sb = this.sb;
  console.log(eNotifs);
  sb.sb_notifyEvent({
    type: eNotifs.type,
    data: eNotifs.data
  });
};

exports.emit = emit;

var handleMergeComponent = function handleMergeComponent(data) {
  var sb = this.sb;
  this.mergeComponent(data); // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }
};

exports.handleMergeComponent = handleMergeComponent;

var mergeComponent = function mergeComponent(data) {
  var sb = this.sb;
  var self = this;

  if (data.hasOwnProperty('components')) {
    for (var i = 0; i < data.components.length; i++) {
      if (data.components[i] === this.constructor.name.toLowerCase()) {
        console.log('The value of this in Footer');
        console.log(self); // if(i === data.components.length -1){
        //     console.log('On Footer,merging ends')
        //     self.emit({type:'component-merged',data:{
        //         component: self,
        //         complete: true
        //     }})
        // }else{

        self.emit({
          type: 'component-merged',
          data: {
            component: self
          }
        }); //}
        // data.components.splice(i,1)

        break;
      }
    }
  } // data.hasOwnProperty('components') && data.components.length > 0 ? 
  //     data.components.forEach((comp,i)=>{
  //         if(comp.component === this.constructor.name.toLowerCase() && i === comp.index ){
  //             console.log('The value of this in Footer')
  //             console.log(self)
  //             self.emit({type:'component-merged',data:{
  //                 component: self
  //             }})
  //             data.components.splice(i,1)
  //             break;
  //         }
  //     })
  // : console.log('The data object contains do data') 
  // console.log(data.components)
  // if(!sb.view.contains(data)){
  // 	sb.sb_addChild(sb.view,data)
  // 	this.emit({type:'stop-preloader',data:''})
  //     this.emit({type:'create-links',data:''})
  // }

};

exports.mergeComponent = mergeComponent;