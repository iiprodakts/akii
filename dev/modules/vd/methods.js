

export const init = function(){
   
  
	this.listens()
   //  this.emit({type:'get-component-name',data: ''})

}


export const listens = function(){
   
   var sb = this.sb 
   // var name = 'render-component-'+name
   sb.sb_notifyListen({
	   
      'create-dom-tree' : this.handleCreateDomTree.bind(this),
      'dom-tree-created' : this.handleDomTreeCreated.bind(this),
   
	   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		},)
	   

}

export const handleCreateDomTree = function(data){
   
   var sb = this.sb 
    
   //  console.log('The Virtual Dom')
   //  console.log(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

   this.beginDomiks(data)

}

export const handleDomTreeCreated = function(data){
   
   var sb = this.sb 
   this.domTreeCreated(data)

   // if(!sb.view.contains(data)){

   // 	sb.sb_addChild(sb.view,data)
   // 	this.emit({type:'stop-preloader',data:''})
   //     this.emit({type:'create-links',data:''})


   // }
  
   
   
}

export const domTreeCreated = function(data){

    const self = this
    this.saveDOM(data)
   
    
}


export const beginDomiks = function(data){
   
   var sb = this.sb 
    console.log('The Virtual Dom Begin Domiks')
    console.log(data)
    this.checkVD(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

}

export const checkVD = function(data){
   
   var sb = this.sb
   var vod = this.virtualDom 
   // console.log('The Virtual Dom Testing console')
   // console.log(data)
   // console.log(sb.sb_jsToJson(this.virtualDom))
   // console.log('The length of vod')
   // console.log(this.virtualDom.length)
    
   if(vod.length > 0){

      console.log('The virtual dom contains a vod')
      for(let c = 0; c < vod.length; c++){


         if(vod[c].view === data.trunk.id){

            for(let vdC = 0; vdC < vod[c].children.length; vdC++){


               if(vod[c].children[vdC].name === data.name){

                   console.log('The old Virtual Dom real Dom')
                   console.log('We have a this component, lets start diffing')
                   console.log(sb.sb_jsToJson(vod))
                   console.log('The VD of the new thing')
                   console.log(sb.sb_jsToJson(data[Object.keys(data)[2]]))
                  console.log(this.realDom[c].children[vdC])
                   this.startDiffing({
                      oldVd: vod[c].children[vdC],
                      oldVdDom: this.realDom[c].children[vdC],
                      newVd: data
                     })

                  // if(vod[c].children[vdC].vd === data[Object.keys(data)[2]]){

                  //    console.log('The old vd is equal to the new Vd, references might be the reason')
                  // }
                 
                  break
               }else if(vdC === vod[c].children.length - 1){

                  console.log(`Another child of the ${data.trunk.id} to be added: ${data.name}`)
                  vod[c].children.push({

                     name: data.name,
                     element: Object.keys(data)[2],
                     vd: Object.assign({},data[Object.keys(data)[2]])
                  })

                   let index = vod[c].children.length - 1
                  // this.createDomTree({vd:vd[c].children,trunk: data.trunk})
                  this.createDomTree({vd:{view: vod[c].view,children: vod[c].children[index]},trunk: data.trunk})


                  console.log('The structure of the vod now:')
                  console.log(vod)
                  console.log('vod with this')
                  console.log(this.virtualDom)
                  break
               }
               


            }

            break

         }else if(c === vd.length - 1){


            vod.push({

               view: data.trunk.id,
               children: [
   
                  {
   
                     name: data.name,
                     element: Object.keys(data)[2],
                     vd: Object.assign({},data[Object.keys(data)[2]])
                  }
   
               ]
   
            })

            let index = vod.length - 1
            // this.createDomTree({vd:vd[c].children,trunk: data.trunk})
            this.createDomTree({vd:{view: vod[index].view,children: vod[index].children[0]},trunk: data.trunk})

         }

      }

   }else{

      // console.log('The virtual dom contains no vd')
      // console.log('The virtaual dom object has no children at this point')
      // console.log(sb.sb_jsToJson(vd))
      // console.log(vd.length)
      vod.push({

            view: data.trunk.id,
            children: [

               {

                  name: data.name,
                  element: Object.keys(data)[2],
                  vd: Object.assign({},data[Object.keys(data)[2]])
               }

            ]

      })

      // console.log('The virtaual dom object has a child at this point')
      // console.log(sb.sb_jsToJson(vd))
      // console.log(vd.length)
      this.createDomTree({vd:{view: vod[0].view,children: vod[0].children[0]},trunk: data.trunk})
   }



   

}
export const checkDOM = function(data){
   
   var sb = this.sb
   


   

}

export const startDiffing = function(data){
   
   this.diff(data)
   
}

export const diff = function(data){

   console.log('DIFF')
   console.log(data)

   const k = Object.keys(data.newVd)[2]
   const oldVd = data.oldVd
   const newVd = data.newVd
   
    if(oldVd.element === k){

         this.childDiff(oldVd.vd.children,newVd[k].children,data.oldVdDom.dom.children)

    }else{

       
      // this.saveVD()
    }
   

}

export const childDiff = function(oldChs,newChs,domChs){
   
   const sb = this.sb
   // console.log('New vd')
   // console.log(domChs)

   if(oldChs.length === newChs.length){

      for(let c= 0; c < oldChs.length; c++){

         if(oldChs[c].element === newChs[c].element){

            const oPres = oldChs[c].props.presentational
            const nPres =  newChs[c].props.presentational 
            const oFunks= oldChs[c].props.functional
            const nFunks =  newChs[c].props.functional 

            if(oPres.set && nPres.set){

               console.log('Presentation sets')

               if(oPres.hasOwnProperty('presents') && nPres.hasOwnProperty('presents')){
                  
                   const oPresPsts = oPres.presents
                   const nPresPsts = nPres.presents
                  if(oPresPsts.hasOwnProperty('content') && nPresPsts.hasOwnProperty('content')){

                     console.log('content propter exists')


                     if(oPresPsts.content !== nPresPsts.content){

                           console.log('INSIDE CONTENT BEING DIFFERENT')
                           domChs[c].innerHTML = nPresPsts.content
                           oldChs[c].props.presentational.presents.content = nPresPsts.content
                     }

                  }
               }
            }
            
            if(oFunks.set && nFunks.set){

               console.log('The o and n  funks ')
               console.log(oFunks)
               console.log(nFunks)
               if(oFunks.meta.hasOwnProperty('emit') && nFunks.meta.hasOwnProperty('emit')){

                  if(oFunks.meta.emit.data instanceof Array && oFunks.meta.emit.data.length > 2){

                      console.log('The type of data in here is ')
                      console.log(oFunks.meta.emit.data)
                      console.log(nFunks.meta.emit.data)

                     if(oFunks.meta.emit.data === nFunks.meta.emit.data){

                           console.log('The two arrays reference the same object in memory')
                        for(let p=0; p < oFunks.meta.emit.data.length; p++){

                           if(oFunks.meta.emit.data[p] !== nFunks.meta.emit.data[p]){

                              console.log('THE LENGH OFUNKS AND NFUNKS IS DIFFERENT')
                              
                           
                              oFunks.meta.emit.data[p] = nFunks.meta.emit.data[p]
                              domChs[c].children[p].innerHTML = nFunks.meta.emit.data[p]

                           }

                        }
                     }else if(oFunks.meta.emit.data.length > nFunks.meta.emit.data.length){

                        console.log('The data is not the same')
                        domChs[c].children[oFunks.meta.emit.data.length - 1].remove()

                     }else if(oFunks.meta.emit.data.length < nFunks.meta.emit.data.length){

                        let el = sb.sb_CopyDeep(domChs[c].children[0])
                        sb.sb_insertInnert(el,nFunks.meta.emit.data[p])
                        sb.sb_addChild(domChs[c],el)

                     }

                  }else{


                  }
               }

            }

            if(oldChs[c].hasOwnProperty('children') && newChs[c].hasOwnProperty('children')){
              
               
               this.childDiff(oldChs[c].children,newChs[c].children,domChs[c].children)
            }
         }

      }
   }
   

}

export const propsDiff = function(data){
   
   var sb = this.sb 
    console.log('The Virtual Dom')
    console.log(data)
    this.saveVD(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

}

export const textDiff = function(data){
   
   var sb = this.sb 
    console.log('The Virtual Dom')
    console.log(data)
    this.saveVD(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

}

export const saveVD = function(data){
   
   var sb = this.sb 
    console.log('The Virtual Dom To Save')
    console.log(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

}

export const saveDOM = function(data){
   
   var sb = this.sb 
    console.log('The Dom To Save')
    console.log(data)

    
    console.log('The real dom')
    console.log(this.realDom)

    if(this.realDom.length > 0){


       for(let d = 0; d < this.realDom.length; d++){

         if(this.realDom[d].view === data.domId.view){

            this.realDom[d].children.push(data.domId.children[0])
            break
            
         }else if(d === this.realDom.length - 1){

            this.realDom.push(data.domId)
         }
       }
       

    }else{

      this.realDom.push(data.domId)

    }
    this.emit({type: 'add-dom-component',data: data.trunk})
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
   //  this.createDomTree(data)

}


export const createDomTree = function(data){
   
   var sb = this.sb 
    console.log('The Current VirtualDom')
    console.log(data)

    this.emit({type: 'create-dom',data:data})
 

}

export const handleAddVirtualDom = function(data){
   
   var sb = this.sb 
    console.log('The Virtual Dom')
    console.log(data)
   // console.log(sb)
   // console.log(sb.view)
   // console.log('The Dom Child View')
   // console.log(data)
   // sb.sb_addChild(sb.view,data)
   // this.emit({type:'stop-preloader',data:''})
    this.addVirtualDom(data)

}


export const addVirtualDom = function(data){
    
   
   const self = this
   //this.nodeRandomId()
   // 

   //   this.emit({type:'add-dom-component',data:data.data})

     console.log('The data passed to the addVirtualDom')
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

export const handleAddDom = function(data){
   
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


export const addDom = function(data){
    
   
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



