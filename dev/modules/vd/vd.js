
import * as methods from "./methods"

class Vd{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.virtualDom = []
    this.realDom = []

    
   

    
    
    // methods
    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateDomTree = methods.handleCreateDomTree
    this.handleDomTreeCreated = methods.handleDomTreeCreated
    this.domTreeCreated = methods.domTreeCreated
    this.handleAddVirtualDom = methods.addVirtualDom
    this.handleAddDom = methods.handleAddDom
    this.randomNodeId = methods.randomNodeId
    this.addVirtualDom = methods.addVirtualDom
    this.createDomTree = methods.createDomTree
    this.beginDomiks = methods.beginDomiks
    this.checkVD = methods.checkVD
    this.saveDOM = methods.saveDOM
    this.addDom = methods.addDom
    this.startDiffing = methods.startDiffing
    this.diff = methods.diff
    this.childDiff = methods.childDiff
    // this.createVdChidren = methods.createVdChildren
    // this.handleComponentRender = methods.handleComponentRender
    

  }

  

}

export default Vd