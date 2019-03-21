


export const init = function(){
  
  
    console.log('Store has been initialised')
	this.listens()
	
}

export const listens = function(){
	
  var sb = this.sb 
  
  
	sb.sb_notifyListen({
		
		  'subscribe-to-store': this.handleSubscribeToStore.bind(this),
		 'connect-to-store': this.handleConnectToStore.bind(this),
		 'action-dispatch': this.handleActionDispatch.bind(this)
		//  'action-dispatch': this.handleActionDispatch.bind(this)
		 
	},sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var sb = this.sb 

	sb.sb_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

		})
	

}

export const connect = function(data){
	
	const self = this

	if(data.hasOwnProperty('component')){

		if(data.hasOwnProperty('actions')){

			if(data.hasOwnProperty('reducers')){

				self.actions[data.component] = {}
				self.reducers[data.component] = {}

				for(let d in data){

					if(d !== 'component'){

							console.log(d)
							console.log(data[d])

							console.log('Actions type')
							console.log(typeof data[d])
							console.log(data[d] instanceof Array)
						
							data[d].forEach( i => {
								
							 self[d][data.component] = Object.assign(self[d][data.component],i) 

							});
					}

					

				}
			

				console.log('The current reducers and actions')
				console.log(self.actions)
				console.log(self.reducers)

			}else{

				console.log('Yimo requires component reducers for component state')
			}
		}else{

			console.log('Yimo requires component actions for component state')
		}
	}else{

		console.log('Yimo requires component reducers for component state')
	}

	
	
}

export const dispatch = function(data){
	
	const self = this

	 for(let action in self.actions){

			if(self.actions.hasOwnProperty(data.component)){

					console.log('THe dispatch contains component')

				 for(let ac in self.actions[data.component]){

				  	console.log('The ')
						if(self.actions[data.component].hasOwnProperty('type') && self.actions[data.component]['type'] === data.type){

							console.log('The thing gets here')

							self.actions[data.component]['action'](self)
							break
						}

				 }
				

			}
	 }

	
	
}

export const reducer = function(data){
	
	const self = this

	for(let reducer in self.reducers){

		if(self.reducers.hasOwnProperty(data.component)){

				console.log('THe dispatch contains component')

			 for(let re in self.reducers[data.component]){

					console.log('The reducer runs ')
					if(self.reducers[data.component].hasOwnProperty('type') && self.reducers[data.component]['type'] === data.type){

						console.log('The thing gets here IN THE REDUCER')

						console.log('THe current component reducer')
						console.log(self.reducers[data.component])
						self.reducers[data.component]['reducer'](self,{component: data.component,payload:data.payload,type: data.type})
						break
					}

			 }
			

		}
 }
	
	
}

export const setState = function(component,data){
	
	console.log('THE SET STATE FUNCTION HAS BEEN INVOKED')
	const self = this


	if(Object.keys(self.state).length > 0){


		const keys = Object.keys(self.state)
	
		console.log('The setState Runs')
		console.log(keys)

		for(let k = 0; k < keys.length; k++){


			console.log('THE SETSTATE FOR LOOP')
			if(self.state.hasOwnProperty(component)){
		
					console.log('THe component state exist')
					self.state[component] = Object.assign(self.state[component],data)
					self.evts.emit('stateChange',component)
					
					break;
	
			}else if(k === keys.length - 1){
	
				console.log('TEH COMPONENT STATE DOES NOT EXIST,SET IT')
				self.state[component] = Object.assign(self.state[component],data)
				self.evts.emit('stateChange',component)
				
				break;
	
			}
	 }

	}else{


				console.log('TEH COMPONENT STATE DOES NOT EXIST,SET IT')
				self.state[component] = data
				self.evts.emit('stateChange',component)
				

	}
	
	
	
}

export const handleConnectToStore = function(data){

	console.log('HANDLE ConnectToStore event has occured')
	console.log(data)
	this.connectToStore(data)

}

export const connectToStore = function(data){

	console.log('HANDLE ConnectToStore event has occured')
	console.log(data)
	this.connect(data)

}

export const handleSubscribeToStore = function(data){

	console.log('HANDLE Subscribe to store event has occured')
	this.subscribeToStore(data)
	
}

export const subscribeToStore = function(data){

	const self = this
	console.log('Subscribe to store data')
	console.log(data)
	console.log(self.state)
	console.log(self.evts)
	self.evts.listen(data.event,data)

}

export const handleActionDispatch = function(data){

	console.log('HANDLE Subscribe to store event has occured')
	this.actionDispatch(data)
	
}

export const actionDispatch = function(data){

	const self = this
	console.log('Subscribe to store data')
	console.log(data)

	self.dispatch(data)

}

