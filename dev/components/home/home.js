
import * as methods from "./methods"
import * as actions from './actions'
import * as reducers from './reducers'

class Home{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.actions = actions
    this.reducers = reducers


    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleDomTreeCreated = methods.handleDomTreeCreated
    this.domTreeCreated = methods.domTreeCreated
    this.messenger = methods.messenger
    this.evs = methods.evs
    this.functions = methods.functions
    this.build = methods.build
   

  }

  

}

export default Home