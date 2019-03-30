
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
	 
	 console.log('THE LIST EVENT HAS OCCURED')
   //   var dom = null
	 
	  console.log('The data structure object')
      console.log(data)
   //   console.log(Object.keys(data))
   //   var rootName = Object.keys(data)[0]
	//   console.log(data)

	 var root = data.parent
	 var children = ''
	 if(data.hasOwnProperty('style')){


		  children = this.createChildren(root,data.data,data.style)
			
	 }else{

			console.log('The data object has no style property')
		  children = this.createChildren(root,data.data)

	 }
	//  var children = this.createChildren(root,data.data,)
	 this.addChildren(root,children)
   // //   var root = this.addChildren(root,children)



   //   this.domTreeCreated(root)

}


export const create = function(name = '',props = null,ops=null){

//    console.log('Create')
//    console.log(props)
  console.log('Creat list')
  console.log(name)
	var sb = this.sb 
	
	if(props){

		var el = this.addProps(this.addOps(sb.sb_createElement(name),ops),props)

	}else{

		var el = sb.sb_createElement(name)

		console.log('CREATE el')
		console.log(el)
	}
  
   //  var el = this.addProps(el,props.presentational)

	return el
   

}

export const createChildren = function(root,children,style = ''){
	 
   


	var sb = this.sb
	var descends = []  
	

	for(let c=0; c < children.length; c++){

		var e = children[c]
		// console.log('The current child props property')
		// console.log(e.props)
		var el = this.create('li')
		if(style){

			sb.sb_addProperty(el,'class',style)
		}

		sb.sb_insertInner(el,e)

		// if(e.children){

		// 	console.log('The current element has children')
		// 	console.log(e.children)
		// 	sb.sb_addChild(root,el)
		// 	this.createChildren(el,e.children)


		// }else{

		// 	console.log('The last innermost element has no children')
		// 	sb.sb_addChild(root,el)

		// }

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

//    console.log('ADD OPS')
//    console.log(ops)
//    console.log(el)
   
   if(ops.set){


	   for(let p in ops.event){

		//    console.log('The data of event property')
		//    console.log(ops.event[p])
		   sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
		   // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
		   
	   }

   }
   
   
   return el
}

export const listCreationDone = function(data){
	 
   this.emit({type: 'list-creation-done',data: data })
}
