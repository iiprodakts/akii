
import * as methods from "./methods"
import  actions from './actions'
import  reducer from './reducer'
import List from './components/list'
import Form from './components/form'
import Count from './components/count'


class Todo{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.actions = actions
    this.reducer = reducer
    this.trunk = null
    this.children = [

      new List(this),
      new Count(this),
      new Form(this)

    ]
    


    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.start = methods.start
    this.emit = methods.emit
    this.handleDomTreeCreated = methods.handleDomTreeCreated
    this.domTreeCreated = methods.domTreeCreated
    this.messenger = methods.messenger
    this.evs = methods.evs
    this.functions = methods.functions
    this.build = methods.build
    this.createTrunk = methods.createTrunk
    this.render = methods.render
    this.handleRouteComponent = methods.handleRouteComponent
    this.routeComponent = methods.routeComponent

   
   

  }

  

}

export default Todo