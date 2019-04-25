
import * as methods from "./methods"
// import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'


class Master{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.mergeComponents = []
    
    this.components = []
  
    


    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.start = methods.start
    this.emit = methods.emit
    this.handleComponentMerged = methods.handleComponentMerged
    this.componentMerged = methods.componentMerged
   

  }

  

}

export default Master