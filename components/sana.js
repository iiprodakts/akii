// function sana(sandbox) {
	
// 	this.sb = sandbox
	
// }

// sana.prototype.init = function(){
	
	 
// 	 this.listens()
	 
	
// }


// sana.prototype.listens = function(){
	
// 	var sb = this.sb 
// 	sb.sb_notifyListen({
		
// 		 'process-sana' : this.handlesanaOccured.bind(this),
		 
		
// 	})
// }

// sana.prototype.emit = function(eNotifs){
	
// 	var sb = this.sb 
	
	
		
// 		    sb.sb_notifyEvent({
		
// 		      type: eNotifs.type,
// 		      data: eNotifs.data
		
// 	     })
		

// }

// sana.prototype.handlesanaOccured = function(evInfo){
	
// 	var sb = this.sb 
	
	 
// 	  this.emit({type: 'render-sana',data: data })
	
// }

// sana.prototype.handleMessengerDone = function(eventInfo){
	  
	  
// 	  this.messengerDone(eventInfo)

// }

var els = {

	article : function(prop){

			var el = document.createElement(this.name)
			el.innerHTML= prop

			return el

	},
	div : function(prop,child){

		console.log('The function name')
		console.log(arguments.callee.name)
		var el = document.createElement(arguments.callee.name)

		if(child){

			var p = this.p('my data')
			console.log('The return child element')
			console.log(p)
			el.append(p)
		}

			el.innerHTML = prop

			return el
	},
	p : function(prop){

		console.log('The function name')
		console.log(arguments.callee.name)
		var el = document.createElement(arguments.callee.name)
		el.innerHTML = prop
		return el
		
	}
}

function Test(){

	return (

		
		els.div(

			'Ni dya vuswa',
			 'p'
			
			)
	
	)
}

var el = document.getElementById('data-component')

var rt = Test()

console.log(rt)
el.appendChild(rt)







