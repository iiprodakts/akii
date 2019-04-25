


class Form{
  
  
    
  constructor(home){

    
   
    this.parent = home
    this.initState = {
      form:[

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

                  class: "hr-size-fl-lg pd-left-fl-bt pos-rel mg-top-fd-md mg-bottom-fd-md"
                 

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
                              content: "Add new Item"
                             
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

                    element: 'form',
                    props: {
    
                        presentational: {
                            set: true,
                            presents: {
                                class: "form"
                                
                              
                            }
                      },
    
                      functional:{
    
                          set: true,
                          meta:{

                            emit: {
                                type: 'create-form',
                                data: {

                                    type: 'emit',
                                    data: this.form(state)
                                } 
                            
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


        
form(state){

    var that = this

    console.log('THE STATE IN THE FORM COMPONENT FORM METHOD')
    console.log(state)
    // console.log('The form component"s form method has been invoked')
    // console.log(that)
      // console.log('The value of t')
      // console.log(t)

    return     [

                    {
                        element: 'input',
                        name: 'Add Item',
                        props:{

                            presentational:{

                                set:true,
                                presents:{
                
                                    class: "bg-transparent hr-size-fl-xx-bg pd-fd-bt bd-none",
                                    type: 'text',
                                    placeholder:'Add done item',
                                    id:'add-itme',
                                    name: 'addv'
            
                                }
                            },
                            functional:{
            
                                set: false
            
                            }
                        },
                        parent:{

                            set: true,
                            element: 'p',
                            props:{

                                presentational:{

                                    set:true,
                                    presents:{
                
                                    class: "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
                                    id: "test-id"
                
                                    }
                                },
                                functional:{
                
                                    set: false,
                
                                }

                            },
                            children: [

                        
                                    {
                                        element: 'small',
                                        role: 'name',
                                        props:{

                                            presentational:{
                    
                                                set:true,
                                                presents:{
                            
                                                class: "d-block  mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary",
                                            
                            
                                                }
                                            },
                                            functional:{
                            
                                                set: false,
                            
                                            }
                    
                                        }

                                    },

                                    {
                                        element: 'span',
                                        role: 'input',
                                        props:{

                                            presentational:{
                    
                                                set:true,
                                                presents:{
                            
                                                class: "hr-size-fl-xx-bg text-align-center bg-dark-lta fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn",
                                                id: "test-id"
                            
                                                }
                                            },
                                            functional:{
                            
                                                set: false,
                            
                                            }
                    
                                        }

                                    }
                                
                                ]
                        }
                    },
                    
                    {
                        element: 'input',
                        name: '',
                        props:{

                            presentational:{

                                set:true,
                                presents:{
                
                                    class: "hr-size-fl-xx-bg bg-dark fg-light d-inline-block pd-fd-bt bd-none",
                                    type: 'submit',
                                    id:'address',
                                    value: 'Save'
            
                                }
                            },
                            functional:{
            
                                set: true,
                                event: {

                                    click:{

                                        type: 'click',
                                        callback: this.addItem.bind(this)
                                    }
                                }
            
                            }
                        },
                        parent:{

                            set: true,
                            element: 'p',
                            props:{

                                presentational:{

                                    set:true,
                                    presents:{
                
                                    class: "list__item list__item--ve list__item--marg-offset-bottom-small pd-left-fd-tn pd-top-fd-bt",
                                    id: "test-id"
                
                                    }
                                },
                                functional:{
                
                                    set: false,
                
                                }

                            }
                        }
                    }


                ]
}

          

addItem(e){

  console.log('The additem callback has been called on submit')
  console.log('THE ADD ITEM EVENT HAS OCCURED')


    var sb = this.parent.sb
    var p = sb.sb_getParent(e.target)
    var fm = sb.sb_getParent(p)

    var val = fm.addv.value
    fm.addv.value = ''

    sb.sb_preventNormal(e)

    this.parent.emit({type: 'action-dispatch',data: {

      type: 'ADD_ITEM',
      component: 'todo',
      data: {

        id: 'list',
        payload: val
      }

    }})


    // console.log('The name of the event')
    // console.log(e.type)
    // console.log('The event target')
    // console.log(e.target)

    

   



}

  
}
  
export default Form