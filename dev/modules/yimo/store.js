
import * as methods from "./methods"
// import notifier from './notifier'


class Store{
  
  
  constructor(sandbox){

    this.sb = sandbox 
    this.state = {}
    this.actions = {}
    this.reducers = {}
    this.supub = {}
  
    // console.log('THE STORE')
    // console.log(this.supub)
      console.log('THE STORE STATE PROPERTY')
    //  console.log(this.sb.sb_jsToJson(this.state))
      console.log(this.state)
    



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
     this.supubListen = methods.supubListen,
     this.supubEmit = methods.supubEmit
     this.initState = methods.initState
     this.unload = methods.unload
     this.rem = methods.rem

    //  console.log('The state property at the beginning')
    //  console.log(this.state)
    //  console.log(this.supub)
    

  }


  

}

export default Store