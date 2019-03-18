
import * as methods from "./methods"

class Form{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateForm = methods.handleCreateForm
    this.createForm = methods.createForm
    this.create = methods.create
    this.createChildren = methods.createChildren
    this.addChildren = methods.addChildren
    this.addProps = methods.addProps
    this.addOps = methods.addOps
    this.formCreationDome = methods.formCreationDone

  }

  

}

export default Form