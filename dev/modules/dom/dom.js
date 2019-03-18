
import * as methods from "./methods"

class Dom{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleAddDomComponent = methods.handleAddDomComponent
    this.handleComponentRender = methods.handleComponentRender
    

  }

  

}

export default Dom