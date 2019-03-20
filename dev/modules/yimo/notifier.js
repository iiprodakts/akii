



class Notifier{
  
  
  constructor(){

      this.events = {}
  
  }

  listen(evt,data){

     self = this
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

    console.log('Hi, I am the emit on state change')
    for(let evts in self.evts.events){

      if(self.evts.events.hasOwnProperty(component)){
  
          self.evts.events[component]['callback'](data)
          console.log(self.state)
          break;
  
      }
   }

  }



  

}

export default new Notifier()