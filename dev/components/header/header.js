
import * as methods from "./methods"
import  actions from './actions'
import  reducer from './reducer'
import Left from './components/left'
import Right from './components/right'
// import Count from './components/count'


class Header{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.actions = actions
    this.reducer = reducer
    this.trunk = null
    this.children = [

      new Left(this),
      new Right(this)
      // new Form(this)

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
    this.handleMergeComponent = methods.handleMergeComponent
    this.mergeComponent = methods.mergeComponent
   

  }

  

}

export default Header