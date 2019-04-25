
import * as methods from "./methods"


class Activator{
  
  
  constructor(sandbox,core){

    this.sb = sandbox
    this.core = core

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateActivate = methods.handleActivate
    this.activate = methods.activate
   

  }

  

}

export default Activator