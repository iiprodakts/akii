


class Right{
  
  
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
                          class: "list__hr mg-left-fl-x-sm pos-rel"
                          
                        
                      }
                },

                functional:{

                    set: false
                
                  
                }

              },

              children:[


                {
          
                   element: 'li',
                   props: {
          
                       presentational: {
                           set: true,
                           presents: {
                               class: "list__item--hr-size-fl-x-tn"
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
                                     class: "font-fd-xx-tn d-inline-block link",
                                     href: 'http://www.facebook.com/company'
                                   
                                 }
                             },
                             functional: {
                                set: false
                             }
                         },
                         children:[

                            {
                              element: 'img',
                              props: {
              
                                  presentational: {
                                      set: true,
                                      presents: {
                                          class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                                          src: 'img/social/facebook.png'
                                        
                                      }
                                  },
                                  functional: {
                                    set: false
                                  }

                              }

                            }
                         ]
                       
                     }
          
                   ]
                  
                },
                {
          
                   element: 'li',
                   props: {
          
                       presentational: {
                           set: true,
                           presents: {
                            class: "list__item--hr-size-fl-x-tn"
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
                                     class: "font-fd-xx-tn d-inline-block link",
                                     href: 'http://www.twitter.com/company'
                                    
                                   
                                 }
                             },
                             functional:{
                                set: false
                             },
                         
                         },
                         children:[

                          {
                            element: 'img',
                            props: {
            
                                presentational: {
                                    set: true,
                                    presents: {
                                        class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                                        src: 'img/social/twitter.png'
                                      
                                    }
                                },
                                functional: {
                                  set: false
                                }
 
                            }
 
                          }

                         ]
                         
                       
                     }
          
                   ]
                  
                },
          
                {
          
                   element: 'li',
                   props: {
          
                       presentational: {
                           set: true,
                           presents: {
                            class: "list__item--hr-size-fl-x-tn"
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
                                     class: "font-fd-xx-tn d-inline-block link",
                                     href: 'http://www.googleplus.com/company'
                                     
                                 }
                             },
                             functional:{
                                set: false
                             }
          
          
                         },
                         children:[

                          {
                            element: 'img',
                            props: {
            
                                presentational: {
                                    set: true,
                                    presents: {
                                        class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                                        src: 'img/social/googleplus.png'
                                      
                                    }
                                },
                                functional: {
                                  set: false
                                }

                            }

                          }
                       ]
                       
                     }
          
                   ]
                  
                },
                {
          
                  element: 'li',
                  props: {
         
                      presentational: {
                          set: true,
                          presents: {
                               class: "list__item--hr-size-fl-x-tn"
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
                                    class: "font-fd-xx-tn d-inline-block link",
                                    href: 'http://www.instagram.com/company'
                                    
                                }
                            },
                            functional:{
                               set: false
                            }
         
         
                        },
                        children:[

                         {
                           element: 'img',
                           props: {
           
                               presentational: {
                                   set: true,
                                   presents: {
                                       class: "hr-size-fd-xxx-sm bd-rad-fl-md bd-fd-light-xx-bt",
                                       src: 'img/social/instagram.png'
                                     
                                   }
                               },
                               functional: {
                                 set: false
                               }

                           }

                         }
                      ]
                      
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

export default Right