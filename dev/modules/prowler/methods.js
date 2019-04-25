
export const init = function(){
	
	console.log('Module: Prowler , has been initialised')
	this.listens()
   //  this.emit({type:'get-component-name',data: ''})

}


export const listens = function(){
   
   var sb = this.sb 
   sb.sb_notifyListen({
	   
		'prowl-browser' : this.handleProwlBrowser.bind(this)
   
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
		 var sb = this.sb 
   
		   sb.sb_notifyEvent({
	   
			 type: eNotifs.type,
			 data: eNotifs.data
	   
		},)
	   

}

export const handleProwlBrowser = function(data){
   
	 // var sb = this.sb 
	 console.log('The Prowler handle is invoked')
   this.prowlBrowser(data)

}

export const prowlBrowser = function(data){
	 
		this.startProwl()


}

export const startProwl = function(data){
	 
	 const sb = this.sb
	 const self = this

	 console.log('THE HISTORY OBJECT')
	 console.log(window.history)
	 console.log(window.history.state)
	 
	 sb.sb_addEvent(window,'popstate',self.handlePopState.bind(self))
}

export const handlePopState = function(e){


		console.log('The postate event has occured')
		console.log('The COntent of the url location')
		console.log(window.location)
		console.log(window.location.href)
		console.log(history.state)

		this.addressChanged({url: window.location.href})

	//  window.history.pushState({},'','/about')
	 

}

export const addressChanged = function(data){
	 
   this.emit({type: 'address-changed',data: data })
}
