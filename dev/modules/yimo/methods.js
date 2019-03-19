


export const init = function(){
  
  
    console.log('Store has been initialised')
	this.listens()
	
}


export const listens = function(){
	
  var sb = this.sb 
  
  
	sb.sb_notifyListen({
		
		//  'store-notify-listen': this.handleStoreNotifyListen.bind(this),
		 'connect-to-store': this.handleConnectToStore.bind(this)
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

				self.actions[data.component] = data.actions
				self.reducers[data.component] = data.reducers

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

			if(action.hasOwnProperty(data.component)){

					self.action[data.component](data)
					break;

			}
	 }

	
	
}

export const reducer = function(data){
	
	const self = this

	for(let reducer in self.reducers){

		if(reducer.hasOwnProperty(data.component)){

				self.reducers[data.component](data.component,data.payload)
				break;

		}
 }
	
	
}

export const setState = function(component,data){
	
	const self = this

	for(let contextState in self.state){

		if(self.state.hasOwnProperty(component)){

	
				self.state[component] = data
				this.events.emit('stateChange',component)
				
				break;

		}
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
