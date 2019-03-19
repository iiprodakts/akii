
import * as methods from "./methods"
import notifier from './notifier'


class Store{
  
  
  constructor(sandbox){

    this.sb = sandbox 
    this.state = {}
    this.events = {}
    this.actions = {}
    this.reducers = {}


    this.events = notifier



    // // methods

     this.init = methods.init
     this.listens = methods.listens
     this.emit = methods.emit
     this.handleConnectToStore = methods.handleConnectToStore
     this.connectToStore = methods.connectToStore
     this.connect = methods.connect
     this.dispatch = methods.dispatch
     this.reduce = methods.reduce
    // this.createBar = methods.createBar
    // this.createTitle = methods.createTitle
    // this.createController = methods.createController
    // this.handleCreateAccordion = methods.handleCreateAccordion
    // this.createAccordion = methods.createAccordion
    // this.expand = methods.expand

  }


  

}

export default Store