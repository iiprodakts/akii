
import * as methods from "./methods"
import notifier from './notifier'


class Store{
  
  
  constructor(sandbox){

    this.sb = sandbox 
    this.state = {}
    this.actions = {}
    this.reducers = {}
    this.evts = {}
    this.evts[notifier.listen.name] = notifier.listen.bind(this)
    this.evts[notifier.emit.name] = notifier.emit.bind(this)
    this.evts.events = notifier.events



    // // methods

     this.init = methods.init
     this.listens = methods.listens
     this.emit = methods.emit
     this.handleConnectToStore = methods.handleConnectToStore
     this.connectToStore = methods.connectToStore
     this.handleSubscribeToStore = methods.handleSubscribeToStore
     this.handleActionDispatch = methods.handleActionDispatch
     this.actionDispatch = methods.actionDispatch
     this.subscribeToStore = methods.subscribeToStore
     this.connect = methods.connect
     this.dispatch = methods.dispatch
     this.reducer = methods.reducer
     this.setState = methods.setState
    // this.createBar = methods.createBar
    // this.createTitle = methods.createTitle
    // this.createController = methods.createController
    // this.handleCreateAccordion = methods.handleCreateAccordion
    // this.createAccordion = methods.createAccordion
    // this.expand = methods.expand

  }


  

}

export default Store