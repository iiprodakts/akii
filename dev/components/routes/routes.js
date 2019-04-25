
import * as methods from "./methods"
import routes from './routescontent'
// import  actions from './actions'
// import  reducer from './reducer'
// import List from './components/list'
// import Form from './components/form'
// import Copy from './components/copy'


class Routes{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.routes = routes
  
    


    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.start = methods.start
    this.emit = methods.emit
    this.handleMergeComponent = methods.handleMergeComponent
    this.mergeComponent = methods.mergeComponent
   

  }

  

}

export default Routes