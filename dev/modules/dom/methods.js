export const init = function(){
	
	this.listens()
   //  this.emit({type:'get-component-name',data: ''})

}


export const listens = function(){
   
   var sb = this.sb 
   // var name = 'render-component-'+name
   sb.sb_notifyListen({
	   
		'add-dom-component' : this.handleAddDomComponent.bind(this)
   
	   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		},)
	   

}

export const handleAddDomComponent = function(data){
   
   var sb = this.sb 
   console.log('The Dom View')
   console.log(sb)
   console.log(sb.view)
   console.log('The Dom Child View')
   console.log(data)
   sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})

}


export const handleComponentRender = function(evt ){
	 
	 this.evt.data.name()
	 

}
