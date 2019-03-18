
import * as methods from "./methods"

class Aka{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateDomTree = methods.handleCreateDomTree
    this.createDomTree = methods.createDomTree
    this.create = methods.create
    this.createChildren = methods.createChildren
    this.addChildren = methods.addChildren
    this.addProps = methods.addProps
    this.addOps = methods.addOps
    this.domTreeCreated = methods.domTreeCreated

  }

  

}

export default Aka