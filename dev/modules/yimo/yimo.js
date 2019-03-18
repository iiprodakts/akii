
import * as methods from "./methods"

class Yimo{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.getParent = methods.getParent
    this.createBar = methods.createBar
    this.createTitle = methods.createTitle
    this.createController = methods.createController
    this.handleCreateAccordion = methods.handleCreateAccordion
    this.createAccordion = methods.createAccordion
    this.expand = methods.expand

  }

  

}

export default Yimo