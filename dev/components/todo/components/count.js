


class Count{
  
  
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
 
                   class: "hr-size-fl-sm d-inline-block top-offset-vh-xxx-tn mg-bottom-fd-h pos-rel pd-left-fl-bt"
                  
 
                   }
               },
               functional:{
 
                   set: false,
 
               }
              
           },
           children:[
 
               {
 
                   element: 'h1',
                   props: {
 
                       presentational: {
                           set: true,
                           presents: {
                               class: "mg-bottom-fd-xx-sm",
                               content: "You've Done:"
                              
                           }
                      },
 
                      functional:{
 
                       set: false
                       
                      }
                   }
                 
               },
               {
 
                 element: 'p',
                 props: {
 
                     presentational: {
                         set: true,
                         presents: {
                             class: "mg-bottom-fd-tn font-fd-tn fg-primary font-wt-bolder",
                             content: state['todo'].list.items.length
                            
                         }
                    },
 
                    functional:{
 
                     set: false
                     
                    }
                 }
                
               },
               {
 
                 element: 'h2',
                 props: {
 
                     presentational: {
                         set: true,
                         presents: {
                             class: "mg-bottom-fd-sm font-wt-bolder",
                             content: "Things today"
                            
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
  
  export default Count