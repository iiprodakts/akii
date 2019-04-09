
export const init = function(){
	
	console.log('Module: List, has been initialised')
	this.listens()
   //  this.emit({type:'get-component-name',data: ''})

}


export const listens = function(){
   
   var sb = this.sb 
   sb.sb_notifyListen({
	   
		'create-list' : this.handleCreateList.bind(this)
   
	   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		},)
	   

}

export const handleCreateList = function(data){
   
   // var sb = this.sb 
   this.createList(data)

}


export const createList = function(data){
	 
		console.log('THE LIST DATA')
		console.log(data)
		
		const sb = this.sb
		let descends = []
		for(let d = 0; d < data.data.length; d++){


				let el = this.create('li')
				sb.sb_insertInner(el,data.data[d])
				descends.push(el)
				data.hasOwnProperty('children') ? this.createChildren(el,data.children): ''

		}

		this.addChildren(data.parent,descends)


}

export const create = function(name,props,ops){

	// console.log('Create')
	// console.log(props)
	const sb = this.sb 
	let el = {}
	if(props){


		let sb = this.sb  
		el = this.addProps(this.addOps(sb.sb_createElement(name),ops),props)
		//  var el = this.addProps(el,props.presentational)

	}else{


		  el = sb.sb_createElement(name)

	}


	 return el
	

}

export const createChildren = function(root,children){
	  
	


	var sb = this.sb
	var descends = []  
	

	for(let c=0; c < children.length; c++){

		var e = children[c]
		// console.log('The current child props property')
		// console.log(e.props)
		var el = this.create(e.element,e.props.presentational,e.props.functional)

		if(e.children){

			console.log('The current element has children')
			console.log(e.children)
			sb.sb_addChild(root,el)
			this.createChildren(el,e.children)


		}else{

			console.log('The last innermost element has no children')
			sb.sb_addChild(root,el)

		}

		descends.push(el)

	}

	return descends

	
	

}

export const addChildren = function(parent,children){
	 
	console.log('Add children list runs')
	console.log(parent)
	console.log(children)
   var sb = this.sb

   for(let c=0; c < children.length; c++){

		console.log(c)
		console.log(children[c])
		sb.sb_addChild(parent,children[c])
		console.log(parent)
	}
	
	console.log('list parent')
	console.log(parent)
   

    return parent
   

}

export const addProps = function(el,props){
	 
	 
   var sb = this.sb

//    console.log('ADD PROPS')
//    console.log(props)
//    console.log(el)
   
   if(props.set){

	   for(let p in props.presents){

		   if(p === 'content'){

			   sb.sb_insertInner(el,props.presents[p])
		   }else{

			   sb.sb_addProperty(el,p,props.presents[p])

		   }

		   
	   }

   }
   
   
   return el
}

export const addOps = function(el,ops){
	  
	  
	var sb = this.sb

	// console.log('ADD OPS')
	// console.log(ops)
	// console.log(el)
	
	if(ops.set){

		console.log('THE ADD OPPS IS SET')
		console.log(el)
		console.log(ops)


		if(ops.hasOwnProperty('meta')){

			for(let p in ops.meta){

				if(p === 'emit'){
	
					// console.log('The data of emit property')
					// console.log(ops.meta[p])
					
					if(ops.meta[p].hasOwnProperty('style')){
	
						console.log('The style string')
						let style = ops.meta[p].style
						console.log(style)
	
						this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data,style: style}})
	
					}else{
	
						this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
	
					}
					
				}
	
				
			}

		}else if(ops.hasOwnProperty('event')){

			console.log('The event property')
			for(let p in ops.event){

				//    console.log('The data of event property')
				//    console.log(ops.event[p])
					 el.hasEvents = true
					 el.events = {type: ops.event[p].type, callback: ops.event[p].callback}
					 sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
					 // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
					 
			}
				
		}
	

	}
	
	
	return el
}

export const listCreationDone = function(data){
	 
   this.emit({type: 'list-creation-done',data: data })
}
