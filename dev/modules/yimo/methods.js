


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

	
	
}

export const reducer = function(action,payload){
	
	const self = this

	
	
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
