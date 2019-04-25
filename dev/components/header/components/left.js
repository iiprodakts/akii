


class Left{
  
  
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
       nav:{
           
          
           props: {
 
               presentational:{
 
                   set:true,
                   presents:{
 
                     class: "hr-size-fl-sm d-inline-block"
                  
 
                   }
               },
               functional:{
 
                   set: false,
 
               }
              
           },
           children:[
 
            {

                element: 'ul',
                props: {

                    presentational: {
                        set: true,
                        presents: {
                            class: "list list__hr"
                            
                          
                        }
                    },

                    functional:{

                        set: false,
                        
                        
                    }

                },

                children:[


                    {
              
                       element: 'li',
                       props: {
              
                           presentational: {
                               set: true,
                               presents: {
                                   class: "fg-light hr-size-fl-tn list__item list__item list__item--marg-offset-bottom-small"
                               }
                          },
              
                          functional:{
                             set: false
                          }
                       },
                       children:[
              
                         {
              
                             element: 'a',
                             props: {
              
                                 presentational: {
                                     set: true,
                                     presents: {
                                         class: "font-fd-xx-tn fg-light d-inline-block link",
                                         content: "072 415 6969",
                                         href: '/home'
                                       
                                     }
                                 },
                                 functional: {
                                    set: true,
                                    meta: {
                                        emit: {
                                            type: 'router-link',
                                            data: {
                                            type: 'datum',
                                            data: {
                                                to: '/home'
                                            }
                                            }
                                        }
                                    }
                                 }
                             }
                           
                         }
              
                       ]
                      
                    },
                    {
              
                       element: 'li',
                       props: {
              
                           presentational: {
                               set: true,
                               presents: {
                                   class: "fg-light hr-size-fl-sm list__item list__item list__item--marg-offset-bottom-small"
                               }
                          },
                          functional: {
                             set: false
                          }
                       },
                       children:[
              
                         {
              
                             element: 'a',
                             props: {
              
                                 presentational: {
                                     set: true,
                                     presents: {
                                         class: "font-fd-xx-tn fg-light d-inline-block link",
                                         content: "Monday-Sat: 08am - 17 pm",
                                         href: '/about'
                                       
                                     }
                                 },
                                 functional:{
                                    set: true,
                                    meta: {

                                        emit: {
                                            type: 'router-link',
                                            data: {
                                              type: 'datum',
                                              data: {
                                                 to: '/about'
                                              }
                                            }
                                        }

                                    }
                                  
                                 }
                             }
                           
                         }
              
                       ]
                      
                    },
              
                    {
              
                       element: 'li',
                       props: {
              
                           presentational: {
                               set: true,
                               presents: {
                                   class: "fg-light hr-size-fl-tn list__item list__item list__item--marg-offset-bottom-small"
                               }
                           },
                           functional:{
                              set: false
                           }
                       },
                       children:[
              
                         {
              
                             element: 'a',
                             props: {
              
                                 presentational: {
                                     set: true,
                                     presents: {
                                         class: "font-fd-xx-tn d-inline-block fg-light link",
                                         content: "support@ibrc.co.za",
                                         href: '/contact'
                                       
                                     }
                                 },
                                 functional:{
                                    set: true,
                                    meta:{
                                        emit: {
                                            type: 'router-link',
                                            data: {
                                            type: 'datum',
                                            data: {
                                                to: '/contact'
                                            }
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
             
             
           ]
 
       }
 
 
 }})
  
    }
  
  }
  
  export default Left