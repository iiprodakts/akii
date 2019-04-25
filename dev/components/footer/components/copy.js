


class Copy{
  
  
    constructor(home){
  
      
      this.build = this.build
      this.parent = home
  
      // this.reducers = reducers
  
    }
  
    build(state){
  
      const trunk = this.parent.trunk
      const name = this.constructor.name.toLowerCase()
      this.parent.emit({type:'create-dom-tree',data:{
 
       trunk: trunk,
       name: name,
       div:{
           
          
           props: {
 
               presentational:{
 
                   set:true,
                   presents:{
 
                   class: "hr-size-fl-sm pos-rel pd-left-fl-bt"
                  
 
                   }
               },
               functional:{
 
                   set: false,
 
               }
              
           },
           children:[
 
            
               {
 
                 element: 'p',
                 props: {
 
                     presentational: {
                         set: true,
                         presents: {
                             class: "mg-bottom-fd-tn font-fd-tn fg-primary font-wt-bolder",
                             content: 'I am the footer' 
                         }
                    },
 
                    functional:{
 
                     set: false
                     
                    }
                 }
                
               },
           
             
           ]
 
       }
 
 
 }})
  
    }
  
    
  
    
  
  }
  
  export default Copy