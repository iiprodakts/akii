
import * as methods from "./methods"

class Vd{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.virtualDom = []

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleAddDomToVd = methods.handleAddDomToVd
    this.randomNodeId = methods.randomNodeId
    this.addDomToVd = methods.addDomToVd
    this.createVdChidren = methods.createVdChildren
    // this.handleComponentRender = methods.handleComponentRender
    

  }

  

}

export default Vd