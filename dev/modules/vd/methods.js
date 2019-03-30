

export const init = function(){
   
  
	this.listens()
   //  this.emit({type:'get-component-name',data: ''})

}


export const listens = function(){
   
   var sb = this.sb 
   // var name = 'render-component-'+name
   sb.sb_notifyListen({
	   
		'add-domto-vd' : this.handleAddDomToVd.bind(this)
   
	   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		},)
	   

}

export const handleAddDomToVd = function(data){
   
   var sb = this.sb 
    console.log('The Dom Data')
    console.log(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
    this.addDomToVd(data)

}


export const addDomToVd = function(data){
    
   
   const self = this
   //this.nodeRandomId()
   // 

   //   this.emit({type:'add-dom-component',data:data.data})

     console.log('The data passed to the addDomTovd')
     console.log(data)
   //   console.log(data.data.children[0].attributes[0].value)




   if(this.virtualDom.length > 0){

      console.log('Nothing')
   }else{

      console.log('Trunk children')
      console.log(data.data.trunk.childNodes)

      let trunk = data.data.trunk

      this.virtualDom.push({

         trunk: {
   
            id: data.id,
            child:{
   
               id: data.id,
               children: [
   
                 {

                  id: data.data.branch,
                  name: trunk.childNodes[0].id,
                  children: self.createVdChildren(trunk.childNodes[0])

                  

                 }

               ]
   
   
   
               
            }
            
         }
   
      })

   }

   console.log('The virtual dom')
   console.log(this.virtualDom)
   
   
   

}




export const createVdChildren = function(root,children){
	  
	


	var sb = this.sb
   var descends = []  
   
   // Array.prototype.map.call(trunk.childNodes[0].childNodes,(c)=>{

   //    console.log('THE VALUE OF IN TRUNK CHILDREN')
   //    console.log(c)

   //    if(Object.keys(c.childNodes).length > 0){


   //    }

   //    // return {


   //    // }
   // })
	

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




export const  nodeRandomId = (node)=>{


      console.log('Random unique Ids')

      console.log(`The random list number`)
      const sb = this.sb
      let randomid = `node-${Math.floor(0 + (100000-0) * Math.random()).toString()}-k`
      sb.sb_addProperty(node,'data-id',randomid)

      return node





     

 }

 export const  uniqueids = (node)=>{


 }



