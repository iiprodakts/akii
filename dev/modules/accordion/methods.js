


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

export const getParent = function(){
			
			
   var sb = this.sb
   
   var parent = sb.sb_createElement('div')
   sb.sb_addProperty(parent,'class','accordion accordion--vt-size-fd-bt accordion--bg-secondary accordion--pos-rel accordion--hr-size-fl-x-bg mg-auto mg-bottom-fd-xx-tn')
   
	return parent
		
	
}


export const createBar = function(){
			
			
   var sb = this.sb
   
   var bar = sb.sb_createElement('div')
   sb.sb_addProperty(bar,'class','accordion__text')
   
	return bar
		
	
}

export const createTitle = function(data){
			
   var sb = this.sb
   
   var title = sb.sb_createElement('p')
   sb.sb_addProperty(title,'class','accordion__text-node pos-abs fg-general-alt font-fd-xx-tn')
   sb.sb_insertInner(title,data)
   
   return title

}

export const createController = function(){
			
   var sb = this.sb
   
   var btn  = sb.sb_createElement('button')
   sb.sb_addProperty(btn,'class','accordion__btn--exp-con top-offset-fl-tn right-offset-fl-bt')
   sb.sb_insertInner(btn,'+')
   
  
   return btn
}




export const handleCreateAccordion = function(data){

	// console.log('Create Modal event has occured')
	// console.log(data)
	this.createAccordion(data)

}



export const createAccordion = function(data){

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

export const expand = function(content,controller){

 var sb = this.sb 

 console.log('The content element')
 console.log(content)
 
 if(controller.innerHTML.trim() === '+'){
 	
 	    controller.innerHTML = '-'
 	
 }else{
 	
  	controller.innerHTML = '+'
 }
 var classList = sb.sb_getClasses(content)
 sb.sb_toggleClass(classList,'d-none')
 

}