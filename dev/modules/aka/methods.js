

export const init = function(){
	
	 console.log('Module: Aka, has been initialised')
	 this.listens()
}


export const listens = function(){
	
	var sb = this.sb 
	// console.log('AKA LISTENS TO THE CREATE DOM TREE EVENT')
	sb.sb_notifyListen({
		
		 'create-dom' : this.handleCreateDomTree.bind(this),
		 
		
	},sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var sb = this.sb
	console.log('Module: Aka emits event: '+ eNotifs.type) 
	console.log('Event data: '+eNotifs.data)
	console.log(eNotifs)
	
	
		
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

	// console.log('Data custom parent')
	// console.log(data)

	if(!(data.hasOwnProperty('trunk')) && (data.hasOwnProperty('vd'))){

		throw new Error('')
		
	}else{


		const sb = this.sb
		const trunk = data.trunk
		const vd = data.vd.children
		const rootName = vd.element

		let root = this.create(rootName,vd.vd.props.presentational,vd.vd.props.functional)
		const children = this.createChildren(root,vd.vd.children)
		root = this.addChildren(root,children)
		sb.sb_addChild(trunk,root)

		this.domTreeCreated({trunk: trunk,domId:{

			view: data.vd.view,
			children: [
  
			  {

			  name: vd.name,
			  dom: root
			  
			  }
  
		 ]}})
  

	}



	

	// console.log('The vd ')
	// console.log(vd)
	// var branch = data[rootName].name
	// var custom = `data-${trunk.id.toLowerCase()}`
	// var dataChildCustom = `${dataParentCustom}-${branch.toLowerCase()}`

	// console.log('Data custom parent')
	// console.log(`${dataParentCustom}`)
	// console.log('Data branch thing')
	// console.log(`${dataChildCustom}`)
	// console.log(branch)
	//   console.log(rootName)

	 
	//   var root = this.addChildren(root,childr)


	
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

			console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
			if(p === 'emit'){

				// console.log('The data of emit property')
				// console.log(ops.meta[p])
				console.log('THE CURRENT ELEMENT CONTAINS THE EMIT FUNCTIONALITY FUNCTIONALITY')
				if(ops.meta[p].hasOwnProperty('presents') && ops.meta[p].hasOwnProperty('children')){

					console.log('The style string')
					let presents = ops.meta[p].presents
					let children = ops.meta[p].children
					console.log(presents)
					console.log(children)

					this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents,children: children}})

				}else if(ops.meta[p].hasOwnProperty('presents') ){

					console.log('The style string')
					let presents = ops.meta[p].presents

					console.log(presents)
					

					this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,presents: presents}})
					

				}else if(ops.meta[p].hasOwnProperty('children')){

					console.log('The children string')
					
					let children = ops.meta[p].children
					
					console.log(children)

					this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data,children: children}})

				}else{

					
					this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data.data}})

				}
				
			}else if(p === 'event'){

				for(let p in ops.event){

					//    console.log('The data of event property')
					//    console.log(ops.event[p])
						 sb.sb_addEvent(el,ops.event[p].type,ops.event[p].callback)
						 // this.emit({type: ops.meta[p].type,data: {parent: el,data: ops.meta[p].data}})
						 
					 }
			}

			
		}

	}
	
	
	return el
}

export const domTreeCreated = function(dom){
	  
	this.emit({type: 'dom-tree-created',data: dom })

}