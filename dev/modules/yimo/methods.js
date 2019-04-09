


export const init = function(){
  
  
  console.log('Store has been initialised')
	this.listens()
	this.unload()
	
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

			if(data.hasOwnProperty('reducer')){

			
				self.actions[data.component] = []
				self.reducers[data.component] = {}

				for(let d in data){

					// console.log('Connect, self.actions')
					// console.log(self.actions)
					if(d !== 'component'){

						// console.log('The value of d')
						// console.log(d)
						// console.log(data)

						// 	// console.log(d)
						// 	 console.log(data[d])

							// console.log('Actions type')
							// console.log(typeof data[d])
							// console.log(data[d] instanceof Array)
						
							if(d === 'reducer'){

									// console.log('The value of d')
									// console.log(d)
									// console.log(data)
									self[`${d}s`][data.component][d] = data.reducer

							}else{


								data[d].forEach( i => {
									
									// console.log('The value of i in connect for each')
									// console.log(i)
								self[d][data.component].push(i)
								//  console.log('THe component actions after')
								//  console.log(self[d][data.component])

								});
						}



					}

					

				}
			

				// console.log('The current reducers and actions')
				// console.log(self.actions)
				// console.log(self.reducers)

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

	//  console.log('self.actions')
	//  console.log(self.actions)
	//  console.log(data)

	 for(let action in self.actions){

		//  console.log('THe action prop')
		//  console.log(action)
		//  console.log(data)
		// console.log('counter')
		// console.log(counter)
	

			if(self.actions.hasOwnProperty(data.component)){

					console.log('THe dispatch contains component')

					

				 for(let ac = 0; ac < self.actions[data.component].length; ac++){

						// console.log('The ')
						// console.log(ac)
						// console.log(data.type)
						if(self.actions[data.component][ac].hasOwnProperty('type') && self.actions[data.component][ac]['type'] === data.type){

							// console.log('The thing gets here')
							// console.log(self.actions[data.component][ac])
							// console.log(self.actions[data.component][ac]['type'])

							self.actions[data.component][ac]['action'](self,data.data)
							break
						}

					

				 }
				
				 break

			}
	 }

	
	
}

export const reducer = function(data){
	
	const self = this

		for(let reducer in self.reducers){

			if(self.reducers.hasOwnProperty(data.component)){


						// console.log('The reducer runs ')
						if(self.reducers[data.component].hasOwnProperty('reducer')){

							// console.log('The thing gets here IN THE REDUCER')

							// console.log('THe current component reducer')
							// console.log(self.reducers[data.component])

							self.reducers[data.component]['reducer'](self,{component: data.component,payload:data.payload,type: data.type})
							break
						}

				}
				
	}
	
	
}

export const setState = function(component,data){
	
	// console.log('THE SET STATE FUNCTION HAS BEEN INVOKED')
	// console.log('The COMPONENT NAME')
	// console.log(component)
	const self = this


	if(Object.keys(self.state).length > 0){


		const keys = Object.keys(self.state)
		// console.log('The length of keys')
		// console.log(keys.length)
	
		// console.log('The setState Runs')
		// console.log(keys)

		for(let k = 0; k < keys.length; k++){


					console.log('THE SETSTATE FOR LOOP')
					if(self.state.hasOwnProperty(component)){
				
							console.log('THe component state exist')
							console.log(data)
							self.state[component] = Object.assign(self.state[component],data)
							console.log('The updated component state data')
							console.log(self.state[component])
							self.supubEmit('STATE-CHANGE',component)
							
							break;
			
					}else if(k === keys.length - 1){
			
						console.log('TEH COMPONENT STATE DOES NOT EXIST, State containst data SET IT')
						self.state[component] = data
						console.log(data)
						console.log(self.state[component])
						self.supubEmit('STATE-CHANGE',component)
						
						break;
			
					}
		}

	}else{


				console.log('TEH COMPONENT STATE DOES NOT EXIST,state is empty SET IT')
				self.state[component] = data
				console.log(self.state[component])
				
				self.supubEmit('STATE-CHANGE',component)
				

	}
	
	
	
}

export const handleConnectToStore = function(data){

	// console.log('HANDLE ConnectToStore event has occured')
	// console.log(data)
	this.connectToStore(data)

}

export const connectToStore = function(data){

	// console.log('HANDLE ConnectToStore event has occured')
	// console.log(data)
	this.connect(data)

}

export const handleSubscribeToStore = function(data){

	// console.log('HANDLE Subscribe to store event has occured')
	this.subscribeToStore(data)
	
}

export const subscribeToStore = function(data){

	const self = this
	// console.log('Subscribe to store data')
	// console.log(data)
	// console.log(self.state)
	// console.log(self.supub)
	self.supubListen(data.event,data)

}

export const handleActionDispatch = function(data){

	// console.log('HANDLE Subscribe to store event has occured')
	this.actionDispatch(data)
	
}

export const actionDispatch = function(data){

	const self = this
	console.log('Action Dispatch data')
	console.log(data)

	self.dispatch(data)

}


export const supubListen = function(evt,data){

	const self = this

	// console.log('THE NOTIFIER LISTEN')
	// console.log(this)

	console.log(`Event: ${evt} has been subscribed, and the data is: ${data}`)
	console.log(data)
	console.log(self.supub)
	console.log(data.component)

	let comp = {
		callback: data.callback,
		type: evt
	}
	self.supub[data.component] = comp

	if(data.component === 'todo'){

		self.setState(data.component,data.initState)


	}
}

export const supubEmit = function(evt,component,data = {}){

	const self = this
//  console.log('THE NOTIFIEF EMIT')
//  console.log('Hi, I am the emit on state change')
 var keys = Object.keys(self.supub)

 for(let k=0; k < keys.length; k++){

	 if(self.supub.hasOwnProperty(component)){

			 self.supub[component]['callback'](self.state)
			 console.log(self.state)
			 break;

	 }
}

}

export const initState = function(data){

	const self = this

	self.supub[data.component]['callback'](data.state)


}

export const unload = function(){


	let sb = this.sb

	sb.sb_addEvent(window,'unload',this.rem.bind(this))
}

export const rem = function(e){

	console.log('The state is emptied')
	this.state = null
}
