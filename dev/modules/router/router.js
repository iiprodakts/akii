
import * as methods from "./methods"

class Router{
  
  
  constructor(sandbox){

    this.sb = sandbox
    this.routes = []
    this.links = []

    // methods

    this.init = methods.init
    this.listens = methods.listens
    this.emit = methods.emit
    this.handleCreateRoutes = methods.handleCreateRoutes
    this.createRoutes = methods.createRoutes
    this.handleRouterLink = methods.handleRouterLink
    this.routerLink = methods.routerLink
    this.handleAddressChanged = methods.handleAddressChanged
    this.addressChanged = methods.addressChanged
    this.handleLink = methods.handleLink
    this.matchAddress = methods.matchAddress
    this.handleRouteComponentSet = methods.handleRouteComponentSet
    this.routeComponentSet = methods.routeComponentSet
     
  }

  

}

export default Router