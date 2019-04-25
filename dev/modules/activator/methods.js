


export const init = function(){
  
  
  console.log('Accordion has been initialised')
	this.listens()
	
}


export const listens = function(){
	
  var sb = this.sb 
  
  
	sb.sb_notifyListen({
		
		
		 'create-accordion': this.handleCreateAccordion.bind(this)
		 
	},sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var sb = this.sb 

	sb.sb_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

		})
	

}


export const handleCreateActivate = function(data){

	// console.log('Create Modal event has occured')
	// console.log(data)
	this.activate(data)

}



export const activate = function(data){

	var sb = this.sb
	
	if(Object.keys(data).length > 1){

		for(el in data){

			var parent = this.getParent()
			var bar = this.createBar()
			var title = this.createTitle(data[el].title)
			var controller = this.createController()
			
			sb.sb_addChild(parent,bar)
			sb.sb_addChild(parent,title)
			sb.sb_addChild(parent,controller)
			sb.sb_addChild(data[el].parent,parent)
			sb.sb_addChild(data[el].parent,data[el].content)

			console.log('The accordion content')
			console.log(data[el].content)
			
			sb.sb_addEvent(controller,'click',this.expand.bind(this,data[el].content,controller))

			this.emit({type: 'component-resource-creation-done',data: data[el].parent})
		}

	}else{

		var parent = this.getParent()
		var bar = this.createBar()
		var title = this.createTitle(data.title)
		var controller = this.createController()
		
		sb.sb_addChild(parent,bar)
		sb.sb_addChild(parent,title)
		sb.sb_addChild(parent,controller)
		sb.sb_addChild(data.parent,parent)
		sb.sb_addChild(data.parent,data.content)
		
		sb.sb_addEvent(controller,'click',this.expand.bind(this,data.content,controller))
		this.emit({type: 'component-resource-creation-done',data: data.parent})

	}

   
	
	
		
	 


}

