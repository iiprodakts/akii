
import * as methods from "./methods"

class List{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateList = methods.handleCreateList
    this.createList = methods.createList
    this.create = methods.create
    this.createChildren = methods.createChildren
    this.addChildren = methods.addChildren
    this.addProps = methods.addProps
    this.addOps = methods.addOps
    this.listCreationDome = methods.listCreationDone

  }

  

}

export default List