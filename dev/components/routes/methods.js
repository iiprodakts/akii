

export const init = function(){
    
    var self = this
    

    // console.log('The list')
    // console.log(this.list)
    // this.list.build(self)
     this.listens()
  
   
   //  this.emit({type:'component-mount',data: this.build})
   //  this.emit({type:'get-component-name',data: ''})


}

export const start = function(){

    const self = this
    self.emit({type: 'create-routes',data: {

        routes: self.routes
    }})

 
}

export const listens = function(){
   
   
   var sb = this.sb 
   // var name = 'render-component-'+this.componentname
   sb.sb_notifyListen({

        'merge-component' : this.handleMergeComponent.bind(this),
        // 'route-components': this.handleRouteComponents.bind(this)
        
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
        console.log('The value of this in emit')
         var sb = this.sb 
         console.log(eNotifs)
   
       sb.sb_notifyEvent({
       
             type: eNotifs.type,
             data: eNotifs.data
       
        })
       

}

export const handleMergeComponent = function(data){
   
    var sb = this.sb 
 
    this.mergeComponent(data)
 
    // if(!sb.view.contains(data)){
 
    // 	sb.sb_addChild(sb.view,data)
    // 	this.emit({type:'stop-preloader',data:''})
    //     this.emit({type:'create-links',data:''})
 
 
    // }
   
    
    
 }
 
export const mergeComponent = function(data){
    
     var sb = this.sb
     var self = this
  
    
   
 
     if (data.hasOwnProperty('components')){
 
 
         for(let i = 0; i < data.components.length; i++){
 
 
 
             if(data.components[i] === this.constructor.name.toLowerCase() ){
 
                 console.log('The value of this in Footer')
                 console.log(self)
                 // if(i === data.components.length -1){
 
                 //     console.log('On Footer,merging ends')
                 //     self.emit({type:'component-merged',data:{
 
                 //         component: self,
                 //         complete: true
 
                 //     }})
 
                 // }else{
 
                     self.emit({type:'component-merged',data:{
 
                         component: self
                     }})
                 //}
                
 
 
 
                 // data.components.splice(i,1)
                 break;
                 
                 
             }
 
         }
 
      } 
      
 
     // data.hasOwnProperty('components') && data.components.length > 0 ? 
     
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
    
}
