
import * as methods from "./methods"

class Prowler{
  
  
  constructor(sandbox){

    this.sb = sandbox

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleProwlBrowser = methods.handleProwlBrowser
    this.prowlBrowser = methods.prowlBrowser
    this.startProwl = methods.startProwl
    this.handlePopState = methods.handlePopState
    this.addressChanged = methods.addressChanged
    

  }

  

}

export default Prowler