


class List{
  
  
  constructor(home){

    
   
    this.parent = home
    this.initState = {
      items:[

        "strong",
        "light on me",
        "save me"
      ]
    }


    // this.reducers = reducers

  }

 

  build(state){

     console.log('Referencing the emit')
     console.log(this.parent.emit)
     
     const trunk = this.parent.trunk
     const name = this.constructor.name
     this.parent.emit({type:'create-dom-tree',data:{

      trunk: trunk,
      div:{
          
          //name: name,
          props: {

              presentational:{

                  set:true,
                  presents:{

                  class: "hr-size-fl-lg top-offset-vh-tn mg-bottom-fd-h pos-rel pd-left-fl-bt"
                 

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
                              content: "Done List"
                             
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
                            class: "mg-bottom-fd-tn",
                            content: "A list of things that you have achieved today"
                           
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
                            class: "mg-bottom-fd-sm font-wt-bolder",
                            content: "Note: this is a protoype"
                           
                        }
                   },

                   functional:{

                    set: false
                    
                   }
                }
               
              },
              {

                element: 'div',
                props: {

                    presentational: {
                        set: true,
                        presents: {
                            class: "bg-light",
                           
                        }
                   },

                   functional:{

                    set: false
                    
                   }
                },
                children:[

                  {

                      element: 'h4',
                      props: {
      
                          presentational: {
                              set: true,
                              presents: {
                                  class: "font-fd-tn mg-bottom-fd-x-tn",
                                  content: "What you have done:"
                                
                              }
                        },
      
                        functional:{
      
                          set: false
                          
                        }
                      }
                    
                  },

                  {

                    element: 'ul',
                    props: {
    
                        presentational: {
                            set: true,
                            presents: {
                                class: "list list--none"
                                
                              
                            }
                      },
    
                      functional:{
    
                          set: true,
                          meta:{

                            emit: {
                                type: 'create-list',
                                data: state['todo'].list.items,
                                style: "mg-bottom-fd-xx-tn list__item list__item list__item--ve list__item--border-bottom-secondary list__item--marg-offset-bottom-small"
                            }

                          }
                        
                      }

                    }
                  
                }
              
                


                ]
               
              }
            
            
          ]

      }


}})

  }

  

  

}

export default List