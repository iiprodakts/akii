

export const init = function(){
	
	 console.log('Module: Aka, has been initialised')
	 this.listens()
}


export const listens = function(){
	
	var sb = this.sb 
	// console.log('AKA LISTENS TO THE CREATE DOM TREE EVENT')
	sb.sb_notifyListen({
		
		 'create-dom-tree' : this.handleCreateDomTree.bind(this),
		 
		
	},sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var sb = this.sb
	console.log('Module: Aka emits event: '+ eNotifs.type) 
	console.log('Event data: '+eNotifs.data)
	
	
		
		    sb.sb_notifyEvent({
		
		      type: eNotifs.type,
		      data: eNotifs.data
		
	     })
		

}

export const handleCreateDomTree = function(data){
	
	var sb = this.sb
	// console.log('The Create Dom TREE EVENT IS CAUGHT')
	this.createDomTree(data)
	
	
}

export const createDomTree = function(data){
	  
	  
	//   var dom = null

	const sb = this.sb
	var trunk = data.trunk
	var rootName = Object.keys(data)[1]
	var branch = data[rootName].name
	var custom = `data-${trunk.id.toLowerCase()}`
	// var dataChildCustom = `${dataParentCustom}-${branch.toLowerCase()}`

	// console.log('Data custom parent')
	// console.log(`${dataParentCustom}`)
	// console.log('Data branch thing')
	// console.log(`${dataChildCustom}`)
	// console.log(branch)
	//   console.log(rootName)

	  var root = this.create(rootName,data[rootName].props.presentational,data[rootName].props.functional)
	  var children = this.createChildren(root,data[rootName].children)
	  var root = this.addChildren(root,children)
	   sb.sb_addChild(trunk,root)
	//   var root = this.addChildren(root,children)


	   this.domTreeCreated({trunk: trunk,branch: branch})

}

export const create = function(name,props,ops){

	// console.log('Create')
	// console.log(props)
	var sb = this.sb  
	var el = this.addProps(this.addOps(sb.sb_createElement(name),ops),props)
	//  var el = this.addProps(el,props.presentational)

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
	  
	var sb = this.sb

	for(let c=0; c < children.length; ++c){

		sb.sb_addChild(parent,children[c])
	}
	

	 return parent
	

}

export const addProps = function(el,props){
	  
	  
	var sb = this.sb

	// console.log('ADD PROPS')
	// console.log(props)
	// console.log(el)
	
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

	}
	
	
	return el
}

export const domTreeCreated = function(dom){
	  
	this.emit({type: 'dom-tree-created',data: dom })

}