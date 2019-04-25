


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

    //  console.log('Referencing the emit')
    //  console.log(this.parent.emit)
     
    
     
     const trunk = this.parent.trunk
     const name = this.constructor.name.toLowerCase()
     this.parent.emit({type:'create-dom-tree',data:{

      
      route: self.parent.hasOwnProperty('handleRouteComponent') ? true : false,
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
                                data: {
                                  type: 'datum',
                                  data: state['todo'].list.items,
                                },
                                presents: {

                                  class: "mg-bottom-fd-xx-tn list__item list__item list__item--ve list__item--border-bottom-secondary list__item--marg-offset-bottom-small",
                                },
                                
                                children: [


                                  {

                                    element: 'span',
                                    props: {
                    
                                      presentational: {
                                          set: true,
                                          presents: {
                                              class: "font-fd-x-tn d-inline-block hr-size-fl-xx-md"
                                            

                                          }
                                      },
                    
                                      functional:{
                    
                                        set: false
                                     
                                        
                                      }
                                    }

                                  },
                                  {

                                    element: 'button',
                                    props: {
                    
                                      presentational: {
                                          set: true,
                                          presents: {
                                              class: "font-fd-xx-tn d-inline-block hr-size-fl-xx-sm fg-red",
                                              content: "x"
                                            
                                          }
                                      },
                    
                                      functional:{
                    
                                        set: true,
                                        event: {
        
                                            click:{
        
                                                type: 'click',
                                                callback: this.removeItem.bind(this)
                                            }
                                        }
                                        
                                      }
                                    }

                                  }
                                ]
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

  removeItem(e){

   
    console.log('THE REMOVE ITEM EVENT HAS OCCURED')
  
  
      var sb = this.parent.sb
      var btn = e.target
      var li = sb.sb_getParent(btn)
      var ul = sb.sb_getParent(li)
      var index = 0

      console.log(ul.children.length)

      for(let c = 0; c < ul.children.length; c++){

        if(ul.children[c] === li){

          console.log('The current list index')
          console.log(c)

          index = c
          break;
        }
      }

      var val = index
  
      sb.sb_preventNormal(e)
  
      this.parent.emit({type: 'action-dispatch',data: {
  
        type: 'REMOVE_ITEM',
        component: 'todo',
        data: {
  
          id: 'list',
          payload: val
        }
  
      }})
  
  
      
  }

  

  

}

export default List