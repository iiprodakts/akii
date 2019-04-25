
export const init = function(){
	
	console.log('Module: Router, has been initialised')
	 this.listens()
	 this.emit({type:'prowl-browser',data: ''})
   

}

export const listens = function(){
   
   var sb = this.sb 
   sb.sb_notifyListen({
		 
		'create-routes' : this.handleCreateRoutes.bind(this),
		'route-component-set' : this.handleRouteComponentSet.bind(this),
		'router-link' : this.handleRouterLink.bind(this),
		'address-changed' : this.handleAddressChanged.bind(this)
   
	   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	 
		console.log('The value of data in emit')
		console.log(eNotifs)
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		})
	   

}

export const handleCreateRoutes = function(data){
   
	// var sb = this.sb 
	
	this.createRoutes(data)


}

export const createRoutes = function(data){
	
	 console.log('THE ROUTES DATA')
	 console.log(data)
	 const self = this
	//  this.routes = data.routes


	  data.hasOwnProperty('routes') ? data.routes.forEach((ri,i) => {
			
			 self.emit({type:'route-component',data: ri})

		})
		: console.log('THE ROUTES ARE NOT DEFINED')

}

export const handleRouteComponentSet = function(data){
   
	// var sb = this.sb 
	
	this.routeComponentSet(data)


}

export const routeComponentSet = function(data){
	
	//  console.log('THE ROUTES DATA')
	//  console.log(data)
	 const self = this
	//  this.routes = data.routes

	 
	
		data.hasOwnProperty('component') && typeof data.component === 'object' ?
		 self.routes.push(data)
		: console.log('THE ROUTES ARE NOT DEFINED')

		// console.log('THE VALUE OF THE THIS.ROUTES')
		// console.log(self.routes)

}

export const handleRouterLink = function(data){
   
	// var sb = this.sb 
	
	console.log('THE ROUTER LINK HAS BEEN EMITTED')
	console.log(data)
	this.routerLink(data)


}

export const routerLink = function(data){
	
	 console.log('THE ROUTER LINK DATA')
	 console.log(data)
   const self = this
	 const sb = this.sb

	 data.hasOwnProperty('parent') ? 
	 sb.sb_addEvent(data.parent,'click',self.handleLink.bind(self,data.data.to))
	 :console.log('The parent does not exist here')

}

export const handleAddressChanged = function(data){
   
	// var sb = this.sb 
	console.log('The address-changed has occured')
	this.addressChanged(data)

}

export const addressChanged = function(data){
	
	this.matchAddress(data)

}

export const matchAddress = function(data){

	 
	 console.log('THE VALUE OF ROUTES')
	 console.log(this.routes)
	 let url = data.url
	 let regex = /^\/?(\w+)\/(\w+)/
	 let routes = this.routes

	 for(let r= 0; r < routes.length; r++){
 
			console.log('LOOPING THROUGH ROUTES')
			console.log(routes)
			console.log(routes[r])

			let match = url.match(new RegExp(routes[r].path))
			
			if(match){

				console.log('THE MATCHED ENDPOINT')
				console.log(match)

				routes[r].component.start()

				break
			}


	 }
	 
	// console.log('THE ADDRESS HAS CHANGED, HANDLE ROUTING AND COMPONENTS')
	// console.log(data)
	 

}

export const handleLink = function(entry,e){
	
	 console.log('The linking event has occured')
	 const sb = this.sb
	 sb.sb_preventNormal(e)
	 window.history.pushState({},'',entry)
	 this.emit({type: 'address-changed',data: {url: window.location.href}})

}



