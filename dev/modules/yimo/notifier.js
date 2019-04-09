



class Notifier{
  
  
  constructor(){

      this.evs = {}
      this.listen = listen
      this.emit = emit
      console.log('THE NOTIFIER EXECUTES')
  
  }

  listen(evt,data){

     self = this
     console.log('THE NOTIFIER LISTEN')
     console.log(this.evs)
     console.log(`Event: ${evt} has been subscribed, and the data is: ${data}`)
     console.log(data)
     console.log(self.evts.events)
     console.log(data.component)

     let comp = {
       callback: data.callback,
       type: evt
     }
     self.evts.events[data.component] = comp
  }

  emit(evt,component,data = {}){

    console.log('THE NOTIFIEF EMIT')
    console.log('Hi, I am the emit on state change')
    for(let evts in self.evts.events){

      if(self.evts.events.hasOwnProperty(component)){
  
          self.evts.events[component]['callback'](self.state)
          console.log(self.state)
          break;
  
      }
   }

  }



  

}

export default new Notifier()