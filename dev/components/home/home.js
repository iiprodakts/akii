
import * as methods from "./methods"
import  actions from './actions'
import  reducer from './reducer'

class Home{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.actions = actions
    this.reducer = reducer

    console.log('Home ACTIONS')
    console.log(actions)
    console.log(this.actions)


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
    this.createTrunk = methods.createTrunk
    this.render = methods.render
   

  }

  

}

export default Home